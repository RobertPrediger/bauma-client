<template>
    <div class="q-pa-md login items-center">
        <q-card>
            <q-card-section>
                <div class="row">
                    <div class="text-h4 col">leadlive / Login</div>
                    <div class="col text-right">
                        <img alt="web4biz logo" src="~assets/web4biz.png" class="logo" />
                    </div>
                </div>
            </q-card-section>
            
            <q-separator />
            
            <q-card-section>
                <q-form @submit.prevent.stop="doLogin" class="q-gutter-xs">
                    <q-input name="username" v-model="form.username" lazy-rules outlined
                        label="Benutzername"
                        :rules="[ val => !!val || 'Benutzername muss angegeben werden!' ]"
                        />
                    <q-input name="password" v-model="form.password" lazy-rules type="password" outlined
                        label="Passwort"
                        :rules="[ val => !!val || 'Passwort muss angegeben werden!' ]"
                        />
                    <q-btn color="primary" label="Login" type="submit" :disabled="loading" />
                </q-form>
            </q-card-section>
        </q-card>
    </div>
</template>

<script lang="ts" setup>
import { useAccountStore }              from 'src/stores/account.store';

import debug                            from 'debug';
const log         = debug('app:login');

log( 'start' );

const accountStore          = useAccountStore();

const loading           = ref(false),
        form            = reactive({
            username:         '',
            password:         ''
        });
        
async function doLogin( evt ) {
    evt.preventDefault();
    loading.value    = true;
    
    const { username, password }        = form;
    if ( username && password ) {
        try {
            await accountStore.login( { username, password } );
        }
        catch(err) {
            log( 'Login Error', err );
            Notify.create({
                color:      'negative',
                message:    'Login fehlgeschlagen!'
            });
            loading.value    = false;
        }
    }
}
</script>

<style scoped>

.login {
    height: 372px;
    width: 100%;
    max-width: 600px;
    position: relative;
    top: calc( (100vh - 347px) / 2 );
    left: calc( (100vw - 600px) / 2 );
    background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
}

.logo {
    width: 120px;
}

label {
    padding-left: 5px;
}

form {
    padding-top: 40px;
}

.text-danger {
    font-size: 14px;
}
</style>