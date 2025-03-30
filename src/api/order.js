import request from '@/utils/request'

// 订单结算确认
// mode=>cart obj=>{ cartIds }购物车结算
// mode=>buyNow obj=>{ goodsId,goodsNum,goodsSkuId }立即购买结算
export const checkOrder = (mode, obj) => {
  return request.get('/checkout/order', {
    params: {
      mode,
      delivery: 10,
      couponId: 0,
      isUsePoints: 0,
      payType: 10,
      remark: 0,
      ...obj // 将传递过来的参数对象  动态展开
    }
  })
}

// 提交订单
// mode=>cart obj=>{ cartIds,remark }购物车结算
// mode=>buyNow obj=>{ goodsId,goodsNum,goodsSkuId,remark }立即购买结算
export const submitOrder = (mode, obj) => {
  return request.post('/checkout/submit', {
    mode,
    delivery: 10,
    couponId: 0,
    isUsePoints: 0,
    payType: 10,
    ...obj
  })
}
// 我的订单
export const getMyOrderList = (dataType, page) => {
  return request.get('/order/list', {
    params: {
      dataType,
      page
    }
  })
}
