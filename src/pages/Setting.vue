<template>
    <q-page class="q-pa-sm">

        <NavBar :title="$t('messages.LabelSettings')" icon="settings" stateName="config" :state="configStore" />
        
        <q-card>
            <q-form @submit="doSave" ref="refConfig">
                <input type="submit" style="position: absolute; left: -9999px"/>
            
                <q-card-section>
                    <q-tabs v-model="tab" class="text-teal" align="left" dense outlined>
                        <q-tab :label="$t('messages.LabelGlobal')" name="global" />
                        <q-tab :label="$t('messages.ColMail')" name="mail" />
                        <q-tab :label="$t('messages.LabelProcess')" name="process" />
                    </q-tabs>
                
                    <q-tab-panels v-model="tab">
    
                        <q-tab-panel name="global">
                            <div class="row q-col-gutter-md">
                                <div class="col-8 col-md-4">

                                    <q-input name="name" v-model="form.name" lazy-rules dense outlined
                                        :label="$t('messages.ColName')"
                                        />

                                    <q-select name="company" v-model="form.company" lazy-rules dense outlined
                                        :label="$t('messages.LabelCompany')"
                                        :hint="$t('messages.TextCompanyHint')"
                                        :options="companies"
                                        emit-value
                                        map-options
                                        >
                                        <template v-slot:option="scope">
                                            <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
                                                <q-item-section>
                                                    <q-item-label v-text="scope.opt.label"></q-item-label>
                                                    <q-item-label caption>{{ scope.opt.caption }}</q-item-label>
                                                </q-item-section>
                                            </q-item>
                                        </template>
                                    </q-select>
                                    
                                    <q-input name="bcc" v-model="form.bcc" lazy-rules dense outlined
                                        :label="$t('messages.LabelMailBCC')"
                                        :hint="$t('messages.TextMailBCCHint')"
                                        />

                                    <q-input name="c1" v-model="form.c1" lazy-rules dense outlined
                                        label="Mail Customer1"
                                        hint=""
                                        />

                                    <!-- <q-input name="kampagne" v-model="form.kampagne" lazy-rules dense outlined
                                        :label="$t('messages.LabelDomainKampagne')"
                                        :hint="$t('messages.TextDomainKampagneHint')"
                                        /> -->
                                </div>
                                
                                <div class="col-8 col-md-4">
                                    <q-input name="sales.name" v-model="form.autoseller" lazy-rules dense outlined
                                        :label="$t('messages.LabelAutoseller')"
                                        :hint="$t('messages.TextAutosellerHint')"
                                        />
                                </div>

                                <div class="col-4">
                                    <q-input name="lead.info" v-model="form.test" lazy-rules type="textarea" outlined
                                        :label="$t('messages.LabelInfo')"
                                        hint=""
                                        />
                                </div>
                            </div>
                        </q-tab-panel>

                        <q-tab-panel name="mail">
                            <div class="row q-col-gutter-md">
                                <div class="col-8 col-md-4">

                                    <q-input name="inboundMoveSuccess" v-model="form.inboundMoveSuccess" lazy-rules dense outlined
                                        :label="$t('messages.LabelInboundSuccess')"
                                        />

                                    <q-input name="inboundMoveFail" v-model="form.inboundMoveFail" lazy-rules dense outlined
                                        :label="$t('messages.LabelInboundFail')"
                                        />

                                    <q-input name="inboundMoveOther" v-model="form.inboundMoveOther" lazy-rules dense outlined
                                        :label="$t('messages.LabelInboundOther')"
                                        />
                                </div>
                                
                                <div class="col-8 col-md-4">
                                </div>

                                <div class="col-4">
                                </div>
                            </div>
                        </q-tab-panel>

                        <q-tab-panel name="process">
                            <div class="row">
                                <q-card class="col-4">
                                    <q-card-section>
                                        <div class="text-h6">{{ $t('messages.TitleInboundMail') }}</div>
                                    </q-card-section>

                                    <q-card-section>
                                        <q-checkbox v-model="form.processAnswerMail" lazy-rules outlined
                                            :label="$t('messages.LabelAnswerMail')"
                                            />

                                        <div class="row" v-show="form.processAnswerMail">
                                            <div class="offset-1 col">
                                                <q-select v-model="form.processTemplateInbound" lazy-rules dense outlined
                                                    :label="$t('messages.ColMailtemplate')"
                                                    :options="templatesMail"
                                                    emit-value
                                                    map-options
                                                    >
                                                    <template v-slot:option="scope">
                                                        <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
                                                            <q-item-section>
                                                                <q-item-label v-text="scope.opt.label"></q-item-label>
                                                                <q-item-label caption>{{ scope.opt.caption }}</q-item-label>
                                                            </q-item-section>
                                                        </q-item>
                                                    </template>
                                                </q-select>

                                                <q-checkbox v-model="form.processAnswerExpose" lazy-rules outlined
                                                    :label="$t('messages.LabelAnswerExpose')"
                                                    />

                                                <div class="row" v-show="form.processAnswerExpose">
                                                    <div class="offset-1 col">
                                                        <q-select v-model="form.processTemplateExpose" lazy-rules dense outlined
                                                            :label="$t('messages.ColMailtemplate')"
                                                            :options="templatesPDF"
                                                            emit-value
                                                            map-options
                                                            >
                                                            <template v-slot:option="scope">
                                                                <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
                                                                    <q-item-section>
                                                                        <q-item-label v-text="scope.opt.label"></q-item-label>
                                                                        <q-item-label caption>{{ scope.opt.caption }}</q-item-label>
                                                                    </q-item-section>
                                                                </q-item>
                                                            </template>
                                                        </q-select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <q-checkbox name="processDoTeamMail" v-model="form.processDoTeamMail" lazy-rules outlined
                                            :label="$t('messages.LabelTeamMail')"
                                            />

                                        <div class="row" v-show="form.processDoTeamMail">
                                            <div class="offset-1 col">
                                                <q-input name="teamMail" v-model="form.processTeamMail" lazy-rules dense outlined
                                                    :label="$t('messages.LabelTeamMail')"
                                                    :hint="$t('messages.TextNoTeamFound')"
                                                    />
                                            </div>
                                        </div>

                                        <q-checkbox name="processMoveMail" v-model="form.processMoveMail" lazy-rules outlined
                                            :label="$t('messages.LabelMoveMail')"
                                            />

                                        <div class="row" v-show="form.processMoveMail">
                                            <div class="offset-1 col">
                                                <q-input name="mailFolderDone" v-model="form.inboundMoveSuccess" lazy-rules dense outlined
                                                    :label="$t('messages.LabelFolder')"
                                                    :hint="$t('messages.TextMailDone')"
                                                    />
                                            </div>
                                        </div>

                                        <q-checkbox name="processMoveMailError" v-model="form.processMoveMailError" lazy-rules outlined
                                            :label="$t('messages.LabelMoveMailError')"
                                            />

                                        <div class="row" v-show="form.processMoveMailError">
                                            <div class="offset-1 col">
                                                <q-input name="mailFolderError" v-model="form.inboundMoveFail" lazy-rules dense outlined
                                                    :label="$t('messages.LabelFolder')"
                                                    :hint="$t('messages.TextMailFolderError')"
                                                    />
                                            </div>
                                        </div>

                                        <q-checkbox name="processOtherMail" v-model="form.processOtherMail" lazy-rules outlined
                                            :label="$t('messages.LabelMoveOtherMail')"
                                            />

                                        <div class="row" v-show="form.processOtherMail">
                                            <div class="offset-1 col">
                                                <q-input name="inboundMoveOther" v-model="form.inboundMoveOther" lazy-rules dense outlined
                                                    :label="$t('messages.LabelInboundOther')"
                                                    />
                                            </div>
                                        </div>

                                    </q-card-section>
                                </q-card>
                            </div>
                        </q-tab-panel>
                    </q-tab-panels>
                </q-card-section>
            </q-form>
        </q-card>
    </q-page>
</template>

<script lang="ts" setup>
import GlobalView                       from '../common/helpers/GlobalView';
import NavBar                           from '../components/NavBar.vue'; 

import _                                from 'lodash';

import { useDataStore }                 from 'src/stores/data.store';

const mailtemplatesStore               = useDataStore( 'mailtemplates', 'mailtemplates' );
const companiesStore                   = useDataStore( 'companies', 'companies' );

import debug                            from 'debug';
const log         = debug('app:setting');

const init        = { 
    collName:       'config', 
    stateName:      'config',
    defaultForm:    {
        processAnswerMail:        false,
        processAnswerExpose:      false,
        processDoTeamMail:        false,
        processMoveMail:          false,
        processMoveMailError:     false,
        processOtherMail:         false
    }
};
const globalView  = GlobalView( init );
const { 
    store:          configStore, 
    data:           config, 
    doSave,
    form 
}  = globalView;

const tab               = ref('global'),
      companies         = ref([]),
      templates         = ref([]);
            
const templatesMail     = computed( () => templates.value.filter( (temp: any) => temp.type === 'Mail' ) ),
      templatesPDF      = computed( () => templates.value.filter( (temp: any) => temp.type === 'PDF' ) );

Promise
    .all([
        configStore.getStore(),
        companiesStore.getStore(),
        mailtemplatesStore.getStore()
    ])
    .then( values => {
        form.value          = _.defaults( values[0].data[0], init.defaultForm );
        configStore.setRecord( form.value );
        log( 'CONFIG', form.value );

        companies.value     = values[1].data.map( (item: any) => {
            return {
                value:      item._id,
                label:      item.name,
                caption:    `${item.street}, ${item.zip} ${item.city}`
            };
        });

        templates.value     = values[2].data.map( (item: any) => {
            return {
                value:      item._id,
                label:      item.name,
                caption:    item.desc,
                type:       item.type
            };
        });
    });

</script>
