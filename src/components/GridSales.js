import Vue          from 'vue';

import debug                            from 'debug';
const log         = debug('app:gridcheckbox');

export default Vue.extend({
    name:       'GridSales',
    template:   `<q-btn icon="assignment_ind" v-model="value" size="xs" @click="takeLead" />`,
    data: function () {
        return {
            value:      null
        };
    },
    methods:        {
        takeLead( event ) {
            log( 'take', event );
            
            // stop propagation of event to select it in grid
            event.preventDefault();
            event.stopPropagation();
            
            // call the function in source
            this.params.context.componentParent.takeLead( this.params.data );
        }
    }
});
