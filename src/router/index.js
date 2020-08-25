import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "@/store";
Vue.use(VueRouter);

const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location, onResolved, onRejected) {
  if (onResolved === undefined && onRejected === undefined) {
    return originPush.call(this, location).catch(() => {});
  } else {
    return originPush.call(this, location, onResolved, onRejected);
  }
};
VueRouter.prototype.replace = function(location, onResolved, onRejected) {
  if (onResolved === undefined && onRejected === undefined) {
    return originReplace.call(this, location).catch(() => {});
  } else {
    return originReplace.call(this, location, onResolved, onRejected);
  }
};
const router = new VueRouter({
  routes,
  //控制跳转过去之后滚动位置在哪里
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});
//全局前置守卫
router.beforeEach((to, from, next) => {
  let targetPath = to.path;
  if (
    targetPath.startsWith("/trade") ||
    targetPath.startsWith("/pay") ||
    targetPath.startsWith("/center")
  ) {
    //代表你要去的地方需要判断用户是否登录
    if (store.state.user.userInfo.name) {
      next();
    } else {
      //没有登录
      next("/login?redirect=" + targetPath);
    }
  } else {
    //代表不需要用户登录的放行
    next();
  }
});
export default router;
