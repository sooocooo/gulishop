import { getUserTempId } from "../utils/userabout";
import { reqRegister, reqLogin ,reqLogout} from "../api";
const state = {
  userTempId: getUserTempId(),
  // userInfo:{}
  userInfo: JSON.parse(localStorage.getItem("USERINFO_KEY")) || {},
};
const mutations = {
  //登录
  RECEIVEUSERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  RESETUSERINFO(state){
    state.userInfo = {}
  }
};
const actions = {
  //注册
  async register({ commit }, userInfo) {
    const result = await reqRegister(userInfo);
    if (result.code === 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("failed"));
    }
  },
  //登录
  async login({ commit }, userInfo) {
    const result = await reqLogin(userInfo);
    if (result.code === 200) {
      commit("RECEIVEUSERINFO", result.data);
      //我们要想自动登录，必须把登录后的信息存储起来，这样的话刷新页面vuex当中存储的数据就不见了
      //但是我们不用再去登录给vuex存数据，而是让vuex从存储的地方去拿
      localStorage.setItem("USERINFO_KEY", JSON.stringify(result.data));
      return "ok";
    } else {
      return Promise.reject(new Error("failed"));
    }
  },
  //退出登录
  async logout ({commit}){
    const result = await reqLogout()
    if(result.code ===200){
      localStorage.removeItem('USERINFO_KEY')
      commit('RESETUSERINFO')
      return 'ok'
    }else{
      return Promise.reject(new Error('failed'))
    }
  }
};

const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
