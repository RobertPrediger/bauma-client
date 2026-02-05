import { RouteRecordRaw } from 'vue-router'

import Home                 from '../layouts/Home.vue';
import Main                 from '../layouts/Main.vue';
import Index                from '../pages/Index.vue';

const routes: RouteRecordRaw[] = [
    {
        path:           '/',
        component:      Home,
        name:           'root',
        children: [
            { path: '',             name: 'index',          component:  Index },
            { path: 'order',         name: 'order',           component:  () => import('pages/Order.vue') },
            {
                path:       'main',
                name:       'main',
                component:  Main,
                children:   [
                    { path: 'customer',         name: 'customer',           component:  () => import('pages/Customer.vue') },
                    { path: 'paymentTerms',     name: 'paymentTerms',       component:  () => import('pages/PaymentTerms.vue') },
                ]
            },
            {
                path:       'admin',
                name:       'admin',
                component:  Main,
                // children:   [
                //     { path: 'language',     name: 'language',       component:  () => import('pages/Languages.vue') },
                //     { path: 'processsteps', name: 'processsteps',   component:  () => import('pages/ProcessSteps.vue') },
                //     { path: 'tags',         name: 'tags',           component:  () => import('pages/Tags.vue') },
                //     { path: 'translation',  name: 'translation',    component:  () => import('pages/Translation.vue') },
                // ]
            },
        ]
    },
    {
        path:           '/login',
        component:      () => import('pages/Login.vue'),
        name:           'login'
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('pages/ErrorNotFound.vue')
    },
]

export default routes
