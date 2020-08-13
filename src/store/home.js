import { reqCategoryList } from "../api/index";

const state = {
  ctategoryList: [],
};
const mutations = {
  RECEIVECATEGORYLIST(state, ctategoryList) {
    state.ctategoryList = ctategoryList;
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
