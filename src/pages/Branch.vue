<template>
    <q-page class="q-pa-sm">

        <NavBar :title="$t('messages.ColBranch')" icon="fas fa-users" stateName="branch" :state="branchStore" />

        <div class="row q-col-gutter-md">
            <div class="col-6">
                <q-card>
                    <q-card-section>
                        <Grid gridName="branchGrid" :gridOptions="branchGrid" stateName="branch" :state="branchStore" />
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-6">
                <q-card>
                    <q-card-section>
                        <div class="text-h6" v-t="'messages.LabelBranch'"></div>
                    </q-card-section>
                    
                    <q-separator />
        
                    <q-form @submit="doSave" ref="branchForm">
                        <input type="submit" style="position: absolute; left: -9999px"/>
        
                        <q-card-section>
                            <div class="row q-col-gutter-md">
                                <div class="col">
        
                                    <q-input name="branch" v-model="form.branch" lazy-rules dense outlined ref="refBranch"
                                        :label="$t('messages.LabelBranch')"
                                        :rules="[ val => !!val || $t('messages.TextRequired')]"
                                        />
                                    <q-input name="desc" v-model="form.desc" lazy-rules dense outlined 
                                        :label="$t('messages.ColDesc')"
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
const log         = debug('app:branch');

const init        = { 
    collName:       'branch', 
    stateName:      'branch'
};
const globalView  = GlobalView( init );
const { 
    store:          branchStore, 
    data:           branch, 
    doSave,
    form 
}  = globalView;

const branchGrid            = ref({});

</script>
