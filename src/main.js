import Vue from "vue";
import App from "./App.vue";
import "./main.css";
import router from "./router";
import { sync } from "vuex-router-sync";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import store from "./store/store";

Vue.use(Antd);
Vue.config.productionTip = false;

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
