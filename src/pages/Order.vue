<template>
    <q-page class="q-pa-sm">

        <NavBar title="Aufträge" icon="fas fa-address-card" stateName="orders" xfuncs="navbarSubmenu" :state="orderStore" :locButtons="orderButtons" v-on:clickButton="clickButton" type="window" />

        <q-card>
            <q-card-section>
                <Grid gridName="orderGrid" :gridOptions="orderGrid" stateName="orders" :state="orderStore" @subGridReady="subGridReady" v-if="showGrid" type="server" orientation="portrait" />
            </q-card-section>

            <q-separator />
        </q-card>

        <q-dialog v-model="showForm" @hide="onFormHide" no-backdrop-dismiss>
            <q-layout container view="lHh lpR lff" class="shadow-2 rounded detailWindow">

                <q-header elevated class="bg-primary text-white" height-hint="98">
                    <NavBar title="Aufträge" icon="open_with" stateName="orders" xfuncs="navbarSubmenu" :state="orderStore" :locButtons="dialogButtons" v-on:clickButton="clickButton" type="dialog" @close="onFormHide" />
                </q-header>

                <q-page-container>
                    <q-page class="back-grey">

                        <q-form @submit="doSave">
                            <input type="submit" style="position: absolute; left: -9999px" />

                            <q-card-section>
                                <div class="row q-col-gutter-md">
                                    <div class="col-3">
                                        <div class="row q-col-gutter-sm">
                                            <div class="col-12">
                                                <div class="text-h6">Auftrag</div>

                                                <q-input name="auftragsnummer" v-model.number="form.Auftragsnummer" lazy-rules dense outlined bg-color="white"
                                                    label="Auftragsnummer"
                                                    type="number"
                                                />

                                                <q-input name="ordernumber" v-model="form.orderdata.ordernumber" lazy-rules dense outlined bg-color="white"
                                                    label="Auftrag beim Kunden"
                                                />
                                                <q-input name="kundennr" v-model="form.customer.number" lazy-rules dense outlined bg-color="white"
                                                    label="Kundennummer"
                                                />

                                                <q-input name="auftragsdatum" v-model="form.Auftragsdatum" lazy-rules dense outlined bg-color="white"
                                                    label="Auftragsdatum"
                                                />

                                                <q-input name="status" v-model="form.Status" lazy-rules dense outlined bg-color="white"
                                                    label="Status"
                                                />

                                            </div>
                                        </div>

                                        <q-separator class="q-my-md" />

                                        <div class="row q-col-gutter-sm q-mt-md">
                                            <div class="col-12">
                                                <div class="text-h6">Typ</div>

                                                <q-input name="brutto" v-model.number="form.orderdata.maker" lazy-rules dense outlined bg-color="white"
                                                    label="Hersteller"
                                                />
                                                <q-input name="netto" v-model.number="form.orderdata.type" lazy-rules dense outlined bg-color="white"
                                                    label="Typ"
                                                />
                                                <q-input name="currency" v-model="form.orderdata.size" lazy-rules dense outlined bg-color="white"
                                                    label="Größe"
                                                />
                                            </div>
                                        </div>

                                        <q-separator class="q-my-md" />

                                        <div class="row q-col-gutter-sm q-mt-md">
                                            <div class="col-12">
                                                <div class="text-h6">Preis</div>

                                                <q-input name="brutto" v-model.number="form.orderdata.price.gross" lazy-rules dense outlined bg-color="white"
                                                    label="Brutto"
                                                    type="number"
                                                />
                                                <q-input name="netto" v-model.number="form.orderdata.price.net" lazy-rules dense outlined bg-color="white"
                                                    label="Netto"
                                                    type="number"
                                                />

                                                <q-input name="currency" v-model="form.Currency" lazy-rules dense outlined bg-color="white"
                                                    label="Währung"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-6">
                                        <div class="row q-col-gutter-sm">
                                            <div class="col-12">
                                                <div class="text-h6">Kunde</div>
                                                <div class="row q-col-gutter-sm">
                                                    <div class="col-6">
                                                        <q-input name="customer_salutation" v-model="form.customer.salutation" lazy-rules dense outlined bg-color="white"
                                                            label="Anrede"
                                                        />
                                                        <q-input name="customer_firstname" v-model="form.customer.firstName" lazy-rules dense outlined bg-color="white"
                                                            label="Vorname"
                                                        />

                                                        <q-input name="customer_surname" v-model="form.customer.surname" lazy-rules dense outlined bg-color="white"
                                                            label="Nachname"
                                                        />

                                                        <q-input name="customer_firm" v-model="form.customer.firm" lazy-rules dense outlined bg-color="white"
                                                            label="Firma"
                                                        />

                                                        <q-input name="customer_mail" v-model="form.customer.mail" lazy-rules dense outlined bg-color="white"
                                                            label="E-Mail"
                                                        />
                                                        <q-input name="customer_vatidbuyer" v-model="form.customer.vatidbuyer" lazy-rules dense outlined bg-color="white"
                                                            label="USt-IdNr."
                                                        />
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="row q-col-gutter-xs">
                                                            <div class="col-8">
                                                                <q-input name="customer_street" v-model="form.customer.street" lazy-rules dense outlined bg-color="white"
                                                                    label="Straße"
                                                                />
                                                            </div>
                                                            <div class="col-4">
                                                                <q-input name="customer_streetnumber" v-model="form.customer.streetNumber" lazy-rules dense outlined bg-color="white"
                                                                    label="Nr."
                                                                />
                                                            </div>
                                                        </div>

                                                        <q-input name="customer_postcode" v-model="form.customer.postcode" lazy-rules dense outlined bg-color="white"
                                                            label="PLZ"
                                                        />

                                                        <q-input name="customer_city" v-model="form.customer.city" lazy-rules dense outlined bg-color="white"
                                                            label="Ort"
                                                        />

                                                        <q-input name="customer_country" v-model="form.customer.country" lazy-rules dense outlined bg-color="white"
                                                            label="Land"
                                                        />

                                                        <q-input name="customer_tel" v-model="form.customer.tel" lazy-rules dense outlined bg-color="white"
                                                            label="Telefon"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <q-separator class="q-my-md" />

                                        <div class="row q-col-gutter-sm q-mt-md">
                                            <div class="col-12">
                                                <div class="text-h6">Adresse</div>
                                                <div class="row q-col-gutter-sm">

                                                    <div class="col-6">
                                                        <q-input name="deliver_salutation" v-model="form.customer.deliver.salutation" lazy-rules dense outlined bg-color="white"
                                                            label="Anrede"
                                                        />

                                                        <q-input name="deliver_firstname" v-model="form.customer.deliver.firstName" lazy-rules dense outlined bg-color="white"
                                                            label="Vorname"
                                                        />

                                                        <q-input name="deliver_surname" v-model="form.customer.deliver.surname" lazy-rules dense outlined bg-color="white"
                                                            label="Nachname"
                                                        />

                                                        <q-input name="deliver_firm" v-model="form.customer.deliver.firm" lazy-rules dense outlined bg-color="white"
                                                            label="Firma"
                                                        />
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="row q-col-gutter-xs">
                                                            <div class="col-8">
                                                                <q-input name="deliver_street" v-model="form.customer.deliver.street" lazy-rules dense outlined bg-color="white"
                                                                    label="Straße"
                                                                />
                                                            </div>
                                                            <div class="col-4">
                                                                <q-input name="deliver_streetnumber" v-model="form.customer.deliver.streetNumber" lazy-rules dense outlined bg-color="white"
                                                                    label="Nr."
                                                                />
                                                            </div>
                                                        </div>

                                                        <q-input name="deliver_postcode" v-model="form.customer.deliver.postcode" lazy-rules dense outlined bg-color="white"
                                                            label="PLZ"
                                                        />

                                                        <q-input name="deliver_city" v-model="form.customer.deliver.city" lazy-rules dense outlined bg-color="white"
                                                            label="Ort"
                                                        />

                                                        <q-input name="deliver_country" v-model="form.customer.deliver.country" lazy-rules dense outlined bg-color="white"
                                                            label="Land"
                                                        />

                                                        <q-input name="deliver_tel" v-model="form.customer.deliver.tel" lazy-rules dense outlined bg-color="white"
                                                            label="Telefon"
                                                        />

                                                        <q-input name="payment_method" v-model="form.orderpayment.method" lazy-rules dense outlined bg-color="white"
                                                            label="Zahlungsart"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-3">
                                        <div class="row q-col-gutter-sm">
                                            <div class="col-12">
                                                <div class="text-h6">Track</div>
                                                <q-input name="track_amount" v-model="form.orderpos.track.amount" lazy-rules dense outlined bg-color="white"
                                                    label="Anzahl"
                                                />
                                                <q-input name="track_gross" v-model="form.orderpos.track.price.gross" lazy-rules dense outlined bg-color="white"
                                                    label="Brutto"
                                                />
                                                <q-input name="track_net" v-model="form.orderpos.track.price.net" lazy-rules dense outlined bg-color="white"
                                                    label="Netto"
                                                />
                                            </div>
                                        </div>

                                        <q-separator class="q-my-md" />

                                        <div class="row q-col-gutter-sm q-mt-md">
                                            <div class="col-12">
                                                <div class="text-h6">Turas</div>
                                                <q-input name="turas_amount" v-model="form.orderpos.turas.amount" lazy-rules dense outlined bg-color="white"
                                                    label="Anzahl"
                                                />
                                                <q-input name="turas_gross" v-model="form.orderpos.turas.pricegross" lazy-rules dense outlined bg-color="white"
                                                    label="Brutto"
                                                />
                                                <q-input name="turas_net" v-model="form.orderpos.turas.pricenet" lazy-rules dense outlined bg-color="white"
                                                    label="Netto"
                                                />
                                            </div>
                                        </div>

                                        <q-separator class="q-my-md" />

                                        <div class="row q-col-gutter-sm q-mt-md">
                                            <div class="col-12">
                                                <div class="text-h6">Gewährleistung</div>
                                                <q-input name="warranty_amount" v-model="form.orderpos.warranty.amount" lazy-rules dense outlined bg-color="white"
                                                    label="Anzahl"
                                                />
                                                <q-input name="warranty_gross" v-model="form.orderpos.warranty.price.gross" lazy-rules dense outlined bg-color="white"
                                                    label="Brutto"
                                                />
                                                <q-input name="warranty_net" v-model="form.orderpos.warranty.price.net" lazy-rules dense outlined bg-color="white"
                                                    label="Netto"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </q-card-section>
                        </q-form>
                    </q-page>
                </q-page-container>

            </q-layout>
        </q-dialog>

        <!-- <q-dialog v-model="showLink">
            <q-card class="detail">
                <q-toolbar class="bg-blue-8 text-white shadow">
                    <q-toolbar-title v-t="'messages.LabelLink'"></q-toolbar-title>

                    <q-separator spaced vertical />

                    <q-btn clickable @click="saveLink" no-caps size="md" color="white" text-color="black" icon="save_alt" v-close-popup>
                        <q-tooltip>{{ $t('messages.ButtonSave') }}</q-tooltip>
                    </q-btn>
                    <q-separator spaced vertical />
                    <q-btn icon="close" color="white" text-color="black" v-close-popup >
                        <q-tooltip>{{ $t('messages.ButtonClose') }}</q-tooltip>
                    </q-btn>
                </q-toolbar>

                <q-card-section>
                    <ag-grid-vue class="links ag-theme-balham" :gridOptions="linkGrid" :rowData="links" :frameworkComponents="frameworkComponents"></ag-grid-vue>
                </q-card-section>
            </q-card>
        </q-dialog>

        <q-dialog v-model="showImage">
            <q-card class="detail">
                <q-card-section>
                    <q-img :src="image.src" />
                </q-card-section>
            </q-card>
        </q-dialog> -->
    </q-page>
</template>

<script lang="ts" setup>
import dayjs                            from 'dayjs';
import _                                from 'lodash';

import GlobalView                       from '../common/helpers/GlobalView';
import Status                           from '../common/helpers/status';
import Send                             from '../common/helpers/send';
import NavBar                           from '../components/NavBar.vue';
import Grid                             from '../common/components/Grid.vue';
import GridLinkbox                      from '../components/GridLinkbox';

import { useAccountStore }              from 'src/stores/account.store';
import { useDataStore }                 from 'src/stores/data.store';

import debug                            from 'debug';
const log         = debug('app:order');

const init        = {
    collName:       'order',
    stateName:      'order',
    defaultForm:    {
        Auftragsnummer:             0,
        Auftragsdatum:              '',
        Status:                     '',
        Auftragsart:                '0',
        Bearbeiter:                 '0',
        FirmaNr:                    '',
        Brutto:                     0,
        Currency:                   'EUR',
        Liefertermin:               '',
        Versandart:                 '0',
        Versandkosten:              0,
        Kunde:                      {
            Titel:                  '',
            Abteilung:              '',
            Telefax:                '',
            Telefon2:               '',
            UStIdNr:                '',
            Privatperson:           '0',
            KeineMailings:          '0'
        },
        LieferAdr:                  {
            Titel:                  '',
            Abteilung:              '',
            Telefon:                '',
            Telefon2:               '',
            Telefax:                ''
        },
        customer:                   {
            number:                 '',
            firm:                   '',
            salutation:            '',
            firstName:              '',
            surname:                '',
            street:                 '',
            streetNumber:           '',
            postcode:               '',
            city:                   '',
            country:                '',
            tel:                    '',
            mail:                   '',
            vatidbuyer:             '',
            deliver:                {
                salutation:         '',
                surname:            '',
                firstName:          '',
                firm:               '',
                street:             '',
                streetNumber:       '',
                postcode:           '',
                city:               '',
                country:            '',
                tel:                ''
            }
        },
        orderpayment:               {
            REQUESTTOKEN:           '',
            method:                 '',
            returnPaypal:           '',
        },
        orderdata:                  {
            ordernumber:            '',
            maker:                  '',
            size:                   '',
            type:                   '',
            price: {
                gross:              0,
                net:                0
            }
        },
        orderinfo:                    {
            caller:                 '',
            deliver:                {
                billing:                   '',
            },
            delivery:               {
                days:                      '',
            },
            gad:                    '',
            gclid:                  '',
            marker:                 {
                bestPriceWeCan:         '',
                hasUserPhotos:          '',
                isMarketBestPrice:      '',
            },
            utm:                    {
                source:                 '',
                medium:                 '',
                campaign:               '',
                term:                   '',
            },
        },
        orderpos:                   {
            track: {
                amount:                 0,
                price:                  {
                    gross:              0,
                    net:                0,
                },
            },
            turas:             {
                amount:                 0,
                description:            '',
                pricegross:             0,
                pricenet:               0,
            },
            warranty:          {
                amount:                 0,
                select:                 '',
                price:                  {
                    gross:                  0,
                    net:                    0,
                },
            },
        },
        InternesMemo:               '',
        Schlusstext:                '',
        BestText:                   ''
    }
};

const globalView  = GlobalView( init );
const {
    store:          orderStore,
    data:           order,
    doSave,
    form
}  = globalView;

const accountStore          = useAccountStore();
const userStore             = useDataStore( 'user', 'user' );
// const categoryStore         = useDataStore( 'categories', 'categories' );
// const companyStore          = useDataStore( 'companies', 'companies' );

const { user }                  = storeToRefs( accountStore );
const { data: users }           = storeToRefs( userStore );
// const { data: categories }      = storeToRefs( categoryStore );
// const { data: companies }       = storeToRefs( companyStore );

const   frameworkComponents    = {
            checkboxRenderer:       GridLinkbox
        },
        orderGrid  = ref({
            componentParent:    parent,
            columnTypes:    {
                stateColumn:     {
                    valueGetter( params ) {
                        const state     = _.get( params, 'data.state' );
                        return _.get( params, `context.stateList.${state}.label`, state );
                    }
                },
                salesColumn:     {
                    valueGetter( params ) {
                        return ( (params.data && params.data.sales && params.data.sales.surName && `${params.data.sales.firstName} ${params.data.sales.surName}`) || '' );
                    }
                },
                categoryColumn:     {
                    valueGetter( params ) {
                        const category        = _.get( params, 'data.category', '0' );
                        return _.get( params, `context.categories.${category}.desc`, category );
                    }
                }
            },
            sort: {
               Auftragsnummer:    1
            },
        }),
        stateList     = Status(),
        send          = Send();

const   uploader      = ref( null ),
        links         = ref([]),
        showLink      = ref(false),
        orderButtons   = ref([
            {
                label:      'LabelLink',
                link:       'linkOrder',
                icon:       'fas fa-link'
            }
        ]),
        dialogButtons   = ref([
            {
                label:      'Senden',
                link:       'sendOrder',
                icon:       'fas fa-paper-plane'
            },
            {
                label:      'Abrufen',
                link:       'getOrder',
                icon:       'fas fa-download'
            }
        ]),
        showGrid      = ref(false),
        showForm      = ref(false);

function setValue( name: string, value: string, data: any ) {
    log( 'setValue', name, value, data );
}

// after select hook
async function afterSelect( record: any ) {
    log( 'hook afterSelect', record );

    uploader.value?.reset();

    showForm.value   = true;

    return record;
}

// hide dialog
function onFormHide() {
    showForm.value   = false;
}

// grid -> ready
function subGridReady( { gridOpt }: { gridOpt: any } ) {
    // User value because of vue ref
    gridOpt.context    = {
        stateList:              _.keyBy( stateList, 'value' ),
    };
}

function clickButton( link: string ) {
    log( 'clickButton', link );
    switch(link) {
        case 'linkOrder':
            if (!form.value._id) {
                Notify.create({
                    message:        t('messages.TextNoRecord'),
                    color:          'negative',
                    icon:           'report_problem',
                    position:       'top-right',
                    timeout:        3000
                });
                return;
            }

            linkOrder( form.value );
            break;

        case 'sendOrder':
            if (!form.value._id) {
                Notify.create({
                    message:        t('messages.TextNoRecord'),
                    color:          'negative',
                    icon:           'report_problem',
                    position:       'top-right',
                    timeout:        3000
                });
                return;
            }

            sendOrder( form.value );
            break;

        case 'getOrder':
            if (!form.value._id) {
                Notify.create({
                    message:        t('messages.TextNoRecord'),
                    color:          'negative',
                    icon:           'report_problem',
                    position:       'top-right',
                    timeout:        3000
                });
                return;
            }

            getOrder( form.value );
            break;
    }
}

async function sendOrder( data: any ) {
    log( 'sendOrder', data._id );

    try {
        const resp = await axios.post( '/custom/sendOrder/sendorder.json', { _id: data._id } );
        log( 'sendOrder response', resp.data );

        Notify.create({
            message:        'Auftrag wurde gesendet',
            color:          'green-9',
            icon:           'done',
            position:       'top-right',
            timeout:        2000
        });
    }
    catch( err: any ) {
        log( 'sendOrder error', err );

        const errorMsg = err.response?.data?.message
            || err.response?.data?.error
            || (typeof err.response?.data === 'string' ? err.response.data : null)
            || err.message
            || 'Fehler beim Senden';

        Notify.create({
            message:        errorMsg,
            color:          'negative',
            icon:           'report_problem',
            position:       'top-right',
            timeout:        5000
        });
    }
}

async function getOrder( data: any ) {
    log( 'getOrder', data._id );

    try {
        const resp = await axios.post( '/custom/getOrder/getorder.json', { _id: data._id } );
        log( 'getOrder response', resp.data );

        Notify.create({
            message:        'Auftrag wurde abgerufen',
            color:          'green-9',
            icon:           'done',
            position:       'top-right',
            timeout:        2000
        });
    }
    catch( err: any ) {
        log( 'getOrder error', err );

        const errorMsg = err.response?.data?.message
            || err.response?.data?.error
            || (typeof err.response?.data === 'string' ? err.response.data : null)
            || err.message
            || 'Fehler beim Abrufen';

        Notify.create({
            message:        errorMsg,
            color:          'negative',
            icon:           'report_problem',
            position:       'top-right',
            timeout:        5000
        });
    }
}

async function linkOrder( data: any ) {
    // get nav
    const resp            = await axios.post( '/data/order', { filter: { gfz: data.gfz } } );
    links.value         = resp.data.data;

    for( const item of links.value ) {
        item.link       = (item._id === form.value._id);
    }

    showLink.value      = true;
}

async function saveLink() {
    log( 'save link', links.value );

    // filter all orders which should be linked
    links.value      = _.filter( links.value, (item) => item.link );

    // save linked orders
    try {
        await axios.post( '/custom/linkOrder', { links: links.value, main: form.value._id } );

        Notify.create({
            message:        parent.$t('messages.TextLinkSaved'),
            color:          'green-9',
            icon:           'done',
            position:       'top-right',
            timeout:        1000
        });
    }
    catch( err ) {
        Notify.create({
            message:        err,
            color:          'negative',
            icon:           'report_problem',
            position:       'top-right',
            timeout:        5000
        });
    }
}

function filterAbort() {
    log( 'ABORT' );
}

onMounted( async () => {
    await userStore.getStore();
    // await categoryStore.getStore();
    // await companyStore.getStore();

    // await actions.registerAction( { action: 'beforeSelect', target: 'Order', func: beforeSelect } );
    await orderStore.registerAction( { action: 'afterSelect', target: 'Order', func: afterSelect } );

    showGrid.value       = true;
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

.detail {
    width:         calc( 100vw - 300px );
    max-width:     1920px;
}

.image-area {
    overflow:       scroll;

}

.back-grey {
    background-color: #EEEEEE;
}

.links {
    height:        calc( 100vh - #{$header_height} - 500px );
    min-height:    300px;
    width:         100%;
}

.list {
    height: calc( 100vh - #{$header_height} - 210px );
}

.type-boolean {
    text-align: left;
}
.type-number {
    text-align: left;
}
.type-decimal {
    text-align: left;
}
</style>
