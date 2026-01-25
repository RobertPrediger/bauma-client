import qs                               from 'qs';

import { useAccountStore }              from 'src/stores/account.store';
import { useDataStore }                 from 'src/stores/data.store';

import _                                from 'lodash';

import debug                            from 'debug';
const log         = debug('app:globalView');

export default function globalView( { collName, stateName, defaultForm = {} }: { collName: string, stateName: string, defaultform?: any } ) {

    log( 'new instance normal', stateName, collName );

    // default form
    const form         = ref( defaultForm );

    // get user
    const { user }     = useAccountStore();
    
    // get store
    const store         = useDataStore( _.uniqueId( stateName ), collName );

    // get data from store
    const { _data: data }       = store;

    // default init of store
    store.initStore();

    // set record
    async function setRecord( record: any ) {
        log( 'setRecord', stateName, record );
        await store.dispatchAction( { action: 'beforeSelect', param: record } );

        form.value         = record;

        await store.dispatchAction( { action: 'afterSelect', param: form.value } );
    }

    // add record
    async function doAdd() {
        log( 'doAdd', stateName );
        try {
            form.value     = { ...defaultForm };

            await store.dispatchAction( { action: 'beforeAdd', param: form.value } );

            const result    = await store.addRecord( { record: form.value } );
            form.value      = result;
            
            await store.dispatchAction( { action: 'afterAdd', param: form.value } );
        }
        catch( error ) {
            form.value     = { ...defaultForm };
        }
    }

    // save record
    async function doSave() {
        log( 'doSave', stateName );
        try {

            await store.dispatchAction( { action: 'beforeSave', param: form.value } );

            form.value      = await store.updateRecord( { record: form.value } );

            await store.dispatchAction( { action: 'afterSave', param: form.value } );
        }
        catch( error ) {
            form.value     = { ...defaultForm };
        }
    }

    // delete record
    async function doDelete() {
        log( 'doDelete', stateName );
        try {

            await store.dispatchAction( { action: 'beforeDelete', param: form.value } );

            await store.deleteRecord( { record: form.value } );
            form.value     = { ...defaultForm };

            await store.dispatchAction( { action: 'afterDelete', param: form.value } );
        }
        catch( error ) {
            form.value     = { ...defaultForm };
        }
    }

    // call function
    async function callFunc( item: any ) {
        log( 'callFunc', item );
        
        switch( item.group ) {
            case 'print':
                log( 'print', item );
                
                // let filter      = this[ def.gridName ].api.getFilterModel();
                const filter      = {};
                log( 'filter', filter );
                
                if (item.click)
                    [ item.click ]();
                else
                    window.open( `/print/${item.link}?` + qs.stringify( { filter } ), 'blank', 'width=800,height=600,resizable=yes,scrollbars=auto,status=yes');  
                break;

            case 'functions':
                log( 'functions', item );
                await [ item.link ]( item );
                break;
        }
    }

    onMounted( () => {
        log( 'mounted', stateName );

        // add listeners
        store.registerAction( { action: 'setRecord',    target: 'GlobalView',   func: setRecord } );
        store.registerAction( { action: 'add',          target: 'GlobalView',   func: doAdd } );
        store.registerAction( { action: 'save',         target: 'GlobalView',   func: doSave } );
        store.registerAction( { action: 'delete',       target: 'GlobalView',   func: doDelete } );
    });

    onBeforeUnmount( () => {
        log( 'unmounted', stateName );

        store.$dispose();
    });

    log( 'created', stateName );

    return {
        store,
        data,
        form,
        user,
        doAdd,
        doSave,
        doDelete,
    };
}
