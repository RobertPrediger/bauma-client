<template>
    <q-page class="q-pa-sm">

        <NavBar :title="$t('messages.LabelTags')" icon="event_seat" stateName="trans" :state="transStore"></NavBar>

        <q-card>
            <q-card-section>
                <Grid gridName="translationGrid" :gridOptions="transGrid" stateName="trans" :state="transStore" @subGridReady="subGridReady" />
            </q-card-section>

            <q-card-section>
                <div class="text-h6" v-t="'messages.TransTitle'"></div>
            </q-card-section>
            
            <q-separator />

            <q-form @submit="doSave()" class="q-gutter-xs" ref="refTrans">
                <input type="submit" style="position: absolute; left: -9999px"/>

                <q-card-section>
                    <div class="row q-col-gutter-md">
                        <div class="col-6">

                            <q-input name="key" v-model="form.key" lazy-rules dense outlined
                                :label="$t('messages.Key')"
                                />

                        </div>
                        <div class="col-6">
                            
                            <q-input v-for="item of languages" :key="item.name" dense outlined
                                :name="item.name"
                                v-model="form.lang[ item.name ]"
                                :label="item.desc"
                                :placeholder="item.name"
                                />

                        </div>
                    </div>
                </q-card-section>
            </q-form>
        </q-card>
    </q-page>
</template>

<script lang="ts" setup>
import GlobalView                       from '../common/helpers/GlobalView';
import NavBar                           from '../components/NavBar.vue'; 
import Grid                             from '../common/components/Grid.vue';

import { useDataStore }                 from 'src/stores/data.store';

import _                                from 'lodash';
import debug                            from 'debug';
const log         = debug('app:translation');

const languagesStore                    = useDataStore( 'languages', 'languages' );

const { data: languages }               = storeToRefs( languagesStore );

const init        = {
    collName:       'translations',
    stateName:      'trans',
    defaultForm:    {
        lang:               {}
    }
};
const globalView  = GlobalView( init );
const { 
    store:          transStore, 
    data:           trans, 
    doSave,
    form 
}  = globalView;

const transGrid       = ref({});

function subGridReady( { colMenu }: { colMenu: any} ) {
    for (const lng of languages.value ) {
        colMenu.push({
            field:      `lang.${lng.name}`,
            headerName: lng.desc
        });
    }
}

</script>

<style scoped>

.grid {
    height:        400px;
    width:         100%;
}
</style>
