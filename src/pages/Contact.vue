<template>
    <q-page class="q-pa-sm">

        <NavBar :title="$t('messages.LabelContact')" icon="dashboard" stateName="contact" :state="contactStore" type="window"></NavBar>
        
        <q-card>
            <q-card-section>
                <Grid gridName="contactGrid" :gridOptions="contactGrid" stateName="contact" :state="contactStore" type="server" orientation="portrait" />
            </q-card-section>

            <q-separator />
        </q-card>
        
        <q-dialog v-model="showContact" @hide="onContactHide"  no-backdrop-dismiss>
            <q-layout container view="lHh lpR lff" class="shadow-2 rounded detailWindow">
            
                <q-header elevated class="bg-primary text-white" height-hint="98">
                    <NavBar :title="$t('messages.ColContact')" icon="dashboard" stateName="contact" :state="contactStore" type="dialog" @close="onContactHide()"></NavBar>
                </q-header>
            
                <q-page-container>
                    <q-page>
      
                        <q-form @submit="doSave" class="q-gutter-xs" ref="refCustomer">
                            <input type="submit" style="position: absolute; left: -9999px"/>
            
                            <q-card-section>

                                <div class="row q-col-gutter-md">
                                    <div class="col-4">
                                        <div class="row q-col-gutter-md">
                                            <div class="col-6">
                                                <q-input name="salutation" v-model="form.salutation" lazy-rules dense outlined
                                                    :label="$t('messages.LabelSalutation')"
                                                    hint=""
                                                    />
                                            </div>
                                            <div class="col-6">
                                                <q-input name="title" v-model="form.title" lazy-rules dense outlined
                                                    :label="$t('messages.LabelTitle')"
                                                    hint=""
                                                    />
                                            </div>
                                        </div>
                                        <q-input name="firstName" v-model="form.firstName" lazy-rules dense outlined
                                            :label="$t('messages.ColFirstname')"
                                            hint=""
                                            />
                                        <q-input name="surName" v-model="form.surName" lazy-rules dense outlined
                                            :label="$t('messages.ColSurname')"
                                            hint=""
                                            />
                                        <q-input name="email" v-model="form.email" lazy-rules dense outlined
                                            :label="$t('messages.ColMail')"
                                            hint=""
                                            />
                                        <q-input name="telefon" v-model="form.telefon" lazy-rules dense outlined
                                            :label="$t('messages.ColPhone')"
                                            hint=""
                                            />
                                        <q-input name="street" v-model="form.street" lazy-rules dense outlined
                                            :label="$t('messages.ColStreet')"
                                            hint=""
                                            />
                                            
                                        <div class="row q-col-gutter-sm">
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
            
                                        <q-tabs v-model="tab" class="text-teal" align="left" dense outlined>
                                            <q-tab :label="$t('messages.LabelGeneral')" name="general" />
                                            <q-tab :label="$t('messages.LabelLead')" name="lead" />
                                        </q-tabs>
                                    
                                        <q-tab-panels v-model="tab">
                        
                                            <q-tab-panel name="general">
                                                <q-input name="city" :value="moment(form.dateFirst).format('dd.mm.yyyy')" lazy-rules dense outlined
                                                    :label="$t('messages.LabelDateFirst')"
                                                    disable />
                                                <q-input name="city" :value="moment(form.dateLast).format('dd.mm.yyyy')" lazy-rules dense outlined
                                                    :label="$t('messages.LabelDateLast')"
                                                    disable />
                                            </q-tab-panel>
                    
                                            <q-tab-panel name="lead">
                    
                                                <div class="row q-col-gutter-sm">
                                                    <div class="col-6">
                                                        <q-scroll-area class="lead-list">
                                                            <q-list bordered separator dense outlined>
                                                                <q-item clickable ripple v-for="item in leads" :key="item._id" @click="selectLead(item)" :class="lead._id == item._id ? 'bg-blue-1' : ''">
                                                                    <q-item-section>
                                                                        <q-item-label>{{ item.fahrzeug.model }} ({{ item.gfz }})</q-item-label>
                                                                        <q-item-label caption>{{ item.date }}</q-item-label>
                                                                    </q-item-section>
                                                                </q-item>
                                                            </q-list>
                                                        </q-scroll-area>
                                                    </div>
                    
                                                    <div class="col-6">
                                                        <q-list bordered separator dense outlined>
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
                                                                <q-item-section>{{ $t('messages.ColColor') }}</q-item-section>
                                                                <q-item-section>{{ lead.fahrzeug.farbe }}</q-item-section>
                                                            </q-item>
                                                            <q-item>
                                                                <q-item-section>{{ $t('messages.ColPrice') }}</q-item-section>
                                                                <q-item-section>{{ new Intl.NumberFormat( 'de', { style: 'currency', currency: 'EUR' }).format( lead.fahrzeug.preis ) }}</q-item-section>
                                                            </q-item>
                                                            <q-item>
                                                                <q-item-section>{{ $t('messages.ColPower') }}</q-item-section>
                                                                <q-item-section>{{ lead.fahrzeug.leistung }}kW</q-item-section>
                                                            </q-item>
                                                            <q-item>
                                                                <q-item-section>{{ $t('messages.LabelFirstRegist') }}</q-item-section>
                                                                <q-item-section>{{ lead.fahrzeug.erstzulassung }}</q-item-section>
                                                            </q-item>
                                                            <q-item>
                                                                <q-item-section>{{ $t('messages.ColDesc') }}</q-item-section>
                                                                <q-item-section>{{ replDesc( lead.description ) }}</q-item-section>
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
                    </q-page>
                </q-page-container>
            
            </q-layout>
        </q-dialog>
    </q-page>
</template>

<script lang="ts" setup>
import GlobalView                       from '../common/helpers/GlobalView';
import NavBar                           from '../components/NavBar.vue'; 
import Grid                             from '../common/components/Grid.vue';

import _                                from 'lodash';
import moment                           from 'moment';

import debug                            from 'debug';
const log         = debug('app:contact');

const init        = { 
    collName:       'customer',
    stateName:      'contact'
};
const globalView  = GlobalView( init );
const { 
    store:          contactStore, 
    data:           contact, 
    doSave,
    form 
}  = globalView;

const contactGrid              = ref({});

const 
    tab           = ref( 'general' ),
    leads         = ref([]),
    lead          = ref({
        fahrzeug:     {
            desc:         ''
        }
    }),
    showContact   = ref(false);

// select row
async function afterSelect( selectedRows: any ) {
    const rows        = await axios.post( '/custom/getLeadOfCust', selectedRows );
    
    log( 'selectRow', rows.data );
    
    lead.value       = rows.data[0] || { fahrzeug: { desc: '' } };
    leads.value      = rows.data;
    
    showContact.value   = true;
}

// select lead
function selectLead( item: any ) {
    lead.value       = item;
}

function replDesc( desc: string ) {
    if ( _.isString(desc) )
        return desc.replace( /\+/g, ', ' );
    return '';
}

// hide dialog
function onContactHide() {
    showContact.value   = false;
}

onMounted( async() => {
    contactStore.registerAction( { action: 'afterSelect', target: 'Contact', func: afterSelect } );
});

</script>

<style scoped lang="scss">
@import "../_variables.scss";

.detailWindow {
    width:     calc( 100vw - 130px );
    max-width:     calc( 100vw - 130px ) !important;
    height:    calc( 100vh - 100px );
    background-color: white;
}

.lead-list {
    height:    calc( 100vh - 100px - 50px - 50px - 50px );
}

</style>