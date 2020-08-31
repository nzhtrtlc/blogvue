import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from '../admin/Login.vue';
import Dashboard from '../admin/Dashboard.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: '/admin',
        name: "Admin",
        component: Admin
    },
    {
        path: '/admin/dashboard',
        name: 'Dashboard',
        component: Dashboard
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
