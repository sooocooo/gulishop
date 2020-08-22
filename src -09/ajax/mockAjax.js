import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
const instance = axios.create({
  baseURL: "/mock",
  timeout: 20000,
});
instance.interceptors.request.use((config) => {
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