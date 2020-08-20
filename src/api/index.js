import Ajax from "../ajax/Ajax";
import mockAjax from "../ajax/mockAjax";

export const reqCategoryList = () => {
  return Ajax({
    url: "product/getBaseCategoryList",
    method: "get",
  });
};
export const reqBannerList = () => {
  return mockAjax({
    url: "/banner",
    method: "get",
  });
};
export const reqFloorList = () => {
  return mockAjax({
    url: "/floor",
    method: "get",
  });
};
export const reqGoodsListInfo = (searchParams) => {
  return Ajax({
    url: "/list",
    method: "post",
    data: searchParams,
  });
};
export const reqGoodsDetailInfo = (skuId) => {
  return Ajax({
    url: `/item/${skuId}`,
    method: "get",
  });
};
export const reqAddOrUpdateCart =(skuId,skuNum)=>{  //传递的是商品名字和id
  return Ajax({
    url:`/cart/addToCart/${ skuId }/${ skuNum }`,
    method:'post'
  })
} 
export const reqShopCartList =() =>Ajax.get('/cart/cartList')
// reqGoodsDetailInfo(112);
// reqGoodsListInfo({});

// reqCategoryList()
