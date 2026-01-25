import Vue          from 'vue';

import debug                            from 'debug';
const log         = debug('app:gridcheckbox');

export default Vue.extend({
    name:       'GridCheckbox',
    template:   `
        <q-toggle v-model="value" dense @input="click()" />
    `,
    data: function () {
        return {
            value:      null
        };
    },
    methods:    {
        click() {
            log( 'click', this.params.value, this.params.data, this.params );
            this.params.context.setValue( this.params.context.type, this.params.context.link, this.params.colDef.name, this.params.data.link, this.value );
        }
    },
    beforeMount() {
        this.value      = this.params.value;
    }
});