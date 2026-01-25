<template>
    <q-page class="q-pa-sm">

        <NavBar :title="$t('messages.LabelProcesssteps')" icon="open_with" stateName="processsteps" :state="processStepsStore" />
        
        <div class="row q-col-gutter-md">
            <div class="col-6">
                <q-card>
                    <q-card-section>
                        <Grid gridName="processStepGrid" :gridOptions="processStepGrid" stateName="processsteps" :state="processStepsStore" />
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-6">
                <q-card>

                    <q-card-section>
                        <div class="text-h6" v-t="'messages.LabelProcesssteps'"></div>
                    </q-card-section>
                    
                    <q-separator />
        
                    <q-form @submit="doSave" class="q-gutter-xs" ref="processsteps">
                        <input type="submit" style="position: absolute; left: -9999px"/>
        
                        <q-card-section>
                            <div class="row q-col-gutter-md">
                                <div class="col">
        
                                    <q-input name="name" v-model="form.name" lazy-rules dense outlined
                                        :label="$t('messages.ColName')"
                                        hint=""
                                        />
                                    <q-input name="desc" v-model="form.desc" lazy-rules dense outlined
                                        :label="$t('messages.ColDesc')"
                                        hint=""
                                        />
        
                                </div>
                            </div>
                        </q-card-section>
                    </q-form>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script lang="ts" setup>
import GlobalView                       from '../common/helpers/GlobalView';
import NavBar                           from '../components/NavBar.vue'; 
import Grid                             from '../common/components/Grid.vue';

import _                                from 'lodash';
import debug                            from 'debug';
const log         = debug('app:processSteps');

log( 'start' );

const init        = { 
    collName:       'processsteps', 
    stateName:      'processsteps'
};
const globalView  = GlobalView( init );
const { 
    store:          processStepsStore, 
    data:           processsteps, 
    doSave,
    form 
}  = globalView;

</script>
