import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AdminLogin from '../admin/Login.vue';
import Dashboard from '../admin/Dashboard.vue';
import NewArticle from "../admin/NewArticle";
import NewCategory from "../admin/NewCategory";

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
    component: AdminLogin
  },
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '/newarticle',
        name: 'NewArticle',
        component: NewArticle
      },
      {
        path: '/newcategory',
        name: 'NewCategory',
        component: NewCategory
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
