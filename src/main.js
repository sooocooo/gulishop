import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import "../src/mock/mockServer";
import "./validate";

import { MessageBox, Message, Pagination, Button } from "element-ui";
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;

Vue.use(Button);
Vue.use(Pagination);
import "swiper/css/swiper.min.css";
// import  "../src/api"

import SilderLoop from "./components/silderLoop";
import TypeNav from "./components/TypeNav";
//import Pagination from "./components/Pagination";
Vue.component("TypeNav", TypeNav);
Vue.component("SilderLoop", SilderLoop);
Vue.component("Pagination", Pagination);

import * as API from "./api";

//图片懒加载
import VueLazyload from "vue-lazyload";
import loading from "@/assets/images/maoer.gif";
Vue.use(VueLazyload, {
  loading,
});

Vue.config.productionTip = false;
new Vue({
  beforeCreate() {
    //全局事件组件本质就是一个对象 ,满足两个条件
    // 1.所有组件都可以看到的,(决定了这个对象必须是在Vue的原型当中)
    // 2.这个对象能够使用$on和$emit（决定这个对象必须是能够调用到vue原型的$on和$emit）
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  render: (h) => h(App),

  router,
  store,
}).$mount("#app");
