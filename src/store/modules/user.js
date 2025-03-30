import { getInfo, setInfo } from '@/utils/storage'

export default {
  namespaced: true,
  state () {
    return {
      // 个人信息权证
      userInfo: getInfo()
    }
  },
  mutations: {
    setUserInfo (state, obj) {
      state.userInfo = obj
      setInfo(obj)
    }
  },
  actions: {
    logout (context) {
      // 重置个人信息
      context.commit('setUserInfo', {})
      // 重置购物车信息,这里调用另一个模块的方法，写法要改，参照vuex里module跨模块写法
      context.commit('cart/setCartList', {}, { root: true })
    }
  },
  getters: {

  }
}
