<template>
    <q-layout container view="lHh lpR lff" class="shadow-2 rounded mail-window">
    
        <q-header elevated class="bg-primary text-white" height-hint="98">
            <q-toolbar>
                <q-toolbar-title>Mail</q-toolbar-title>
                <q-separator spaced vertical />
                <q-btn no-caps size="md" color="white" text-color="black" @click="doSave()" icon="save_alt" dense>
                    <q-tooltip>{{ $t('messages.ButtonSave') }}</q-tooltip>
                </q-btn>
                <q-btn no-caps size="md" color="white" text-color="black" @click="doClose()" icon="close" dense>
                    <q-tooltip>{{ $t('messages.ButtonClose') }}</q-tooltip>
                </q-btn>
            </q-toolbar>
        </q-header>
    
        <q-page-container>
            <q-page class="back-grey">
                <q-form @submit="doSave" class="q-gutter-xs" ref="customer">
                    <input type="submit" style="position: absolute; left: -9999px"/>
                
                    <q-card-section>
                
                        <div class="row q-col-gutter-md">
                            <div class="col">
                                <q-input name="email" v-model="form.email" lazy-rules dense outlined
                                    :label="$t('messages.ColMail')"
                                    hint=""
                                    />
                                <q-input name="subject" v-model="form.subject" lazy-rules dense outlined
                                    :label="$t('messages.LabelSubject')"
                                    hint=""
                                    />
                                <editor ref="editor" :config="config" header
                                    />
                            </div>
                        </div>
                    </q-card-section>
                </q-form>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script lang="ts" setup>

import _                                from 'lodash';

import debug                            from 'debug';
const log         = debug('app:mail');

const props = defineProps({
    lead: {
        type:       Object,
        required:   true
    },
    showMail: {
        type:       Boolean,
        required:   true
    },
});

const emit      = defineEmits([
    'doClose',
]);

const   form          = ref({
            email:          props.lead.email,
            subject:        `Anfrage zu Fahrzeug ${props.lead.fahrzeug.model} (${props.lead.gfz})`,
            text:           ''
        }),
        config        = {};

function doSave() {
    log( 'doSave', form.value );
}

function doClose() {
    emit( 'doClose' );
}
        
</script>

<style scoped lang="scss">
@import "../_variables.scss";

.mail-window {
    width:     calc( 100vw - 400px );
    max-width: calc( 100vw - 400px ) !important;
    height:    calc( 100vh - 200px );
    background-color: white;
}

</style>