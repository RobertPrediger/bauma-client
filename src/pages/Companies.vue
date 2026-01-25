<template>
    <q-page class="q-pa-sm">

        <NavBar :title="$t('messages.LabelCompanies')" icon="location_city" stateName="companies" :state="companyStore" />
        
        <div class="row q-col-gutter-md">
            <div class="col">
                <q-card>
                    <q-card-section>
                        <Grid gridName="companyGrid" :gridOptions="companyGrid" stateName="companies" :state="companyStore" class="grid"/>
                    </q-card-section>
        
                    <q-separator />
                </q-card>
            </div>
        </div>

        <div class="row q-col-gutter-md">
            <div class="col">
                <q-card class="form">
                    <q-form @submit="doSave">
                        <input type="submit" style="position: absolute; left: -9999px" />
        
                        <q-card-section>
                            <div class="text-h6" v-t="'messages.LabelCompany'"></div>
                                    
                            <div class="row q-col-gutter-md">
                                <div class="col-4">
        
                                    <q-input name="name" v-model="form.name" lazy-rules dense outlined ref="refCompanies"
                                        :label="$t('messages.ColName')"
                                        :hint="$t('messages.TextNameHint')"
                                        :rules="[ val => !!val || $t('messages.TextRequired')]"
                                        />
                                    <q-input name="desc" v-model="form.desc" lazy-rules dense outlined
                                        :label="$t('messages.ColDesc')"
                                        hint=""
                                        />
                                    <q-input name="desc2" v-model="form.desc2" lazy-rules dense outlined
                                        :label="$t('messages.ColDesc') + ' 2'"
                                        hint=""
                                        />
                                    <q-input name="street" v-model="form.street" lazy-rules dense outlined
                                        :label="$t('messages.ColStreet')"
                                        hint=""
                                        />
                                        
                                    <div class="row q-col-gutter-md">
                                        <div class="col-3">
                                            <q-input name="zip" v-model="form.zip" lazy-rules dense outlined
                                                :label="$t('messages.ColZip')"
                                                hint=""
                                                />
                                        </div>
                                        <div class="col-9">
                                            <q-input name="city" v-model="form.city" lazy-rules dense outlined
                                                :label="$t('messages.ColCity')"
                                                hint=""
                                        />
                                        </div>
                                    </div>
        
                                </div>
                                
                                <div class="col-8">
                                    <q-card bordered>
                                        
                                        <q-tabs v-model="tab" class="text-teal" align="left" dense outlined>
                                            <q-tab :label="$t('messages.LabelContact')" name="contact" />
                                            <q-tab :label="$t('messages.LabelOpen')" name="open" />
                                        </q-tabs>
            
                                        <q-tab-panels v-model="tab">
                        
                                            <q-tab-panel name="contact">
                                                <div class="row q-col-gutter-md">
                                                    <div class="col-6">
                                        
                                                        <q-input type="phone" name="phone" v-model="form.phone" lazy-rules dense outlined
                                                            :label="$t('messages.ColPhone')"
                                                            hint=""
                                                            />
                                                        <q-input type="phone" name="fax" v-model="form.fax" lazy-rules dense outlined
                                                            :label="$t('messages.ColFax')"
                                                            hint=""
                                                            />
                                                        <q-input type="mail" name="mail" v-model="form.mail" lazy-rules dense outlined
                                                            :label="$t('messages.ColMail')"
                                                            hint=""
                                                            />
                                                        <q-input type="number" name="filiale" v-model="form.filiale" lazy-rules dense outlined
                                                            :label="`${$t('messages.LabelFil')} - ${$t('messages.LabelAutoseller')}`"
                                                            hint=""
                                                            />
                                                    </div>
                                                    
                                                    <div class="col-6">
                                                        <q-input name="register" v-model="form.register" lazy-rules dense outlined
                                                            :label="$t('messages.ColRegister')"
                                                            hint=""
                                                            />
                                                        <q-input name="registnr" v-model="form.registnr" lazy-rules dense outlined
                                                            :label="$t('messages.ColRegistnr')"
                                                            hint=""
                                                            />
                                                        <q-input name="state" v-model="form.state" lazy-rules dense outlined
                                                            :label="$t('messages.LabelState')"
                                                            hint=""
                                                            />
                                                    </div>
                                                </div>
                                            </q-tab-panel>
            
                                            <q-tab-panel name="open">
                                                <q-editor v-model="form.open" min-height="5rem" />
                                                <!--<q-input name="leadopen" v-model="form.open" lazy-rules type="textarea" dense outlined autogrow style="max-height: 300px;"-->
                                                <!--    :label="$t('messages.LabelOpen')"-->
                                                <!--    />-->
                                            </q-tab-panel>
                                            
                                        </q-tab-panels>
                                    </q-card>
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
const log         = debug('app:companies');

const init        = { 
    collName:       'companies', 
    stateName:      'company',
    defaultForm:    {
        open:           ''
    }
};
const globalView  = GlobalView( init );
const { 
    store:          companyStore, 
    data:           companies, 
    doSave,
    form 
}  = globalView;

const companyGrid         = ref({});

const   tab               = ref('contact');

</script>

<style scoped>

.grid {
    height: 300px;
}

.form {
    height:    calc( 100vh - 300px - 95px - 70px );
    width:         100%;
}

</style>