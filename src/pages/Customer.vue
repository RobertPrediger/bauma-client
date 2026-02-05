<template>
    <q-page class="q-pa-sm">

        <NavBar title="Kunden" icon="event_seat" stateName="customerStore" :state="customerStore" />

        <div class="row q-col-gutter-md">
            <div class="col">
                <q-card>
                    <q-card-section>
                        <Grid gridName="customerGrid" :gridOptions="customerGrid" stateName="customers" :state="customerStore" v-if="showGrid" type="server" orientation="portrait" />
                    </q-card-section>

                    <q-separator />
                </q-card>
            </div>
        </div>

        <q-dialog v-model="showForm" @hide="onFormHide" no-backdrop-dismiss>
            <q-layout container view="lHh lpR lff" class="shadow-2 rounded detailWindow">

                <q-header elevated class="bg-primary text-white" height-hint="98">
                    <NavBar title="Kunden" icon="event_seat" stateName="customers" :state="customerStore" type="dialog" @close="onFormHide" />
                </q-header>

                <q-page-container>
                    <q-page class="back-grey">

                        <q-form @submit="doSave">
                            <input type="submit" style="position: absolute; left: -9999px" />

                            <q-card-section>
                                <div class="row q-col-gutter-md">
                                    <div class="col-6">

                                        <q-input name="kundennummer" v-model="form.Kundennummer" lazy-rules dense outlined bg-color="white"
                                            label="Kundennummer"
                                            :rules="[ val => !!val || 'Text is required']"
                                            hint=""
                                            />

                                        <q-select name="anrede" v-model="form.Anrede" lazy-rules dense outlined options-dense bg-color="white"
                                            label="Anrede"
                                            :options="['Herr', 'Frau', 'Divers']"
                                            hint=""
                                            />

                                        <q-input name="titel" v-model="form.Titel" lazy-rules dense outlined bg-color="white"
                                            label="Titel"
                                            hint=""
                                            />

                                        <q-input name="vorname" v-model="form.Vorname" lazy-rules dense outlined bg-color="white"
                                            label="Vorname"
                                            hint=""
                                            />

                                        <q-input name="name" v-model="form.Name" lazy-rules dense outlined bg-color="white"
                                            label="Name"
                                            hint=""
                                            />

                                        <q-input name="firma" v-model="form.Firma" lazy-rules dense outlined bg-color="white"
                                            label="Firma"
                                            hint=""
                                            />

                                        <q-input name="abteilung" v-model="form.Abteilung" lazy-rules dense outlined bg-color="white"
                                            label="Abteilung"
                                            hint=""
                                            />

                                        <q-input name="strasse" v-model="form.Straße" lazy-rules dense outlined bg-color="white"
                                            label="Straße"
                                            hint=""
                                            />

                                    </div>
                                    <div class="col-6">

                                        <q-input name="plz" v-model="form.PLZ" lazy-rules dense outlined bg-color="white"
                                            label="PLZ"
                                            hint=""
                                            />

                                        <q-input name="ort" v-model="form.Ort" lazy-rules dense outlined bg-color="white"
                                            label="Ort"
                                            hint=""
                                            />

                                        <q-input name="land" v-model="form.Land" lazy-rules dense outlined bg-color="white"
                                            label="Land"
                                            hint=""
                                            />

                                        <q-input name="telefon" v-model="form.Telefon" lazy-rules dense outlined bg-color="white"
                                            label="Telefon"
                                            hint=""
                                            />

                                        <q-input name="telefax" v-model="form.Telefax" lazy-rules dense outlined bg-color="white"
                                            label="Telefax"
                                            hint=""
                                            />

                                        <q-input type="email" name="email" v-model="form.EMail" lazy-rules dense outlined bg-color="white"
                                            label="E-Mail"
                                            hint=""
                                            />

                                        <q-input name="bemerkung" v-model="form.Bemerkung" lazy-rules dense outlined type="textarea" bg-color="white"
                                            label="Bemerkung"
                                            hint=""
                                            rows="3"
                                            />

                                        <q-checkbox name="inaktiv" v-model="form.Inaktiv" dense
                                            label="Inaktiv"
                                            />

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

import {}                                from 'lodash';

import debug                            from 'debug';
const log         = debug('app:customers');

const init        = {
    collName:       'customers',
    stateName:      'customers',
    defaultForm:    {
        Anrede:         '',
        Titel:          '',
        Vorname:        '',
        Name:           '',
        Firma:          '',
        Abteilung:      '',
        Straße:         '',
        PLZ:            '',
        Ort:            '',
        Bemerkung:      '',
        Inaktiv:        false,
        Land:           '',
        Telefon:        '',
        Telefax:        '',
        EMail:          '',
        Kundennummer:   ''
    }
};
const globalView  = GlobalView( init );
const {
    store:          customerStore,
    data:           customers,
    doSave,
    form
}  = globalView;

const customerGrid     = reactive({
        components:     {
            activeColumn:   function( params ) {
                return params.value ? '<i class="fas fa-check-square" />' : '';
            }
        }
    });

const showGrid = ref(false);
const showForm = ref(false);

// after select hook
async function afterSelect( record: any ) {
    log( 'hook afterSelect', record );
    showForm.value = true;
    return record;
}

// hide dialog
function onFormHide() {
    showForm.value = false;
}

onMounted( async () => {
    await customerStore.registerAction( { action: 'afterSelect', target: 'Customer', func: afterSelect } );

    showGrid.value = true;
});

</script>

<style scoped lang="scss">

.detailWindow {
    width:     calc( 100vw - 130px );
    max-width:     calc( 100vw - 130px ) !important;
    height:    calc( 100vh - 100px );
    background-color: white;
}

.back-grey {
    background-color: #EEEEEE;
}

.scroll {
    height:    calc( 100vh - 400px - 100px - 95px - 70px );
}

</style>
