import debug                            from 'debug';
const log         = debug('app:gridlinkbox');

export default {
    name:       'GridLinkbox',
    template:   '<q-toggle v-model="val" dense @input="click" />',
    setup( props, params ) {
        const val       = ref();

        function click() {
            log( 'click', this.value, params.colDef.field, params.value, params.data );
            params.data.link       = val.value;
            params.context.setValue( params.colDef.field, val.value, params.data );
        }

        onBeforeMount( () => {
            this.value      = params.value;
        })

        return {
            val,
            click
        };
    }
};