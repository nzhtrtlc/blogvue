import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AdminLogin from '../admin/Login.vue';
import Dashboard from '../admin/Dashboard.vue';
//import get from 'lodash.get';

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: '/admin',
        name: "AdminLogin",
        component: AdminLogin,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/admin/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            requireAuth: true
        }
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
