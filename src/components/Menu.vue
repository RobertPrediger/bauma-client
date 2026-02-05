<template>
    <div>
        <q-separator />

        <q-expansion-item expand-separator :icon="menu.icon" :label="menu.name" v-if="menu.collapsed" dense :class="[ menu.color ]">
            <Menu v-for="item in menu.collapsed" :key="item.link" :menu="item" :start="start + menu.link + '/'" />
        </q-expansion-item>

        <q-item v-else-if="menu.func" clickable @click="callFunc" dense :class="[ menu.color, `navlevel${level}` ]" :router-link-active="[ 'bg-teal-1' ]">
            <q-item-section avatar>
                <q-icon :name="menu.icon" />
            </q-item-section>
            <q-item-section>
                <q-item-label>{{ menu.name }}</q-item-label>
                <q-item-label caption>{{ menu.sub }}</q-item-label>
            </q-item-section>
        </q-item>

        <q-item clickable :to="start + menu.link" v-else dense :class="[ menu.color, `navlevel${level}` ]" :router-link-active="[ 'bg-teal-1' ]">
            <q-item-section avatar>
                <q-icon :name="menu.icon" />
            </q-item-section>
            <q-item-section>
                <q-item-label>{{ menu.name }}</q-item-label>
                <q-item-label caption>{{ menu.sub }}</q-item-label>
            </q-item-section>
        </q-item>
    </div>
</template>

<script lang="ts" setup>

import debug                            from 'debug';
const log         = debug('app:menu');

const props     = defineProps( {
    menu:           Object,
    start:          String
} );

const level         = ref( props.start.split('/').length - 2 );

function callFunc() {
    if ( this[ props.menu.func ] )
        return this[ props.menu.func ]();

    log( 'function not found:', props.menu.func );
}

function camelCase( str: string ) {
    const toUpper   = ( str: string ) => str.toUpperCase();
    return str.replace( /^./, toUpper );
}

// function usersnap() {
//     window.Usersnap.open();
// }
</script>

<style>

.navlevel1 {
    margin-left: 15px;
}
.navlevel2 {
    margin-left: 30px;
}

</style>
