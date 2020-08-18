import Home from "../pages/Home";
import Longin from "../pages/Longin";
import Register from "../pages/Register";
import Search from "../pages/Search";

export default [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/longin",
    component: Longin,
    meta: {
      isHide: true,
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
    //   return { keyword: route.params.keyword, 
    //     keyword2: route.query.keyword };
    // },
  },
  {
    path: "/",
    redirect: "/home",
  },
];
