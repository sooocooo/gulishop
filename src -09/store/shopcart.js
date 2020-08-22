import { reqAddOrUpdateCart, reqShopCartList, reqUpdateIsCheck,reqDeleteCart } from "../api";

const state = {
  shopCartList: [],
};
const mutations = {
  RECEIVESHOPCARTLIST(state, shopCartList) {
    state.shopCartList = shopCartList;
  },
};

const actions = {
  async addoOrUpdateCart({ commit }, { skuId, skuNum }) {
    const result = await reqAddOrUpdateCart(skuId, skuNum);
    if (result.code === 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("failed"));
    }
  },
  async getShopCartList({ commit }) {
    const result = await reqShopCartList();
    if (result.code === 200) {
      commit("RECEIVESHOPCARTLIST", result.data);
    }
  },
  //单个选项
  async updateIsCheck({ commit }, { skuId, isChecked }) {
    const result = await reqUpdateIsCheck(skuId, isChecked);
    if (result.code === 200) {
      return "okkk";
    } else {
      return Promise.reject(new Error("failed"));
    }
  },
  async upteAllIsCheck({ commit, state, dispatch }, isChecked) {
    let promises = [];
    state.shopCartList.forEach((item) => {
      if (item.isChecked === isChecked) return;
      let promise = dispatch("updateIsCheck", { skuId: item.skuId, isChecked });
      promises.push(promise);
    });
    return Promise.all(promises);
  },
  //删除操作数据
  async deleteCart({commit},skuId){
    const result = await reqDeleteCart(skuId)
    if(result.code === 200){
      return 'ok'
    }else{
      return Promise.reject(new Error('failed'))  //返回的是失败的promise 结果就是这个return返回的失败的promise的原因
      // return 'failed'  行 但是async函数将永远返回成功状态的promise
    }
  },
  //删除选中
  async deleteAllCheckCart({commit,state,dispatch}){
    let promises = []
    state.shopCartList.forEach(item => {
      if(item.isChecked === 0) return
      let promise = dispatch('deleteCart',item.skuId)
      promises.push(promise)
    })

    return Promise.all(promises)
  }

};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
