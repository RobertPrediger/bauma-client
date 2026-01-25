<template>
    <q-page class="q-pa-sm">
        <div class="row justify-center items-center welcomeContainer">
            <div class="col-6">
                <q-card>
                    <q-card-section class="text-center">
                        <img alt="web4biz logo" src="~assets/web4biz.png">
                    </q-card-section>
                    <q-card-section class="text-center">
                        <h3>LeadLive</h3>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script>
export default {
    name: 'Index'
};
</script>

<style>
.welcomeContainer {
    height: calc( 100vh - 150px );
}
</style>