<template>
    <q-page class="q-pa-sm">

        <NavBar :title="$t('messages.LabelUser')" icon="fas fa-user-edit" stateName="user" :state="userStore" />

        <div class="row q-col-gutter-md">
            <div class="col">
                <q-card>
                    <q-card-section>
                        <Grid gridName="userGrid" :gridOptions="userGrid" stateName="user" :state="userStore" @subGridReady="subGridReady" />
                    </q-card-section>
        
                    <q-separator />
                </q-card>
            </div>
        </div>

        <div class="row q-col-gutter-md">
            <div class="col">
                <q-card class="form">
        
                    <q-card-section>
                        <div class="text-h6" v-t="'messages.LabelUser'"></div>
                    </q-card-section>
                    
                    <q-separator />
        
                    <q-scroll-area class="scroll" visible>
        
                        <q-form @submit="doSave" ref="userForm">
                            <input type="submit" style="position: absolute; left: -9999px"/>
            
                            <q-card-section>
                                <div class="row q-col-gutter-md">
                                    <div class="col-4">
            
                                        <q-input name="krz" v-model="form.krz" lazy-rules dense outlined ref="refUser"
                                            :label="$t('messages.ColUsername')"
                                            :rules="[ val => !!val || $t('messages.TextRequired')]"
                                            hint=""
                                            />
                                        <q-input name="firstName" v-model="form.firstName" lazy-rules dense outlined 
                                            :label="$t('messages.ColFirstname')"
                                            hint=""
                                            />
                                        <q-input name="surName" v-model="form.surName" lazy-rules dense outlined
                                            :label="$t('messages.ColSurname')"
                                            hint=""
                                            />
                                        <q-select name="company" v-model="form.company" lazy-rules dense outlined
                                            :label="$t('messages.LabelCompany')"
                                            :options="companies"
                                            option-value="_id"
                                            option-label="name"
                                            emit-value
                                            map-options
                                            hint=""
                                            >
                                        </q-select>
            
                                    </div>
                                    <div class="col-4">
            
                                        <q-input name="email" v-model="form.email" type="email" lazy-rules dense outlined
                                            :label="$t('messages.ColMail')"
                                            :rules="[ val => !!val || $t('messages.TextRequired')]"
                                            hint=""
                                            />
                                        <q-input name="phone" v-model="form.phone" type="phone" lazy-rules dense outlined
                                            :label="$t('messages.ColPhone')"
                                            hint=""
                                            />

                                        <q-select name="lang" v-model="form.lang" lazy-rules dense outlined
                                            :label="$t('messages.ColLanguage')"
                                            :options="languages"
                                            option-value="name"
                                            option-label="desc"
                                            map-options
                                            emit-value
                                            hint=""
                                            >
                                        </q-select>

                                    </div>
                                    <div class="col-4">

                                        <q-select name="rights" v-model="form.rights" lazy-rules dense outlined
                                            :label="$t('messages.ColRoles')"
                                            :options="roles"
                                            emit-value
                                            option-value="right"
                                            option-label="desc"
                                            map-options
                                            multiple
                                            use-chips
                                            hint=""
                                            >
                                        </q-select>
            
                                        <q-select name="chief" v-model="form.chief" lazy-rules dense outlined
                                            :label="$t('messages.LabelChief')"
                                            :options="userList"
                                            emit-value
                                            map-options
                                            hint=""
                                            >
                                        </q-select>
            
                                    </div>
                                </div>
                            </q-card-section>
                        </q-form>
                    </q-scroll-area>
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
const log         = debug('app:user');

log( 'start' );

const init        = { 
    collName:       'user', 
    stateName:      'user'
};
const globalView  = GlobalView( init );
const { 
    store:          userStore, 
    data:           users,
    doSave,
    form 
}  = globalView;

const companiesStore                    = useDataStore( 'companies', 'companies' );
const languagesStore                    = useDataStore( 'languages', 'languages' );
const userrightsStore                   = useDataStore( 'userrights', 'userrights' );

const { data: companies }               = storeToRefs( companiesStore );
const { data: languages }               = storeToRefs( languagesStore );
const { data: roles }                   = storeToRefs( userrightsStore );

const userList                          = ref([]);

const userGrid      = reactive({
        columnTypes:    {
            companyColumn:     {
                valueGetter( params ) {
                    const company     = ( params.context.companies && params.context.companies[ params.data.company ] ) || '';
                    return (company && company.name) || params.data.company;
                }
            },
            langColumn:     {
                valueGetter( params ) {
                    const lang        = ( params.context.languages && params.context.languages[ params.data.lang ] ) || '';
                    return (lang && lang.desc) || params.data.lang;
                }
            },
            roleColumn:     {
                valueGetter( params ) {
                    const roles       = _.map( params.data.rights, (elm) => {
                            return ( params.context.roles[ elm ] && params.context.roles[ elm ].desc ) || '';
                        });
                    return roles;
                }
            }
        }
    });

function subGridReady( { gridOpt } ) {

    const context       = {
            companies:      _.keyBy( companies.value, '_id' ),
            languages:      _.keyBy( languages.value, 'name' ),
            roles:          _.keyBy( roles.value, 'right' )
        };

    // User value because of vue ref
    gridOpt.context      = context;
}

Promise
    .all([
        companiesStore.getStore(),
        languagesStore.getStore(),
        userrightsStore.getStore(),
    ])
    .then( () => {
        userList.value       = _.map( users.value, (item) => {
            return {
                value:      item._id,
                label:      `${item.firstName} ${item.surName}`
            };
        });
    });

</script>

<style scoped>

.form {
    height:    calc( 100vh - 400px - 95px - 70px );
    width:         100%;
}

.scroll {
    height:    calc( 100vh - 400px - 80px - 95px - 70px );
}

</style>
