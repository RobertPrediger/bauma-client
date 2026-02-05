<template>
    <q-page class="q-pa-sm">
        <div class="row">
            <div class="col-6">
                <q-card>
                    <q-card-section>
                        <div class="text-h6">
                            Leads / Woche je Portal
                        </div>
                    </q-card-section>
                    <q-card-section class="echarts">
                        <v-chart :option="leadPortal" />
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-6">
                <q-card>
                    <q-card-section>
                        <div class="text-h6">
                            Leads / Woche je Kategorie
                        </div>
                    </q-card-section>
                    <q-card-section class="echarts">
                        <v-chart :option="leadCategory" />
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script lang="ts" setup>
import NavBar                           from '../components/NavBar.vue'; 

import { useDataStore }                 from 'src/stores/data.store';

import { use }                          from 'echarts/core';
import { CanvasRenderer }               from 'echarts/renderers';
import { PieChart }                     from 'echarts/charts';
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
}                                       from 'echarts/components';
import VChart, { THEME_KEY }            from 'vue-echarts';

import dayjs                            from 'dayjs';
import _                                from 'lodash';

import debug                            from 'debug';
const log         = debug('app:statistics');

log( 'start' );

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

provide(THEME_KEY, 'dark');

const portalStore           = useDataStore( 'portal', 'portal' );
const categoryStore         = useDataStore( 'categories', 'categories' );

const leadPortal         = reactive({
            series:       [],
            grid:         {
                bottom:       '10%',
            },
            legend:       {},
            dataset:      {},
            tooltip:      {},
            xAxis:        { type: 'category' },
            axisLabel:    {},
            yAxis:        {}
        }),
        leadCategory      = reactive({
            series:       [],
            grid:         {
                bottom:       '10%',
            },
            legend:       {
                formatter:    (name: string) => {
                    const cat       = _.find( categories.value, item => item.name === name );
                    return cat ? cat.desc : name;
                }
            },
            dataset:      {},
            tooltip:      {},
            xAxis:        { type: 'category' },
            axisLabel:    {},
            yAxis:        {}
        }),
        firstDay          = dayjs().subtract( 15, 'weeks' );

const { data: portals }     = storeToRefs( portalStore );
const { data: categories }  = storeToRefs( categoryStore );

(async () => {
    Promise.all([
            axios
                .post( '/custom/getView/leadPortal', {
                    filter: {
                        date: { $gte: firstDay.format('YYYY-MM-DD') }
                    }
                }),
            axios
                .post( '/custom/getView/leadCategory', {
                    filter: {
                        date: { $gte: firstDay.format('YYYY-MM-DD') }
                    }
                }),
            portalStore.getStore(),
            categoryStore.getStore()
        ])
        .then( (result) => {
            const dimPortal         = [ 'week', ..._.map( portals.value, item => item.name ) ],
                    dimCat            = [ 'week', ..._.map( categories.value, item => item.name ) ];
            
            leadPortal.series       = _.map( portals.value, (item: any) => ({ type: 'line' }) );
            leadPortal.dataset      = {
                dimensions:     dimPortal,
                source:         _.map( result[0].data, item => {
                    return {
                        week:       item.week,
                        ...item.dim
                    };
                } )
            };

            leadCategory.series       = _.map( categories.value, (item: any) => ({ type: 'line' }) );
            leadCategory.dataset      = {
                dimensions:     dimCat,
                source:         _.map( result[1].data, item => {
                    return {
                        week:       item.week,
                        ...item.dim
                    };
                } )
            };
        });
    
})();

</script>

<style scoped>

.echarts {
    height: 350px;
}
</style>
