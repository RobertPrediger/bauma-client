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
            { path: 'lead-inbound', name: 'lead-inbound',   component:  () => import('pages/LeadInbound.vue') },
            { path: 'lead',         name: 'lead',           component:  () => import('pages/Lead.vue') },
            { path: 'contract',     name: 'contract',       component:  () => import('pages/Contract.vue') },
            { path: 'campaign',     name: 'campaign',       component:  () => import('pages/Campaign.vue') },
            { path: 'statistics',   name: 'statistics',     component:  () => import('pages/Statistics.vue') },
            {
                path:       'main',
                name:       'main',
                component:  Main,
                children:   [
                    { path: 'autoseller',   name: 'autoseller',     component:  () => import('pages/Autoseller.vue') },
                    { path: 'carinfo',      name: 'carinfo',        component:  () => import('pages/CarInfo.vue') },
                    { path: 'companies',    name: 'companies',      component:  () => import('pages/Companies.vue') },
                    { path: 'contact',      name: 'contact',        component:  () => import('pages/Contact.vue') },
                    { path: 'mailtemplate', name: 'mailtemplate',   component:  () => import('pages/MailTemplate.vue') },
                    { path: 'portal',       name: 'portal',         component:  () => import('pages/Portal.vue') },
                    { path: 'times',        name: 'times',          component:  () => import('pages/Times.vue') },
                ]
            },
            {
                path:       'sett',
                name:       'sett',
                component:  Main,
                children:   [
                    { path: 'branch',       name: 'branch',         component:  () => import('pages/Branch.vue') },
                    { path: 'categories',   name: 'categories',     component:  () => import('pages/Categories.vue') },
                    { path: 'model',        name: 'models',         component:  () => import('pages/Models.vue') },
                    { path: 'process',      name: 'process',        component:  () => import('pages/Processes.vue') },
                    { path: 'settings',     name: 'setting',        component:  () => import('pages/Setting.vue') },
                    { path: 'team',         name: 'teams',          component:  () => import('pages/Teams.vue') },
                    { path: 'types',        name: 'types',          component:  () => import('pages/Types.vue') },
                    { path: 'user',         name: 'user',           component:  () => import('pages/User.vue') },
                    { path: 'userrights',   name: 'userrights',     component:  () => import('pages/UserRights.vue') },
                ]
            },
            {
                path:       'admin',
                name:       'admin',
                component:  Main,
                children:   [
                    { path: 'language',     name: 'language',       component:  () => import('pages/Languages.vue') },
                    { path: 'processsteps', name: 'processsteps',   component:  () => import('pages/ProcessSteps.vue') },
                    { path: 'tags',         name: 'tags',           component:  () => import('pages/Tags.vue') },
                    { path: 'translation',  name: 'translation',    component:  () => import('pages/Translation.vue') },
                ]
            },
            { path: 'red',          name: 'red',            component:  () => import('pages/Red.vue') },
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
