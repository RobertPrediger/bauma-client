<template>
    <q-dialog v-model="auditShow">
        <q-card class="editDialog">
            <q-card-section>
                <q-chat-message v-for="msg of messages" :key="msg._id"
                    :text="[ msg.html ]"
                    :sent="msg.sent"
                    :name="msg.id"
                    :stamp="msg.update"
                />
            </q-card-section>
            
        </q-card>
    </q-dialog>
</template>

<script>
import 'jsondiffpatch/dist/formatters-styles/html.css';

import EventBus                         from '../common/helpers/EventBus';

import debug                            from 'debug';
const log         = debug('app:showAudit');

log( 'start' );

export default {
    name:       'ShowAudit',
    data:       () => {
        return      {
            messages:       [],
            coll:           '',
            collkey:        '',
            auditShow:      false
        };
    },
    methods:        {
        // showAudit
        async showAudit( elm ) {
            log( 'showAudit', elm );

            this.coll           = elm.coll;
            this.collkey        = elm.key;

            let resp    = await this.$http.post( '/custom/getAudit', {
                    collName:       this.coll,
                    key:            this.collkey
                } );
                
            this.messages       = resp.data;

            this.auditShow      = true;
        }
    },
    beforeMount() {
        EventBus.$on( 'showAudit', this.showAudit );        // call function
    },
    beforeDestroy() {
        EventBus.$off( 'showAudit', this.showAudit );        // call function
    }
};
</script>

<style>

</style>