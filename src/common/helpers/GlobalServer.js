import { Notify }                       from 'quasar';

import EventBus                         from './EventBus';

import _                                from 'lodash';

import debug                            from 'debug';
const log         = debug('app:globalServer');

export default function(def) {
    log( 'new instance serverSide', def );
    
    return {
        data:           () => {
            return      {
            };
        },

        methods:        {
            // update success
            async updateSuccess( resp ) {
                log( 'updateSuccess', def.stateName, resp );
                
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
                            log( 'rowId', def.stateName, row );
                            
                            if (row)
                                row.setData( resp.body );
                            else if (def.push === 'all') {
                                this[ def.gridName ].api.purgeServerSideCache();
                            }
                                
                            break;
                        case 'delete':
                            
                            this[ def.gridName ].api.purgeServerSideCache();
                            break;
                    }
                }
            },
            
            // ag-grid is ready
            async subGridReady( params ) {
                let context        = this;

                function ServerSideDatasource() {
                    
                    return {
                        getRows( params ) {
                            log( 'getRows', def.stateName, params );
                            
                            let sort        = {};
                            for( let item of params.request.sortModel ) {
                                sort[ item.colId ]      = item.sort === 'asc' ? 1 : -1;
                            }
                            
                            let filter      = {};
                            _.each( params.request.filterModel, (item, key ) => {
                                filter[ key ]       = item;
                            });
                            
                            context.getStore( {
                                    limit:      def.limit || 100,
                                    skip:       params.request.startRow,
                                    sort,
                                    filter
                                } )
                                .then(
                                    ( body ) => {
                                        log( 'success', def.stateName, body );
                                        params.successCallback( body.data, body.total );
                                    },
                                    ( err ) => {
                                        log( 'Err', def.stateName, err );
                                        
                                        params.failCallback();
                                        
                                        Notify.create({
                                            message:        err,
                                            color:          'negative',
                                            icon:           'report_problem',
                                            position:       'top-right',
                                            timeout:        5000
                                        });
                                    }
                                );
                        }
                    };
                }
                
                // check for hook
                if ( this.beforeGetStore && typeof this.beforeGetStore === 'function' )
                    await this.beforeGetStore();

                // get datasource
                let datasource      = new ServerSideDatasource();
                params.api.setServerSideDatasource( datasource );
            }
        },

        created() {
            this.defaultGrid.deltaRowDataMode       = true;
            this.defaultGrid.rowModelType           = 'serverSide';
            this.defaultGrid.cacheBlockSize         = 100;
        },
        
        beforeMount()   {
            // add listeners
            EventBus.$on( 'saveSuccess:'         + def.stateName,    this.updateSuccess );   // save record
        },

        beforeDestroy() {
            // remove listeners
            EventBus.$off( 'saveSuccess:'        + def.stateName,    this.updateSuccess );   // save record
        }
    };
}
