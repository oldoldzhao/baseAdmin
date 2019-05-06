import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'container',
            component: () => import('./components/container.vue'),
            redirect: '/index',
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: () => import('./views/index.vue')
                },
                {
                    path: '/organization',
                    name: 'organization',
                    component: () => import('./views/organization.vue')
                }
            ]
        }
    ]
})