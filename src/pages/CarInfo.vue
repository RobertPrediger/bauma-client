<template>
    <q-page class="q-pa-sm">

        <NavBar :title="$t('messages.LabelCarinfo')" icon="extension" stateName="carinfo" :state="carinfoStore" />
        
        <div class="row q-col-gutter-md">
            <div class="col-6">
                <q-card>
                    <q-card-section>
                        <Grid gridName="carinfoGrid" :gridOptions="carinfoGrid" stateName="carinfo" :state="carinfoStore" orientation="portrait" />
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-6">
                <q-card>
                    <q-card-section>
                        <div class="text-h6">{{ $t('messages.ColCarInfo') }}</div>
                    </q-card-section>
        
                    <q-separator />
        
                    <q-form @submit="doSave" class="q-gutter-xs" ref="refCarinfo">
                        <input type="submit" style="position: absolute; left: -9999px"/>
                        
                        <q-card-section>
                            <div class="row q-col-gutter-md">
                                <div class="col">
        
                                    <q-input name="key" v-model="form.key" lazy-rules dense outlined
                                        :label="$t('messages.ColKey')"
                                        :rules="[ val => !!val || $t('messages.TextRequired')]"
                                        hint=""
                                        />
                                    <q-input name="desc" v-model="form.desc" lazy-rules dense outlined
                                        :label="$t('messages.ColDesc')"
                                        hint=""
                                        />
                                    <q-select name="type" v-model="form.type" lazy-rules dense outlined
                                        :options="options"
                                        :label="$t('messages.ColType')"
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
const log         = debug('app:languages');

const init        = { 
    collName:       'carInfo', 
    stateName:      'carinfo'
};
const globalView  = GlobalView( init );
const { 
    store:          carinfoStore, 
    data:           carinfo, 
    doSave,
    form 
}  = globalView;

const carinfoGrid              = ref({});

const   options           = [
            'string',
            'boolean',
            'number',
            'decimal'
        ];

</script>
