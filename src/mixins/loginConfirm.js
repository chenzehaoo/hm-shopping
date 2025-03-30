export default {
  // 此处编写的就是Vue组件实例的配置项，通过一定语法，可以直接混入到组件内部；
  // data，methods，computed，生命周期函数.....
  // 注意：如果此处提供的data或methods和组件内同名，组件内优先级更高
  // 如果这里编写了生命周期函数，则mixins里面的生命周期函数和 页面中的生命周期函数，会用数组管理统一执行
  data () {
    return {
      title: '标题'
    }
  },
  methods: {
    sayHi () {
      console.log('您好')
    },
    // 根据登录状态，判断是否需要显示登陆确认框
    // 未登录，显示确认框，返回true
    // 已登录，返回false
    loginConfirm () {
      // token存在才会继续，不存在跳出弹框
      if (!this.$store.getters.token) {
        this.$dialog.confirm({
          title: '温馨提示',
          message: '此操作需要先进行登录哦',
          confirmButtonText: '去登录',
          cancelButtonText: '再逛逛'
        })
          // console.log('弹框')
          .then(() => {
            // 如果希望，跳转到登录=>登录后能回跳回来，需要在跳转去携带参数（当前的路径地址）
            // this.$route.fullPath（会包含查询参数）
            // this.$router.push('/login')
            this.$router.replace({
              path: '/login',
              query: {
                backUrl: this.$route.fullPath
              }
            })
          })
          .catch(() => {})
        return true// 弹出显示框了
      }
      return false// 没弹出显示框
    }
  }
}
