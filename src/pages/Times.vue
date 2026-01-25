<template>
    <q-page class="q-pa-sm">

        <NavBar :title="$t('messages.LabelTimes')" icon="fas fa-clock" stateName="times" :state="timesStore" />

        <div class="row q-col-gutter-md">
            <div class="col-6">
                <q-card>
                    <q-card-section>
                        <Grid gridName="timesGrid" :gridOptions="timesGrid" stateName="times" :state="timesStore" orientation="portrait" />
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-6">
                <q-card>
                    <q-card-section>
                        <div class="text-h6" v-t="'messages.LabelTimes'"></div>
                    </q-card-section>
                    
                    <q-separator />
        
                    <q-form @submit.prevent.stop="doSave" class="q-gutter-xs" ref="refTimes">
                        <input type="submit" style="position: absolute; left: -9999px"/>
        
                        <q-card-section>
                            <div class="row q-col-gutter-md">
                                <div class="col">
        
                                    <q-input name="name" v-model="form.name" lazy-rules dense outlined
                                        :label="$t('messages.ColName')"
                                        :rules="[ val => !!val || $t('messages.TextRequired')]"
                                        hint=""
                                        />
                                    <q-input name="desc" v-model="form.desc" lazy-rules dense outlined
                                        :label="$t('messages.ColDesc')"
                                        hint=""
                                        />

                                    <div class="row q-col-gutter-md">
                                        <div class="col">
                                            <q-option-group name="to" v-model="form.type"
                                                :options="types"
                                                />
                                        </div>
                                        <div class="col">
                                            <q-option-group name="to" v-model="form.days"
                                                :options="days"
                                                type="checkbox"
                                                :hint="$t('messages.HintTimesDays')"
                                                />
                                        </div>
                                    </div>

                                    <div class="row q-col-gutter-md">
                                        <q-input name="from" v-model="form.from" lazy-rules dense outlined class="col" type="time"
                                            :label="$t('messages.ColFrom')"
                                            :rules="['time']"
                                            :hint="$t('messages.HintTimesFrom')"
                                            />
                                        <q-input name="to" v-model="form.to" lazy-rules dense outlined class="col" type="time"
                                            :label="$t('messages.ColTo')"
                                            :rules="['time']"
                                            :hint="$t('messages.HintTimesTo')"
                                            />
                                    </div>
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
const log         = debug('app:times');

const init        = { 
    collName:       'times', 
    stateName:      'times',
    defaultForm:    {
        days:           []
    }
};
const globalView  = GlobalView( init );
const { 
    store:          timesStore, 
    data:           times, 
    doSave,
    form 
}  = globalView;

const timesGrid              = ref({});

const   types             = [
            { value: 'GF', label: 'Geschäftszeiten' },
            { value: 'WE', label: 'Wochenende' },
            { value: 'NA', label: 'Nachts' }
        ],
        days              = [
            { value: 0, label: 'Sonntag' },
            { value: 1, label: 'Montag' },
            { value: 2, label: 'Dienstag' },
            { value: 3, label: 'Mittwoch' },
            { value: 4, label: 'Donnerstag' },
            { value: 5, label: 'Freitag' },
            { value: 6, label: 'Samstag' }
        ];

</script>
