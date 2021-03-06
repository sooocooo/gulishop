import Vue from "vue"
import VueRouter  from "vue-router"
import routes  from "./routes"
Vue.use(VueRouter)

const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location,onResolved,onRejected){
    if(onResolved === undefined && onRejected ===undefined){
        return originPush.call(this,location).catch(()=>{})
    }else{
        return originPush.call(this,location,onResolved,onRejected)
    }
}
VueRouter.prototype.replace = function (location,onResolved,onRejected){
    if(onResolved === undefined && onRejected ===undefined){
        return originReplace.call(this,location).catch(()=>{})
    }else{
        return originReplace.call(this,location,onResolved,onRejected)
    }
}
const router = new VueRouter({
    routes,
      //控制跳转过去之后滚动位置在哪里
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
export default  router