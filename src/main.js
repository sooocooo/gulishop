import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),//注册组件,使用组件,渲染组件
}).$mount('#app')
