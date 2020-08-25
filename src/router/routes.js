//路由懒加载
// import Home from "../pages/Home";
const Home = () => import("../pages/Home");
//import Login from "../pages/Login";
const Login = () => import("../pages/Login");
//import Register from "../pages/Register";
const Register = () => import("../pages/Register");
import Search from "../pages/Search";
import Detail from "../pages/Detail";
import AddCartSuccess from "../pages/AddCartSuccess";
import ShopCart from "../pages/ShopCart";
import Trade from "../pages/Trade";
import Pay from "../pages/Pay";
import PaySuccess from "../pages/PaySuccess";
import Center from "../pages/Center";
import GroupOrder from "../pages/Center/GroupOrder";
import MyOrder from "../pages/Center/MyOrder";
import store from "@/store";

export default [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
    meta: {
      isHide: true,
    },
    beforeEnter: (to, from, next) => {
      if (!store.state.user.userInfo.name) {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "/register",
    component: Register,
    meta: {
      isHide: true,
    },
  },
  {
    path: "/search/:keyword?",
    component: Search,
    name: "search",
    // props(route) {
    //   return {
    //     keyword: route.params.keyword,
    //     keyword2: route.query.keyword,
    //   };
    // },
  },
  {
    path: "/detail/:skuId",
    component: Detail,
  },
  {
    path: "/addCartsuccess",
    component: AddCartSuccess,
    //路由独享守卫
    beforeEnter: (to, from, next) => {
      let skuInfo = sessionStorage.getItem("SKUINFO_KEY");
      if (to.query.skuNum && skuInfo) {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "/shopcart",
    component: ShopCart,
  },
  {
    path: "/trade",
    component: Trade,
    beforeEnter: (to, from, next) => {
      if (from.path === "/shopcart") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "/pay",
    component: Pay,
    beforeEnter: (to, from, next) => {
      if (from.path === "/trade") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "/paysuccess",
    component: PaySuccess,
    beforeEnter: (to, from, next) => {
      if (from.path === "/pay") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "/center",
    component: Center,
    children: [
      {
        path: "myorder",
        component: MyOrder,
      },
      {
        path: "grouporder",
        component: GroupOrder,
      },
      {
        path: "",
        redirect: "myorder",
      },
    ],
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/communication",
    component: () => import("@/pages/Communication/Communication"),
    children: [
      {
        path: "event",
        component: () => import("@/pages/Communication/EventTest/EventTest"),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: "model",
        component: () => import("@/pages/Communication/ModelTest/ModelTest"),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: "sync",
        component: () => import("@/pages/Communication/SyncTest/SyncTest"),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: "attrs-listeners",
        component: () =>
          import("@/pages/Communication/AttrsListenersTest/AttrsListenersTest"),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: "children-parent",
        component: () =>
          import("@/pages/Communication/ChildrenParentTest/ChildrenParentTest"),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: "scope-slot",
        component: () =>
          import("@/pages/Communication/ScopeSlotTest/ScopeSlotTest"),
        meta: {
          isHideFooter: true,
        },
      },
    ],
  },
];
