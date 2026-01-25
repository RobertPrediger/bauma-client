<template>
    <q-page class="q-pa-sm">

        <NavBar :title="$t('messages.LabelPortal')" icon="event_seat" stateName="portalStore" :state="portalStore" />
        
        <div class="row q-col-gutter-md">
            <div class="col">
                <q-card>
                    <q-card-section>
                        <Grid gridName="portalGrid" :gridOptions="portalGrid" stateName="portals" :state="portalStore" />
                    </q-card-section>
        
                    <q-separator />
                </q-card>
            </div>
        </div>

        <div class="row q-col-gutter-md">
            <div class="col">
                <q-card class="form">

                    <q-card-section>
                        <div class="text-h6" v-t="'messages.LabelPortal'"></div>
                    </q-card-section>
                    
                    <q-separator />
        
                    <q-form @submit.prevent.stop="doSave" class="q-gutter-xs" ref="refPortals">
                        <input type="submit" style="position: absolute; left: -9999px"/>
        
                        <q-card-section>
                            <div class="row q-col-gutter-md">
                                <div class="col-6">
        
                                    <q-input name="name" v-model="form.name" lazy-rules dense outlined
                                        :label="$t('messages.ColName')"
                                        :rules="[ val => !!val || $t('messages.TextRequired')]"
                                        hint=""
                                        />
                                    <q-input name="desc" v-model="form.desc" lazy-rules dense outlined
                                        :label="$t('messages.ColDesc')"
                                        hint=""
                                        />
                                    <q-checkbox name="active" v-model="form.active"
                                        :label="$t('messages.ColActive')"
                                        hint=""
                                        />
        
                                </div>
                                <div class="col-6">
        
                                    <q-input type="mail" name="email" v-model="form.email" lazy-rules dense outlined
                                        :label="$t('messages.ColMail')"
                                        :rules="[ val => !!val || $t('messages.TextRequired')]"
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
const log         = debug('app:portal');

const init        = { 
    collName:       'portal', 
    stateName:      'portals'
};
const globalView  = GlobalView( init );
const { 
    store:          portalStore, 
    data:           portals, 
    doSave,
    form 
}  = globalView;

const portalGrid     = reactive({
        components:     {
            activeColumn:   function( params ) {
                return params.value ? '<i class="fas fa-check-square" />' : '';
            }
        }
    });

</script>

<style scoped lang="scss">

.scroll {
    height:    calc( 100vh - 400px - 100px - 95px - 70px );
}

</style>