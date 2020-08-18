import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import "../src/mock/mockServer";

import "swiper/css/swiper.min.css";
import  "../src/api"

import SilderLoop from "./components/silderLoop";
import TypeNav from "./components/TypeNav";
import Pagination  from "./components/Pagination"
Vue.component("TypeNav", TypeNav);
Vue.component("SilderLoop", SilderLoop);
Vue.component('Pagination',Pagination)
 
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
