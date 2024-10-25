//import Vue from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import HomeComponent from './components/Home/HomeComponent.vue'
//import Store from './store/store';

const router = new createRouter({
    history: createWebHistory(),
    routes: [
    {
        path: '/',
        name: 'home',
        component: HomeComponent
    },
    {
        path: '/Products',
        name: 'ProductsComponent',
        component: () => import('./components/Products/ProductsComponent.vue')
    },
    {
        path: '/CorporateGifting',
        name: 'CorporateGifting',
        component: () => import('./components/CorporateGifting/CorporateGifting.vue')
    },
    {
        path: '/ContactUs',
        name: 'ContactUs',
        component: () => import('./components/ContactUs/ContactUs.vue')
    },
        {
            path: '/AboutUs',
            name: 'AboutUs',
            component: () => import('./components/AboutUs/AboutUs.vue')
        },
        {
            path: '/Login',
            name: 'Login',
            component: () => import('./components/Login/LoginComponent.vue')
        }

]

})
export default router;