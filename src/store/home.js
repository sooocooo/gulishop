import { reqCategoryList, reqBannerList, reqFloorList } from "../api/index";

const state = {
  ctategoryList: [],
  bannerList: [],
  floorList: [],
};
const mutations = {
  RECEIVECATEGORYLIST(state, ctategoryList) {
    state.ctategoryList = ctategoryList;
  },
  RECEIVEBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  RECEIVEFLOORLIST(state, floorList) {
    state.floorList = floorList;  
  },
};
const actions = {
  async getCategoryList({ commit }) {
    // reCategoryList().then((result)=>{
    //     commit("RECEIVECATEGORYLIST",result.data)
    // })
    const result = await reqCategoryList();
    if (result.code === 200) {
      commit("RECEIVECATEGORYLIST", result.data);
    }
  },
  async getBannerList({ commit }) {
    const result = await reqBannerList();
    if (result.code === 200) {
      commit("RECEIVEBANNERLIST", result.data);
    }
  },

  async getFloorList({ commit }) {
    const result = await reqFloorList();
    if (result.code === 200) {
      commit("RECEIVEFLOORLIST", result.data);
    }
  },
};
const getters = {
  //     categoryList1(state){
  //         return state.categoryList
  //     }
};
export default {
  state,
  mutations,
  actions,
  getters,
};
