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
export const reqAddOrUpdateCart = (skuId, skuNum) => {
  //传递的是商品名字和id
  return Ajax({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: "post",
  });
};
//请求购物车列表数据
// /api/cart/checkCart/{skuID}/{isChecked}  请求选中状态  get
export const reqShopCartList = () => Ajax.get("/cart/cartList");

export const reqUpdateIsCheck = (skuId, isChecked) => {
  return Ajax({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: "get",
  });
};

//删除购物车的数据   /api/cart/deleteCart/{skuId}  delete
export const reqDeleteCart = (skuId) => {
  return Ajax({
    url: `/cart/deleteCart/${skuId}`,
    method: "delete",
  });
};

//请求注册 /api/user/passport/register   post    {mobile,password,code}

export const reqRegister = (userInfo) => {
  return Ajax({
    url: `/user/passport/register`,
    method: "post",
    data: userInfo,
  });
};
//请求登录   reqLogin  post   '/user/passport/login'

export const reqLogin = (userInfo) => {
  return Ajax({
    url: "/user/passport/login",
    method: "post",
    data: userInfo,
  });
};
//退出登录  /api/user/passport/logout

export const reqLogout = () => {
  return Ajax({
    url: "/user/passport/logout",
    method: "get",
  });
};

//请求创建订单交易的数据  /api/order/auth/trade  get
export const reqTradeInfo = () => {
  return Ajax({
    url: `/order/auth/trade`,
    method: "get",
  });
};

//请求 创建提交订单
export const reqSubmitOrder = (tradeNo,tradeInfo) => {
  return Ajax({
    url:`order/auth/submitOrder?tradeNo={tradeNo}`,
    method:'post',
    data:tradeInfo
  })
}
  

// reqGoodsDetailInfo(112);
// reqGoodsListInfo({});

// reqCategoryList()
