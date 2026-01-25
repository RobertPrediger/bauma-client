<template>
    <q-toolbar class="bg-blue-8 text-white shadow gutter-sm" :class="navclass" :inset="show.inset">

        <q-icon v-if="icon" :name="icon" style="font-size: 1.6em;"></q-icon>

        <q-toolbar-title v-if="title" v-t="title"></q-toolbar-title>

        <div v-if="locButtons">
            <q-btn v-for="item of locButtons" :key="item.link" :label="$t(`messages.${item.label}`)"
                :icon="item.icon || 'apps'" color="white" text-color="black" @click="clickButton(item.link)" dense
                :disabled="!status.save" />
        </div>

        <q-separator v-if="locButtons && locButtons.length > 0" spaced vertical />

        <q-btn-dropdown v-if="func.length > 0" :label="$t('messages.LabelFuncs')" icon="apps" color="white"
            text-color="black" dense>
            <q-list>
                <q-item @click="callFunc(item)" clickable v-close-popup v-for="(item, index) of func" :key="index">
                    <q-item-section side v-if="item.icon">
                        <q-icon :name="item.icon" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>{{ $t(`messages.${item.name}`) }}</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-btn-dropdown>

        <q-separator v-if="func.length > 0" spaced vertical />

        <q-btn-dropdown v-if="print.length > 0" :label="$t('messages.LabelPrint')" icon="print" color="white"
            text-color="black" dense>
            <q-list>
                <q-item clickable v-close-popup @click="callFunc(item)" v-for="(item, index) of print" :key="index">
                    <q-item-section side v-if="item.icon">
                        <q-icon :name="item.icon" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>{{ $t(`messages.${item.name}`) }}</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-btn-dropdown>

        <q-separator spaced vertical v-if="print.length > 0" />

        <q-btn no-caps size="md" color="white" text-color="black" :disabled="!status.add" @click="doAdd()"
            icon="add_box" v-if="show.add && navshow?.add !== false" dense>
            <q-tooltip>{{ $t('messages.ButtonAdd') }}</q-tooltip>
        </q-btn>
        <q-btn no-caps size="md" color="white" text-color="black" :disabled="!status.save" @click="doSave()"
            icon="save_alt" v-if="show.save && navshow?.save !== false" dense>
            <q-tooltip>{{ $t('messages.ButtonSave') }}</q-tooltip>
        </q-btn>
        <q-btn no-caps size="md" color="white" text-color="black" :disabled="!status.remove" @click="doDelete()"
            icon="delete" v-if="show.remove && navshow?.remove !== false" dense>
            <q-tooltip>{{ $t('messages.ButtonDelete') }}</q-tooltip>
        </q-btn>

        <q-separator spaced vertical />

        <q-btn-dropdown v-model="showGridMenu" color="white" text-color="black" :disabled="!status.settings"
            icon="settings" v-if="show.settings" dense>
            <q-list>
                <q-item-label header>{{ $t('messages.GridSetting') }}</q-item-label>

                <q-item dense>
                    <q-item-section side>
                        <div class="text-grey-8 q-gutter-xs">
                            <q-btn clickable @click="saveSett()" icon="save_alt">
                                <q-tooltip>{{ $t('messages.ButtonSave') }}</q-tooltip>
                            </q-btn>
                            <q-btn clickable @click="deleteSett()" icon="delete_forever">
                                <q-tooltip>{{ $t('messages.ButtonReset') }}</q-tooltip>
                            </q-btn>
                        </div>
                    </q-item-section>
                </q-item>

                <q-separator />

                <q-item clickable v-for="sett in status.setting" :key="sett.field" dense>
                    <q-item-section>
                        <q-toggle :label="$t(`messages.${sett.headerName}`)" color="green" v-model="sett.show"
                            @input="toggleField(sett.field, sett.show)" />
                    </q-item-section>
                </q-item>
            </q-list>
        </q-btn-dropdown>

        <q-btn no-caps size="md" color="white" text-color="black" @click="doClose()" icon="close" v-if="show.close"
            dense>
            <q-tooltip>{{ $t('messages.ButtonClose') }}</q-tooltip>
        </q-btn>

    </q-toolbar>
</template>

<script lang="ts" setup>
import qs from 'qs';

import _ from 'lodash';

import { useNavSettingsStore } from '../stores/navSettings.store';

import debug from 'debug';
const log = debug('app:navbar');

export interface Props {
    title: string,
    state: any,
    stateName: string,
    globalView?: any,
    funcs?: any,
    type?: string,
    icon?: string,
    navshow?: any,
    navclass?: any,
    locButtons?: any,
}

const props = withDefaults(defineProps<Props>(), {
    navshow: {
        add: true,
        save: true,
        remove: true
    },
}
);

const emit = defineEmits([
    'close',
    'clickButton',
]);

const navStore = useNavSettingsStore(_.uniqueId(props.stateName));
const { status, setting } = storeToRefs(navStore);

log('start', props.stateName, navStore);

const showGridMenu = ref(false),
    show = reactive({
        add: true,
        save: true,
        remove: true,
        close: false,
        settings: true
    });

if (!props.stateName) {
    show.add = false;
    show.save = false;
    show.remove = false;
} else
    switch (props.type) {

        case 'window':
            navStore.initStatus({
                save: false,
            });
            show.save = false;
            break;

        case 'dialog':
            navStore.initStatus({
                save: true,
                remove: true
            });
            show.add = false;
            show.settings = false;
            show.close = true;
            break;

        default:
            navStore.initStatus();
            break;
    }

// functions for different buttons
const print = _.filter(props.funcs, item => item.group === 'print'),
    func = _.filter(props.funcs, item => item.group === 'functions'),
    buttons = _.filter(props.funcs, item => item.group === 'buttons'),
    close = _.find(props.funcs, item => item.group === 'close');

// remember actState to know what has been the last action
let actState = '';

// call function from buttons
async function callFunc(item: any) {
    log('callFunc', 'callFunc:' + props.stateName, item.link);

    switch (item.group) {
        case 'print':
            log('print', item);

            // let filter      = this[ def.gridName ].api.getFilterModel();
            const filter = {};
            log('filter', filter);

            if (item.click) {
                log('Function emit (print):', item.click);
                emit(item.click);
            }
            else
                window.open(`/print/${item.link}?` + qs.stringify({ filter }), 'blank', 'width=800,height=600,resizable=yes,scrollbars=auto,status=yes');
            break;

        case 'functions':
            log('functions', item);
            if (item.link) {
                log('Function emit (functions):', item.link);
                emit(item.link);
            }
            break;

        default:
            log('No valid function', item);
            break;
    }
}

// add pressed
async function doAdd() {
    log('add', props.stateName);

    navStore.setStatus({ add: false, save: true });
    actState = 'ADD';

    if (props.globalView?.doAdd) {
        await props.globalView.doAdd();
    } else {
        await props.state.dispatchAction({ action: 'add' });
    }
}

// save pressed
async function doSave() {
    log('save', props.stateName);

    navStore.setStatus({ add: true });

    if (props.globalView?.doSave) {
        await props.globalView.doSave();
    } else {
        await props.state.dispatchAction({ action: 'save' });
    }
}

// delete pressed
async function doDelete() {
    log('delete');

    navStore.setStatus({ remove: false });
    actState = 'DELETE';

    if (props.globalView?.doDelete) {
        await props.globalView.doDelete();
    } else {
        await props.state.dispatchAction({ action: 'delete' });
    }
}

// select event from extern -> grid or manual
function doSelect(record: any) {
    log('setButton', props.stateName);

    // if record has _id -> select
    if (record._id) {
        navStore.setStatus({
            add: actState !== 'ADD',
            save: true,
            remove: true
        });
        actState = 'SELECT';

        if (_.isArray(props.locButtons)) {
            for (const item of props.locButtons) {
                if (item.select)
                    item.enabled = true;
            }
        }
        // ... otherwise -> delete
    } else {
        navStore.setStatus({
            add: true,
            save: false,
            remove: false
        });
    }
}

// close
function doClose() {
    emit('close');
}

// settings for grid
function setSetting(setting: any) {

    const columns = _.keyBy(setting.columns, 'colId'),
        colMenu = _.filter(setting.colMenu, (item) => { return !item.hideCol; });

    log('setSetting', columns, colMenu);

    navStore.setSetting(_.map(colMenu, (item) => {
        item.show = columns[item.field] ? !columns[item.field].hide : !item.hide;
        return item;
    }));
}
async function saveSett() {
    log('save settings', props.stateName);

    await props.state.dispatchAction({ action: 'saveSettings' });

    showGridMenu.value = false;
}
async function deleteSett() {
    log('delete settings', props.stateName);

    await props.state.dispatchAction({ action: 'deleteSettings' });

    showGridMenu.value = false;
}

// // toggle field
// function toggleField( colId, show ) {
//     log( 'toggleField', colId, show );
//     EventBus.$emit( 'toggleField:' + dynNav, { colId, show } );
// }

// click function button 
function clickButton(link: string) {
    log('clickButton', link);
    emit('clickButton', link);
}

// get 
// const navBarSubMenu     = computed( async () => {
//     // get user rights
//     const rights          = await axios.get( `/model/rights/${props.stateName}.json` );

//     const navbarSubmenu   = rights.data && rights.data.submenu;

//     return navbarSubmenu;
// });

// mounted
onMounted(() => {
    log('mounted', props.state);

    // add events
    props.state.registerAction({ action: 'setRecord', target: 'NavBar', func: doSelect });
    props.state.registerAction({ action: 'setSetting', target: 'NavBar', func: setSetting });
});

// before unmount
onBeforeUnmount(async () => {
    log('destroy', props.stateName);

    // unregister dynNav
    navStore.$dispose();
});

</script>

<style scoped>
.btn-margin {
    padding-left: 25px;
}

.gutter-sm button {
    margin-left: 8px;
}
</style>