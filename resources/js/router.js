import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter) 

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Request',
            component:() => import('./pages/Request.vue'),
        },

        {
            path: '/Monitoring',
            name: 'Monitoring',
            component:() => import('./pages/Monitoring.vue'),
        },

        {
            path: '/upload',
            name: 'upload',
            component:() => import('./Pages/Uplaod.vue'),
        },
       

      
    ],
});