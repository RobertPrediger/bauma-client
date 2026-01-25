<template>
    <q-page class="q-pa-sm">

        <NavBar :title="$t('messages.LabelCustomer')" icon="dashboard" stateName="customer" :funcs="navbarSubmenu" :state="customerStore" />
        
        <q-card>
            <q-card-section>
                <Grid gridName="customerGrid" :gridOptions="customerGrid" stateName="customer" :state="customerStore" />
            </q-card-section>

            <q-separator />

            <q-form @submit="doSave" class="q-gutter-xs" ref="refCustomer">
                <input type="submit" style="position: absolute; left: -9999px"/>

                <q-card-section>
                    <div class="text-h6">{{ $t('messages.LabelCustomer') }}</div>

                    <div class="row q-col-gutter-md">
                        <div class="col-4">
                            <div class="row q-col-gutter-md">
                                <div class="col-6">
                                    <q-input name="salutation" v-model="form.salutation" lazy-rules :dense="true"
                                        :label="$t('messages.LabelSalutation')"
                                        />
                                </div>
                                <div class="col-6">
                                    <q-input name="title" v-model="form.title" lazy-rules :dense="true"
                                        :label="$t('messages.LabelTitle')"
                                        />
                                </div>
                            </div>
                            <q-input name="firstName" v-model="form.firstName" lazy-rules :dense="true"
                                :label="$t('messages.ColFirstname')"
                                />
                            <q-input name="surName" v-model="form.surName" lazy-rules :dense="true"
                                :label="$t('messages.ColSurname')"
                                />
                            <q-input name="email" v-model="form.email" lazy-rules :dense="true"
                                :label="$t('messages.ColMail')"
                                />
                            <q-input name="telefon" v-model="form.telefon" lazy-rules :dense="true"
                                :label="$t('messages.ColPhone')"
                                />
                            <q-input name="street" v-model="form.street" lazy-rules :dense="true"
                                :label="$t('messages.ColStreet')"
                                />
                                
                            <div class="row q-col-gutter-md">
                                <div class="col-3">
                                    <q-input name="zip" v-model="form.zip" lazy-rules :dense="true"
                                        :label="$t('messages.ColZip')"
                                        />
                                </div>
                                <div class="col-9">
                                    <q-input name="city" v-model="form.city" lazy-rules :dense="true"
                                        :label="$t('messages.ColCity')"
                                        />
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-8">

                            <q-tabs v-model="tab" class="text-teal" align="left" :dense="true">
                                <q-tab :label="$t('messages.LabelGeneral')" name="general" />
                                <q-tab :label="$t('messages.LabelLead')" name="lead" />
                            </q-tabs>
                        
                            <q-tab-panels v-model="tab">
            
                                <q-tab-panel name="general">
                                    <q-input name="city" v-model="form.dateFirst" lazy-rules dense outlined
                                        :label="$t('messages.LabelDateFirst')"
                                        disable />
                                    <q-input name="city" v-model="form.dateLast" lazy-rules dense outlined
                                        :label="$t('messages.LabelDateLast')"
                                        disable />
                                </q-tab-panel>
        
                                <q-tab-panel name="lead">
        
                                    <div class="row q-col-gutter-md">
                                        <div class="col-6">
                                            <q-list bordered separator :dense="true">
                                                <q-item clickable ripple v-for="item in leads" :key="item._id" :click="selectLead(item)">
                                                    <q-item-section>
                                                        <q-item-label>{{ item.fahrzeug.model }} ({{ item.gfz }})</q-item-label>
                                                        <q-item-label caption>{{ item.date }}</q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                            </q-list>
                                        </div>
        
                                        <div class="col-6">
                                            <q-list bordered separator :dense="true">
                                                <q-item>
                                                    <q-item-section>{{ $t('messages.ColHerst') }}</q-item-section>
                                                    <q-item-section>{{ lead.fahrzeug.hersteller }}</q-item-section>
                                                </q-item>
                                                <q-item>
                                                    <q-item-section>{{ $t('messages.ColCategory') }}</q-item-section>
                                                    <q-item-section>{{ lead.fahrzeug.kategorie }}</q-item-section>
                                                </q-item>
                                                <q-item>
                                                    <q-item-section>{{ $t('messages.ColModel') }}</q-item-section>
                                                    <q-item-section>{{ lead.fahrzeug.model }}</q-item-section>
                                                </q-item>
                                                <q-item>
                                                    <q-item-section>{{ $t('messages.ColDesc') }}</q-item-section>
                                                    <q-item-section>{{ lead.fahrzeug.desc }}</q-item-section>
                                                </q-item>
                                                <q-item>
                                                    <q-item-section>{{ $t('messages.ColColor') }}</q-item-section>
                                                    <q-item-section>{{ lead.fahrzeug.farbe }}</q-item-section>
                                                </q-item>
                                                <q-item>
                                                    <q-item-section>{{ $t('messages.ColPrice') }}</q-item-section>
                                                    <q-item-section>{{ lead.fahrzeug.preis }}</q-item-section>
                                                </q-item>
                                                <q-item>
                                                    <q-item-section>{{ $t('messages.ColPower') }}</q-item-section>
                                                    <q-item-section>{{ lead.fahrzeug.leistung }}kW</q-item-section>
                                                </q-item>
                                                <q-item>
                                                    <q-item-section>{{ $t('messages.LabelFirstRegist') }}</q-item-section>
                                                    <q-item-section>{{ lead.fahrzeug.erstzulassung }}</q-item-section>
                                                </q-item>
                                            </q-list>
                                        </div>
                                    </div>
                                </q-tab-panel>
                            </q-tab-panels>
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
const log         = debug('app:customer');

const init        = { 
    collName:       'customer', 
    stateName:      'customer'
};
const globalView  = GlobalView( init );
const { 
    store:          customerStore, 
    data:           customer, 
    doSave,
    form 
}  = globalView;

const customerGrid              = ref({});

const leads                     = ref([]);
const lead                      = ref({});

// select row
async function afterSelect( selectedRows: any ) {
    const rows        = await axios.post( '/custom/getLeadOfCust', selectedRows );
    
    log( 'selectRow', rows );
    
    leads.value      = rows.data;
    lead.value       = { fahrzeug: {} };
}

// select lead
function selectLead( item: any ) {
    lead.value       = item;
}

onMounted( () => {
    customerStore.registerAction( { action: 'afterSelect', target: 'Contact', func: afterSelect } );
});

</script>

<style>
@import "../_variables.scss";

#topol {
    min-width:     calc( 100vw - 80px );
    min-height:    calc( 100vh - 140px );
}

#topol > iframe {
    height:     calc( 100vh - 140px );
}
</style>