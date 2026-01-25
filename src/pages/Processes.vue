<template>
    <q-page class="q-pa-sm">
        
        <NavBar :title="$t('messages.ColProcesses')" icon="fas fa-microchip" stateName="process" :state="processStore" :locButtons="processButtons" @clickButton="clickButton" />
        
        <div class="row q-col-gutter-md">
            <div class="col-6">
                <q-card>
                    <q-card-section>
                        <Grid gridName="processGrid" :gridOptions="processGrid" stateName="process" :state="processStore" />
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-6">
                <q-card>
                    <q-card-section>
                        <div class="text-h6" v-t="'messages.LabelProcess'"></div>
                    </q-card-section>
                    
                    <q-separator />
        
                    <q-form @submit="doSave" class="q-gutter-xs" ref="process">
                        <input type="submit" style="position: absolute; left: -9999px"/>
        
                        <q-card-section>
                            <div class="row q-col-gutter-md">
                                <div class="col">
        
                                    <q-input name="name" v-model="form.name" lazy-rules dense outlined
                                        :label="$t('messages.ColName')"
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
        
        <q-dialog v-model="showProcess">
            <q-layout container view="hHh LpR lFf" class="detail process-container bg-white rounded-borders">
                <q-header class="bg-blue-8">
                    <q-toolbar class="text-white shadow">
                        <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" />
                        <q-toolbar-title v-t="'messages.LabelProcess'"></q-toolbar-title>

                        <q-btn clickable @click="saveLink" no-caps size="md" color="white" text-color="black" icon="save_alt" v-close-popup dense>
                            <q-tooltip>{{ $t('messages.ButtonSave') }}</q-tooltip>
                        </q-btn>
                        <q-separator spaced vertical />
                        <q-btn icon="close" color="white" text-color="black" v-close-popup dense>
                            <q-tooltip>{{ $t('messages.ButtonClose') }}</q-tooltip>
                        </q-btn>
                        <q-separator spaced vertical />

                        <q-btn flat @click="drawerRight = !drawerRight" round dense icon="menu" />
                    </q-toolbar>
                    
                </q-header>
                
                <q-page-container>
                    <q-page class="q-pa-md edit-page">
                        <iframe
                            ref="container"
                            src="/red"
                            allow="autoplay *"
                            frame-id="node-red"
                            width="100%"
                            height="100%"
                            @load="onLoad"
                        />
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

import { useI18n }                      from 'vue-i18n';
import _                                from 'lodash';

import { useAccountStore }              from 'src/stores/account.store';
import { useDataStore }                 from 'src/stores/data.store';

import debug                            from 'debug';
const log         = debug('app:process');

const accountStore                      = useAccountStore();
const userStore                         = useDataStore( 'user', 'user' );
const mailtemplatesStore                = useDataStore( 'mailtemplates', 'mailtemplates' );

const { t }                             = useI18n();

const init        = { 
    collName:       'processes', 
    stateName:      'process'
};
const globalView  = GlobalView( init );
const { 
    store:          processStore, 
    data:           processes, 
    doSave,
    form 
}  = globalView;

const processGrid              = ref({});

const showProcess       = ref(false),
        drawerLeft        = ref(true),
        drawerRight       = ref(true),
        processButtons    = [
        {
            label:      'LabelEdit',
            link:       'editProcess',
            icon:       'fas fa-edit'
        }
        ],
        blocks            = ref([]),
        actBlock          = ref(null),
        editBlock         = ref({}),
        scene             = ref({}),
        options           = ref({}),
        container         = ref(null);

const { user }              = storeToRefs( accountStore );
const { data: users }       = storeToRefs( userStore );
const { data: templates }   = storeToRefs( mailtemplatesStore );

// mailtemplates:  state => _.map( state.mailtemplates.data, (item) => {
//     return {
//         value:          item._id,
//         label:          item.desc
//     };
// })

userStore.getStore();
mailtemplatesStore.getStore();

// click in Navbar
async function clickButton( link ) {
    log( 'clickButton', link );
    
    switch(link) {
        case 'editProcess':
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

            // get flows
            const { data }          = await axios.get( '/red/flows' );

            // check for flow with actual name
            const flow              = data.find( (item: any) => item.type === 'tab' && item.label === form.value.name );
            
            // if not found -> create new flow
            if (!flow) {
                const newFlow       = {
                    type:           'flow',
                    label:           form.value.name,
                    nodes:          [],
                    configs:        [],
                };
                const flowId    = await axios.post( '/red/flow', newFlow );
                log( 'new flow', flowId );
            }

            showProcess.value       = true;
            break;
    }
}

// add process block in dialog
function addBlock( name: string ) {
    log( 'addBlock', name );
    
    // get block
    const block: any       = blocks.value.find( (item: any) => item.name === name );
    
    // check for max
    if (block.max) {
        const count       = _.countBy( scene.value.blocks, item => item.name === name );
        if (count.true >= block.max)
            return;
    }
        
    container.value.addNewBlock( name, scene.value.container.centerX / 2, scene.value.container.centerY / 2 );
}

// select block in dialog
function blockSelect( block: any ) {
    log( 'blockSelect', block );

    if (actBlock.value)
        blockDeselect();

    // get fields from original block
    const tile: any        = blocks.value.find( (item: any) => item.name === block.name );

    // set block to actblock
    actBlock.value              = block;
    actBlock.value.orgTitle     = tile.title;
}

// unselect block in dialog
function blockDeselect() {
    if (!actBlock.value)
        return;
        
    actBlock.value.title     = `${actBlock.value.orgTitle} (${(_.has( actBlock.value, 'values.body.name' ) && actBlock.value.values.body.name.value) || ''})`;

    // remve old block and put actblock back in scene
    scene.value.blocks       = [ 
        ..._.filter( scene.value.blocks, item => item.id !== actBlock.value.id ), 
        actBlock.value 
    ];

    log( 'blockDeselect', actBlock.value.title, actBlock.value.values.body );

    actBlock.value       = null;
}

// save dialog
async function saveLink() {
    log( 'saveLink');
    
    if (actBlock.value)
        blockDeselect();
    
    form.value.scene         = scene.value;
    
    try {
        await axios.put( '/data/processes', { 
            query:  { 
                _id:        form.value._id 
            },
            body:   {
                _id:        form.value._id,
                scene:      scene.value
            }
        });

        Notify.create({
            message:        t('messages.TextLinkSaved'),
            color:          'green-9',
            icon:           'done',
            position:       'top-right',
            timeout:        1000
        });
    }
    catch(e: any) {
        Notify.create({
            message:        e,
            color:          'negative',
            icon:           'report_problem',
            position:       'top-right',
            timeout:        5000
        });
    }
}

function onLoad() {
    log( 'onLoad' );
}

</script>

<style scoped lang="scss">
@import "../_variables.scss";

.detail {
    width:         calc( 100vw - 200px );
    max-width:     1920px;
}

.edit-page {
    height:    calc( 100vh - 95px - 70px );
}

.process-container {
    height:         calc( 100vh - 50px );
    width:         100%;
}

.process {
    height:         calc( 100vh - 80px - 50px );
    width:         100%;
    border: 1px solid #E0E0E0;
}
</style>
