<template>
    <q-page class="q-pa-sm">

        <NavBar :title="$t('messages.LabelMailtemplate')" icon="dashboard" stateName="mailtemplates" :state="mailtemplatesStore" :locButtons="mailButtons" />

        <div class="row q-col-gutter-md">
            <div class="col-6">
                <q-card>
                    <q-card-section>
                        <Grid gridName="templateGrid" :gridOptions="templateGrid" stateName="mailtemplates" :state="mailtemplatesStore" orientation="portrait" @subGridReady="subGridReady" />
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-6">
                <q-card>
                    <q-card-section>
                        <div class="text-h6" v-t="'messages.ColMailtemplate'"></div>
                    </q-card-section>
                    
                    <q-separator />
        
                    <q-form enctype="multipart/form-data" @submit="doSave" class="q-gutter-xs">
                        <input type="submit" style="position: absolute; left: -9999px"/>
        
                        <q-card-section>
                            <div class="row q-col-gutter-md">
                                <div class="col">
        
                                    <q-input name="desc" v-model="form.desc" lazy-rules dense outlined ref="refMailtemplates"
                                        :label="$t('messages.ColDesc')"
                                        hint=""
                                        />

                                    <q-input name="name" v-model="form.name" lazy-rules dense outlined
                                        :label="$t('messages.ColName')"
                                        :rules="[ val => !!val || $t('messages.TextRequired')]"
                                        :hint="$t('messages.HintTemplateName')"
                                        />

                                    <div class="row q-col-gutter-md">
                                        <div class="col">
                                            <q-radio name="type" v-model="form.type" val="Mail" :label="$t('messages.ColMail')" />
                                            <q-radio name="type" v-model="form.type" val="Letter" :label="$t('messages.ColLetter')" />
                                            <q-radio name="type" v-model="form.type" val="PDF" :label="$t('messages.ColPDF')" />
                                        </div>
                                    </div>
                                        
                                    <q-input name="desc" v-model="form.subject" lazy-rules dense outlined v-show="form.type === 'Mail'" 
                                        :label="$t('messages.LabelSubject')"
                                        :hint="$t('messages.HintTemplateSubject')"
                                        />

                                    <q-input name="fileName" v-model="form.fileName" lazy-rules dense outlined v-show="form.type === 'PDF'" 
                                        :label="$t('messages.ColFileName')"
                                        />

                                    <q-select v-model="form.source" lazy-rules dense outlined
                                        :label="$t('messages.LabelSrc')"
                                        :options="sources"
                                        emit-value
                                        map-options
                                        :rules="[ val => !!val || 'Quelle muss angegeben werden!' ]"
                                        >
                                        <template v-slot:option="scope">
                                            <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
                                                <q-item-section>
                                                    <q-item-label v-text="scope.opt.label"></q-item-label>
                                                </q-item-section>
                                            </q-item>
                                        </template>
                                    </q-select>

                                </div>
                            </div>
                        </q-card-section>
                    </q-form>
                </q-card>
            </div>
        </div>        

        <!-- <q-dialog v-model="promptMail">
            <q-card style="min-width: 400px">
                <q-card-section>
                    <div class="text-h6" v-t="'messages.TextMailAddress'"></div>
                </q-card-section>
                
                <q-card-section>
                    <q-input type="email" :hint="$t('messages.TextInputTestMail')" :dense="true" v-model="address" autofocus @keyup.enter="sendMail" />
                </q-card-section>
                <q-card-section>
                    <q-select name="lead" v-model="lead" lazy-rules :dense="true"
                        :label="$t('messages.LabelLead')"
                        :options="leads"
                        emit-value
                        map-options
                        >
                    </q-select>
                </q-card-section>
                
                <q-card-actions align="right">
                    <q-btn flat v-t="'messages.LabelCancel'" v-close-popup />
                    <q-btn flat v-t="'messages.TextSendMail'" v-close-popup color="primary" @click="sendMail" />
                </q-card-actions>
            </q-card>
        </q-dialog> -->
    
    </q-page>
</template>

<script lang="ts" setup>
import GlobalView                       from '../common/helpers/GlobalView';
import NavBar                           from '../components/NavBar.vue'; 
import Grid                             from '../common/components/Grid.vue';

import { useAccountStore }              from 'src/stores/account.store';
import { useDataStore }                 from 'src/stores/data.store';

import _                                from 'lodash';

import debug                            from 'debug';
const log         = debug('app:mailtemplates');

const accountStore                      = useAccountStore();
const configStore                       = useDataStore( 'config', 'config' );
const leadStore                         = useDataStore( 'lead', 'lead' );

const init        = { 
    collName:       'mailtemplates', 
    stateName:      'mailtemplates'
};
const globalView  = GlobalView( init );
const { 
    store:          mailtemplatesStore, 
    data:           mailtemplates, 
    doSave,
    form 
}  = globalView;

const { t }                     = useI18n();

const   templateGrid              = ref({
            columnTypes:    {
                typeColumn:     {
                    valueGetter( params: any ) {
                        return params.data.type ? t( `messages.Col${params.data.type}` ) : '';
                    }
                },
                sourceColumn:     {
                    valueGetter( params: any ) {
                        return (params.data.source && _.get( params, `context.sourceList.${params.data.source}.label`, '' )) || '';
                    }
                },
            }
        });

const   mailButtons    = [
            {
                label:      'EditText', 
                link:       'editTemplate', 
                icon:       'fas fa-edit'
            },
            {
                label:      'TestTemplate', 
                link:       'testTemplate', 
                icon:       'fas fa-envelope-open-text'
            }
        ],
        promptMail    = ref(false),
        address       = ref(''),
        lead          = ref({}),
        sources       = ref([]);

const { user }              = storeToRefs( accountStore );
const { data: config }      = storeToRefs( configStore );
const { data: leadData }    = storeToRefs( leadStore );
            
const   setting       = computed( () => config.value[0] ),
        leads         = computed( () => _.map( leadData.value, (item) => {
            return {
                value:      item._id,
                label:      `${item.gfz}, ${item.fahrzeug && item.fahrzeug.model}, ${item.lead && item.lead.name}`
            };
        }));

async function clickButton( link: string ) {
    // log( 'clickButton', link );
    // switch(link) {
    //     case 'editTemplate':
    //         await this.editTemplate();
    //         break;
    //     case 'testTemplate':
    //         await this.testTemplate();
    //         break;
    // }
}

async function sendMail() {
    log( 'sendMail', address.value );
    // this.promptMail     = false;        // in case of enter
    
    // await this.$http.post( '/custom/testmail', { ...this.form, address: this.address, lead: this.lead } );
    // this.$q.notify({
    //     message:        this.$t('messages.TextMailSent'), 
    //     color:          'green-9',
    //     icon:           'done',
    //     position:       'top-right',
    //     timeout:        1000
    // });
}

// grid -> ready
function subGridReady( { gridOpt }: { gridOpt: any } ) {
    gridOpt.context    = {
        sourceList:         _.keyBy( sources.value, 'value' ),
    };
    log( 'CONTEXT', gridOpt.context );
}

onBeforeMount( async () => {
    log( 'onMounted' );
    const result              = await axios.post( '/custom/getProcessBlocks', { type: 'sources' } );
    sources.value       = result.data.options.sources;
});

</script>

<style scoped>

.editDialog {
    min-width:     calc( 100vw - 50px );
    min-height:    calc( 100vh - 50px );
}

.activeList {
    background-color: #DDDDDD;
}
</style>

<style>
@import "../_variables.scss";

.aceWindow {
    width:     calc( 100vw - 130px );
    max-width:     calc( 100vw - 130px ) !important;
    height:    calc( 100vh - 100px );
    background-color: white;
}

</style>