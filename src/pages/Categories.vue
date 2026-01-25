<template>
    <q-page class="q-pa-sm">

        <NavBar :title="$t('messages.LabelCategories')" icon="fas fa-border-style" stateName="categories" :state="categoryStore" />
        
        <div class="row q-col-gutter-md">
            <div class="col-6">
                <q-card>
                    <q-card-section>
                        <Grid gridName="categoryGrid" :gridOptions="categoryGrid" stateName="categories" :state="categoryStore" />
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-6">
                <q-card>

                    <q-card-section>
                        <div class="text-h6" v-t="'messages.LabelCategory'"></div>
                    </q-card-section>
                    
                    <q-separator />
        
                    <q-form @submit="doSave" class="q-gutter-xs" ref="portals">
                        <input type="submit" style="position: absolute; left: -9999px"/>
        
                        <q-card-section>
                            <div class="row">
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

log( 'start' );

const init        = { 
    collName:       'categories', 
    stateName:      'categories'
};
const globalView  = GlobalView( init );
const { 
    store:          categoryStore, 
    data:           categories, 
    doSave,
    form 
}  = globalView;

const categoryGrid              = ref({});

</script>

<style scoped>

.grid {
    height:        400px;
    width:         100%;
}
</style>