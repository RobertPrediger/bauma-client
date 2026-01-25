<template>
    <q-page class="q-pa-sm">

        <NavBar :title="$t('messages.LabelTags')" icon="people" stateName="tags" :state="tagStore" :globalView="globalView" />

        <q-card>
            <q-card-section>
                <Grid gridName="tagGrid" :gridOptions="tagGrid" stateName="tags" :state="tagStore" />
            </q-card-section>

            <q-card-section>
                <div class="text-h6" v-t="'messages.LabelTags'"></div>
            </q-card-section>
            
            <q-separator />

            <q-form @submit="doSave">
                <input type="submit" style="position: absolute; left: -9999px"/>

                <q-card-section>
                    <div class="row q-col-gutter-md">
                        <div class="col-6">

                            <q-select name="group" v-model="form.group" lazy-rules dense outlined ref="tags"
                                :label="$t('messages.LabelBranch')"
                                :options="branch"
                                emit-value
                                map-options
                                option-value="value"
                                option-label="label"
                                :rules="[ val => !!val || $t('messages.TextRequired')]"
                                />

                            <q-input type="number" name="order" v-model="form.order" lazy-rules dense outlined
                                :label="$t('messages.ColOrder')"
                                :rules="[ val => !!val || $t('messages.TextRequired')]"
                                />
                        </div>
                        <div class="col-6">
                            <q-input name="label" v-model="form.label" lazy-rules dense outlined
                                :label="$t('messages.ColText')"
                                />

                            <q-input name="value" v-model="form.value" lazy-rules dense outlined
                                :label="$t('messages.ColValue')"
                                />
                        </div>
                    </div>
                </q-card-section>
            </q-form>
        </q-card>
    </q-page>
</template>

<script lang="ts" setup>
import { useI18n }                      from 'vue-i18n';
import GlobalView                       from '../common/helpers/GlobalView';
import NavBar                           from '../components/NavBar.vue'; 
import Grid                             from '../common/components/Grid.vue';

import _                                from 'lodash';
import debug                            from 'debug';
const log         = debug('app:tags');

const { t }         = useI18n();

const branch     = [
    {
        value:          '',
        label:          ''
    },
    {
        value:          'fahrzeug',
        label:          t('messages.LabelCar')
    },
    {
        value:          'lead',
        label:          t('messages.LabelLead')
    },
    {
        value:          'mail',
        label:          t('messages.ColMail')
    },
    {
        value:          'infos',
        label:          t('messages.LabelCarinfo')
    },
    {
        value:          'sales',
        label:          t('messages.LabelSales')
    }
];

const init        = { 
    collName:       'tags', 
    stateName:      'tags',
    defaultForm:    {
        branch:         '',
        label:          '',
        value:          '',
        order:          0
    }
};
const globalView  = GlobalView( init );
const { 
    store:          tagStore, 
    data:           tags, 
    doSave,
    form 
}  = globalView;

const tagGrid       = ref({
        columnTypes:    {
            branchColumn:     {
                valueGetter( params ) {
                    const branch        = params.context.branchList[ params.data.group ];
                    return branch?.label || params.data.group;
                }
            }
        },
        context:        {
            branchList:         _.keyBy( branch, 'value' ),
        },
    });

</script>

<style scoped>

.grid {
    height:        400px;
    width:         100%;
}
</style>
