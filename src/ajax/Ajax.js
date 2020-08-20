import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import store  from "../store"

const instance = axios.create({
  baseURL: "/api",
  timeout: 20000,
});
//请求和响应拦截器
//请求拦截器当中添加打开进度条的功能
instance.interceptors.request.use((config) => {
   //处理config (请求报文)
    //把用户的临时身份标识添加到每次请求的请求头当中
    let userTempId = store.state.user.userTempId
    config.headers.userTempId = userTempId
  NProgress.start();
  return config;
});
instance.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response.data;
  },
  (error) => {
    NProgress.done();
    alert("发送请求失败" + error.message || "未知错误");
    return new Promise(() => {});
  }
);

export default instance;
