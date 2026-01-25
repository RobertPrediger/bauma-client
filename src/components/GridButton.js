import Vue          from 'vue';

// import debug                            from 'debug';
// const log         = debug('app:gridcheckbox');

export default Vue.extend({
    name:       'GridButton',
    template:   `
        <q-btn icon="arrow_downward" v-model="value" size="xs" v-if="!hide" @click="open()" />
    `,
    data: function () {
        return {
            value:      null
        };
    },
    computed:       {
        hide() {
            return this.params.data.collapsed && this.params.data.collapsed.length;
        }
    },
    methods:        {
        open() {
            this.value      = !this.value;
            this.params.context.componentParent.showEdit( this.params.data );
        }
    }
});
