<template>
    <div id="q-app" :class="{ 'body': loggedIn, 'body-login': !loggedIn }">
        <router-view></router-view>
    </div>
</template>

<script lang="ts" setup>
import { useMeta }                      from 'quasar';
import { storeToRefs }                  from 'pinia';
import { useAccountStore }              from './stores/account.store';
import { useSocketStore }               from './stores/socket.module';
import { useDataStore }                 from './stores/data.store';

import debug                            from 'debug';
const log         = debug('app:app');

log( 'created' );

const accountStore          = useAccountStore();
const socketStore           = useSocketStore();
const configStore           = useDataStore( 'config', 'config' );
const languagesStore        = useDataStore( 'languages', 'languages' );

const { loggedIn }          = storeToRefs( accountStore );
const { _data: config }     = storeToRefs( configStore );

socketStore.init();
accountStore.relogin();
languagesStore.init();

configStore.getStore();

watch( config, ( value ) => {
    log( 'config changed', value[0].name );
    useMeta({
        title:      value[0] ? `Gummiketten - ${value[0].name}` : 'Gummiketten',
    });
});

</script>

<style lang="scss">

.body {
    background-color:    #eceff1;
}
.body-login {
    background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
    height: calc( 100vh );
}

.cellLeft{
    text-align: left;
}

.cellRight{
    text-align: right;
}

.cellCenter{
    text-align: center;
}

.ag-floating-filter-button {
    display: none !important;
}

.text-h7 {
    font-size: 1.15rem;
    font-weight: 500;
}

.q-field__label {
    color: #000000e6;
}
.q-field__bottom {
    color: #000000b4;
}

</style>
