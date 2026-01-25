<template>
    <q-page class="q-pa-sm">

        <NavBar :title="$t('messages.LabelModels')" icon="fas fa-border-style" stateName="models" :state="modelStore" />
        
        <div class="row q-col-gutter-md">
            <div class="col-6">
                <q-card>
                    <q-card-section>
                        <Grid gridName="modelsGrid" :gridOptions="modelsGrid" stateName="models" :state="modelStore" />
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-6">
                <q-card>

                    <q-card-section>
                        <div class="text-h6" v-t="'messages.ColModel'"></div>
                    </q-card-section>
                    
                    <q-separator />
        
                    <q-form @submit="doSave" class="q-gutter-xs" ref="portals">
                        <input type="submit" style="position: absolute; left: -9999px"/>
        
                        <q-card-section>
                            <div class="row">
                                <div class="col">
        
                                    <q-input name="type" v-model="form.model" lazy-rules dense outlined
                                        :label="$t('messages.ColModel')"
                                        :rules="[ val => !!val || $t('messages.TextRequired')]"
                                        hint=""
                                        />
                                    <q-input name="desc" v-model="form.desc" lazy-rules dense outlined
                                        :label="$t('messages.ColDesc')"
                                        hint=""
                                        />
                                    <q-input name="synonym" v-model="form.synonym" lazy-rules dense outlined
                                        type="textarea"
                                        :label="$t('messages.ColSynonym')"
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
const log         = debug('app:categories');

const init        = { 
    collName:       'models', 
    stateName:      'models'
};
const globalView  = GlobalView( init );
const { 
    store:          modelStore, 
    data:           models, 
    doSave,
    form 
}  = globalView;

const modelsGrid              = ref({});

</script>

<style scoped>
</style>