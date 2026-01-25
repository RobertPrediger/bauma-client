<template>
    <div>
        <router-view />
    </div>
</template>

<script lang="ts" setup>

import debug                            from 'debug';
const log         = debug('app:main');

log( 'created' );

</script>