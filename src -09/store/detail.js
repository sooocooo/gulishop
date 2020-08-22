import {reqGoodsDetailInfo}  from "../api"
const state = {
    goodsDetailInfo:{}
};
const mutations = {
    REVICEGOODSDETAILINFO(state,goodsDetailInfo){
        state.goodsDetailInfo =goodsDetailInfo
    }
};
const actions = {
    async getGoodsDetailInfo({commit},skuId){
        const result =await reqGoodsDetailInfo(skuId);
        if(result.code === 200){
            commit('REVICEGOODSDETAILINFO',result.data)
        }
    }
   
};
const getters = {
    categoryView(state){
        return state.goodsDetailInfo.categoryView || {}

    },
    skuInfo(state){
        return state.goodsDetailInfo.skuInfo || {}
    },
    spuSaleAttrList(state){
        return state.goodsDetailInfo.spuSaleAttrList || []
    }
};
export default {
  state,
  mutations,
  actions,
  getters,
};
