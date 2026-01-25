<template>
    <q-page class="q-pa-sm">

        <NavBar :title="$t('messages.TitleLanguages')" icon="event_seat" stateName="languages" :state="languagesStore" :globalView="globalView"/>

        <q-card>
            <q-card-section>
                <Grid stateName="languages" gridName="langGrid" :gridOptions="langGrid" :state="languagesStore" />
            </q-card-section>

            <q-card-section>
                <div class="text-h6" v-t="'messages.TitleLanguages'"></div>
            </q-card-section>
            
            <q-separator />

            <q-form @submit="doSave()" class="q-gutter-xs" ref="refLang">
                <input type="submit" style="position: absolute; left: -9999px"/>

                <q-card-section>
                    <div class="row">
                        <div class="col-6">

                            <q-input name="name" v-model="form.name" lazy-rules dense outlined
                                :label="$t('messages.ColLanguage')"
                                />
                            <q-input name="desc" v-model="form.desc" lazy-rules dense outlined
                                :label="$t('messages.ColDesc')"
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

import _                                from 'lodash';

import debug                            from 'debug';
const log         = debug('app:languages');

const init        = { 
    collName:       'languages', 
    stateName:      'languages'
};
const globalView  = GlobalView( init );
const { 
    store:          languagesStore, 
    data:           languages, 
    doSave,
    form 
}  = globalView;

const langGrid              = ref({});

</script>

<style scoped>

.grid {
    height:        400px;
    width:         100%;
}
</style>
