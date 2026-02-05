<template>
    <q-page class="q-pa-sm">

        <NavBar title="Zahlungsbedingungen" icon="fas fa-credit-card" stateName="paymentTerms" :state="paymentTermsStore" />

        <div class="row q-col-gutter-md">
            <div class="col">
                <q-card>
                    <q-card-section>
                        <Grid gridName="paymentTermsGrid" :gridOptions="paymentTermsGrid" stateName="paymentTerms" :state="paymentTermsStore" v-if="showGrid" type="server" />
                    </q-card-section>

                    <q-separator />
                </q-card>
            </div>
        </div>

        <div class="row q-col-gutter-md q-mt-md">
            <div class="col">
                <q-card class="form">

                    <q-card-section>
                        <div class="text-h6">Details</div>
                    </q-card-section>

                    <q-separator />

                    <q-form @submit.prevent.stop="doSave" class="q-gutter-xs">
                        <input type="submit" style="position: absolute; left: -9999px"/>

                        <q-card-section>
                            <div class="row q-col-gutter-md">
                                <div class="col-6">

                                    <q-input name="nummer" v-model="form.Nummer" lazy-rules dense outlined
                                        label="Nummer"
                                        hint=""
                                        />

                                    <q-input name="bezeichnung" v-model="form.Bezeichnung" lazy-rules dense outlined
                                        label="Bezeichnung"
                                        :rules="[ val => !!val || 'Bezeichnung ist erforderlich']"
                                        hint=""
                                        />

                                    <q-input name="zahlart" v-model="form.Zahlart" lazy-rules dense outlined
                                        label="Zahlart"
                                        hint=""
                                        />

                                    <q-input name="nettotage" v-model.number="form.Nettotage" lazy-rules dense outlined type="number"
                                        label="Nettotage"
                                        hint=""
                                        />

                                </div>
                                <div class="col-6">

                                    <q-input name="skontoprozent" v-model="form.Skontoprozent" lazy-rules dense outlined
                                        label="Skonto (%)"
                                        hint=""
                                        />

                                    <q-input name="skontotage" v-model.number="form.Skontotage" lazy-rules dense outlined type="number"
                                        label="Skontotage"
                                        hint=""
                                        />

                                    <q-checkbox name="inaktiv" v-model="form.Inaktiv" dense
                                        label="Inaktiv"
                                        true-value="1"
                                        false-value="0"
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

import debug                            from 'debug';
const log         = debug('app:paymentTerms');

const init        = {
    collName:       'payments',
    stateName:      'paymentTerms',
    defaultForm:    {
        Nummer:         '',
        Bezeichnung:    '',
        Nettotage:      0,
        Skontoprozent:  '',
        Skontotage:     0,
        Zahlart:        '',
        Inaktiv:        '0'
    }
};
const globalView  = GlobalView( init );
const {
    store:          paymentTermsStore,
    data:           paymentTerms,
    doSave,
    form
}  = globalView;

const paymentTermsGrid = reactive({
        components:     {}
    });

const showGrid = ref(false);

// after select hook - fill form with selected data
async function afterSelect( selectedRows: any[] ) {
    log( 'hook afterSelect', selectedRows );

    // Form direkt mit den Daten aus dem Grid füllen
    if (selectedRows && selectedRows.length > 0) {
        const record = selectedRows[0];
        log( 'setting form to:', record );

        // Explizit jedes Feld setzen, um Reaktivität sicherzustellen
        form.value = {
            ...form.value,
            ...record
        };

        log( 'form after setting:', form.value );
    }

    return selectedRows;
}

onMounted( async () => {
    // Override the default setRecord behavior to prevent API call
    await paymentTermsStore.registerAction( {
        action: 'setRecord',
        target: 'PaymentTermsOverride',
        func: async (record: any) => {
            log( 'setRecord override', record );
            // Do nothing - we handle it in afterSelect
            return record;
        }
    });

    await paymentTermsStore.registerAction( { action: 'afterSelect', target: 'PaymentTerms', func: afterSelect } );

    showGrid.value = true;
});

</script>

<style scoped lang="scss">

.form {
    min-height: 300px;
}

</style>
