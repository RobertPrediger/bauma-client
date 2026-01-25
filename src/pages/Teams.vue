<template>
    <q-page class="q-pa-sm">

        <NavBar :title="$t('messages.LabelTeams')" icon="fas fa-users" stateName="teams" :state="teamStore" />
        
        <div class="row q-col-gutter-md">
            <div class="col-6">
                <q-card>
                    <q-card-section>
                        <Grid gridName="teamGrid" :gridOptions="teamGrid" stateName="teams" :state="teamStore" @subGridReady="subGridReady" v-if="showGrid" />
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-6">
                <q-card>
        
                    <q-card-section>
                        <div class="text-h6" v-t="'messages.LabelTeam'"></div>
                    </q-card-section>
                    
                    <q-separator />
        
                    <q-form @submit="doSave" ref="teamForm">
                        <input type="submit" style="position: absolute; left: -9999px"/>
        
                        <q-card-section>
                            <div class="row q-col-gutter-md">
                                <div class="col">
        
                                    <q-select name="branch" v-model="form.branch" lazy-rules dense options-dense :rules="[val => !!val || 'Field is required']" outlined
                                        :label="$t('messages.LabelBranch')"
                                        :options="branchList"
                                        option-value="branch"
                                        option-label="desc"
                                        emit-value
                                        map-options
                                        hint=""
                                        >
                                    </q-select>
        
                                    <q-select name="company" v-model="form.company" lazy-rules dense options-dense :rules="[val => !!val || 'Field is required']" outlined
                                        :label="$t('messages.LabelCompany')"
                                        :options="companyList"
                                        option-value="_id"
                                        option-label="name"
                                        emit-value
                                        map-options
                                        hint=""
                                        >
                                    </q-select>
        
                                    <q-select name="category" v-model="form.category" lazy-rules dense options-dense outlined
                                        :label="$t('messages.ColCategory')"
                                        :options="categories"
                                        option-value="name"
                                        option-label="desc"
                                        emit-value
                                        map-options
                                        hint=""
                                        >
                                    </q-select>
        
                                    <q-select name="user" v-model="form.contact" lazy-rules dense options-dense :rules="[val => !!val || 'Field is required']" outlined
                                        :label="$t('messages.LabelContact')"
                                        :options="userList"
                                        emit-value
                                        map-options
                                        hint=""
                                        >
                                    </q-select>
        
                                    <q-select name="user" v-model="form.users" lazy-rules dense options-dense outlined
                                        :label="$t('messages.LabelUser')"
                                        :options="userList"
                                        emit-value
                                        map-options
                                        use-chips
                                        multiple
                                        hint=""
                                        >
                                    </q-select>

                                    <q-input name="phone" v-model="form.phone" type="phone" lazy-rules dense outlined
                                        :label="$t('messages.ColPhone')"
                                        hint=""
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

import { useDataStore }                 from 'src/stores/data.store';

import _                                from 'lodash';
import debug                            from 'debug';
const log         = debug('app:teams');

log( 'start' );

const init        = { 
    collName:       'teams', 
    stateName:      'teams'
};
const globalView  = GlobalView( init );
const { 
    store:          teamStore, 
    data:           teams, 
    doSave,
    form 
}  = globalView;

const companiesStore                    = useDataStore( 'companies', 'companies' );
const branchStore                       = useDataStore( 'branch', 'branch' );
const categoriesStore                   = useDataStore( 'categories', 'categories' );
const userStore                         = useDataStore( 'user', 'user' );

const { data: branchList }              = storeToRefs( branchStore );
const { data: companyList }             = storeToRefs( companiesStore );
const { data: categories }              = storeToRefs( categoriesStore );
const { data: users }                   = storeToRefs( userStore );

const teamGrid      = reactive({
        columnTypes:    {
            userColumn:     {
                valueGetter( params ) {
                    const users       = _.map( params.data.users, (elm) => {
                            return ( params.context.users[ elm ] && params.context.users[ elm ].label ) || params.data.users;
                        });
                    return users;
                }
            },
            contactColumn:  {
                valueGetter( params ) {
                    const contact     = (params.data && params.data.contact) || '';
                    return ( contact && params.context.users[ contact ] && params.context.users[ contact ].label ) || contact;
                }
            },
            categoryColumn:     {
                valueGetter( params ) {
                    const category        = ( params.data && params.data.category ) || '0';
                    return ( (params.context.categories[ category ] && params.context.categories[ category ].desc ) );
                }
            },
            companyColumn:  {
                valueGetter( params ) {
                    const company     = ( params.data && params.data.company ) || '';
                    return ( (params.context.companies && params.context.companies[ company ] && params.context.companies[ company ].name ) || company );
                }
            }
        },
        context:        {
            users:          {}
        }
    }),
    showGrid        = ref(false),
    userList        = ref([]);

function subGridReady( { gridOpt } ) {

    // User value because of vue ref
    gridOpt.context    = {
        users:              _.keyBy( userList.value, 'value' ),
        companies:          _.keyBy( companyList.value, '_id' ),
        categories:         _.keyBy( categories.value, 'name' ),
        branch:             _.keyBy( branchList.value, 'branch' )
    };
}
        
Promise
    .all([
        companiesStore.getStore(),
        userStore.getStore(),
        categoriesStore.getStore(),
        branchStore.getStore(),
    ])
    .then( () => {
        userList.value       = _.map( users.value, (item) => {
            return {
                value:      item._id,
                label:      `${item.firstName} ${item.surName}`
            };
        });

        showGrid.value       = true;
    });

</script>
