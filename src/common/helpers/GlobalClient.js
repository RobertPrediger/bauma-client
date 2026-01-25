import EventBus                         from './EventBus';

import debug                            from 'debug';
const log         = debug('app:globalClient');

export default function(def) {
    return {
        data:           () => {
            return      {
                defaultGrid:             {
                    rowModelType:       'clientSide'
                }
            };
        },

        methods:        {
            // update success
            async updateSuccess( resp ) {
                log( 'updatesuccess', resp );

                try {
                    if (this.afterSave && typeof this.afterSave === 'function')
                        await this.afterSave( resp );
                }
                catch( err ) {}
                
                if (def.gridName) {
                    switch (resp.type) {
                        case 'update':
                            // check if row exists (add or update)
                            let row       = this[ def.gridName ].api.getRowNode( resp.body._id );
                            log( 'rowId', row );
                            
                            if (row)
                                this[ def.gridName ].api.updateRowData({
                                    update:     [ resp.body ]
                                });
                            else
                                this[ def.gridName ].api.updateRowData({
                                    add:        [ resp.body ]
                                });
                            break;
                        case 'delete':
                            this[ def.gridName ].api.updateRowData({
                                remove:     [ resp.data.value ]
                            });
                            break;
                    }
                }
            }
        },

        beforeMount()   {
            // read default store
            this.$store.dispatch( def.stateName + '/getStore', this[ def.collName + 'parm' ] || {} );

            // add listeners
            EventBus.$on( 'saveSuccess:'         + def.stateName,    this.updateSuccess );   // save record
        },

        beforeDestroy() {
            // remove listeners
            EventBus.$off( 'saveSuccess:'        + def.stateName,    this.updateSuccess );   // save record
        }
    };
}
