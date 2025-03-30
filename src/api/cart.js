import request from '@/utils/request'

// 加入购物车
// goodsId=>商品idiphone8
// goodsSkuId=>商品规格id红色的iphone8粉色的iphone8
export const addCCart = (goodsId, goodsNum, goodsSkuId) => {
  return request.get('/cart/add', {
    params: {
      goodsId,
      goodsNum,
      goodsSkuId
    }
  })
}
// 获取购物车列表
export const getCartList = () => {
  return request.get('/cart/list')
}
// 更新购物车商品数量
export const changeCount = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/update', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}
// 删除选中商品
export const delSelect = (cartIds) => {
  return request.post('/cart/clear', {
    cartIds
  })
}
