import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./mock/mockServer";
import "swiper/css/swiper.css";

// import { reqCategoryList } from "@/api";
// reqCategoryList();

import TypeNav from "./components/TypeNav";
Vue.component("TypeNav", TypeNav);

Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
