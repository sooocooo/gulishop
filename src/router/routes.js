import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Search from "../pages/Search";
import Detail  from "../pages/Detail"
import AddCartSuccess   from "../pages/AddCartSuccess"
import ShopCart  from "../pages/ShopCart"
export default [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
    meta:{
        isHide:true,
    }
  },
  {
    path: "/register",
    component: Register,
    meta:{
        isHide:true,
    }
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
    path:'/detail/:skuId',
    component:Detail
  },
  {
    path:"/addCartsuccess",
    component:AddCartSuccess
  },
  {
    path:"/shopcart",
    component:ShopCart,
  },
  {
    path: "/",
    redirect: "/home",
  },
];
