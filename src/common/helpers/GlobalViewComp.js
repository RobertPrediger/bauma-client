import Vue                              from 'vue';
import { Notify }                       from 'quasar';
import qs                               from 'qs';

import { onBeforeUnmount, onMounted, reactive, computed }                from '@vue/composition-api';
import { useStore, useState, useActions }           from '@u3u/vue-hooks';

import DynamicModule                    from '../store/dynamic.module';
// import GlobalServer                     from './GlobalServer';
// import GlobalClient                     from './GlobalClient';

import _                                from 'lodash';

import debug                            from 'debug';
const log         = debug('app:globalViewComp');

export default function globalView( { form, collName, stateName, dataId, defaultForm = {} } ) {

    log( 'new instance normal', stateName, dataId );

    // get store
    const store         = useStore();

    // register dynamic module for data handling
    store.value.registerModule( dataId, DynamicModule );

    const state           = {
            ...useState( 'account', [ 'user' ] )
          };

    // get methods from generic datasource
    const actions       = {
            ...useActions( 'account', [ 'relogin' ] ),
            ...useActions( dataId, [ 'initStore', 'setRecord', 'addRecord', 'updateRecord', 'deleteRecord', 'registerAction', 'dispatchAction' ] )
          };
    log( 'actions', actions );

    // default init of store
    actions.initStore( { dataId, collName: collName || stateName } );

    // set record
    async function setRecord( record ) {
        log( 'setRecord', record, form.value );

        await actions.dispatchAction( { action: 'beforeSelect', param: record } );

        form.value         = record;

        log( 'afterSelect', dataId, form.value );
        await actions.dispatchAction( { action: 'afterSelect', param: form.value } );
    }

    async function doAdd() {
        log( 'doAdd', stateName );
        try {
            form.value     = defaultForm || {};

            await actions.dispatchAction( { action: 'beforeAdd', param: form.value } );

            const result      = await actions.addRecord( { record: form.value } );
            form.value      = result;
            
            await actions.dispatchAction( { action: 'afterAdd', param: form.value } );
        }
        catch( error ) {
            form.value     = defaultForm || {};
        }
    }

    async function doSave() {
        log( 'doSave', stateName );
        try {

            await actions.dispatchAction( { action: 'beforeSave', param: form.value } );

            form.value     = await actions.updateRecord( { record: form.value } );
            log( 'afterSave', form.value );

            await actions.dispatchAction( { action: 'afterSave', param: form.value } );
        }
        catch( error ) {
            form.value     = defaultForm || {};
        }
    }

    async function doDelete() {
        log( 'doDelete', stateName );
        try {

            await actions.dispatchAction( { action: 'beforeDelete', param: form.value } );

            form.value     = await actions.deleteRecord( { record: form.value } );

            await actions.dispatchAction( { action: 'afterDelete', param: form.value } );
        }
        catch( error ) {
            form.value     = defaultForm || {};
        }
    }

    // call function
    async function callFunc( item ) {
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

    async function getNavbar() {
        // get user rights
        const rights          = await Vue.http.get( `/model/rights/${stateName}.json` );
            
        const navbarSubmenu   = rights.body && rights.body.submenu;

        return navbarSubmenu;
    }
    
    onMounted( () => {
        log( 'mounted', stateName );

        // add listeners
        actions.registerAction( { action: 'setRecord',    target: 'GlobalView',   func: setRecord } );
        actions.registerAction( { action: 'add',          target: 'GlobalView',   func: doAdd } );
        actions.registerAction( { action: 'save',         target: 'GlobalView',   func: doSave } );
        actions.registerAction( { action: 'delete',       target: 'GlobalView',   func: doDelete } );
    });

    onBeforeUnmount( () => {
        log( 'beforeDestroy', stateName );

        store.value.unregisterModule( dataId );
    });

    log( 'created', dataId );

    return {
        state,
        callFunc,
        getNavbar,
        doSave,
        actions
    };
}
