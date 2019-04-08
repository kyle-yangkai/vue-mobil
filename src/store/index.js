import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  isLogin: false,// 判断是否已登录，默认为未登录
  userInfo: {// 保存用户信息
    nick: null,
    ulevel: null,
    uid: null,
    portrait: null
  }
}
const mutations = {
  // 更新用户信息
  updateUserInfo (state, newUserInfo) {
    state.userInfo = newUserInfo
  },
  Login (state) {
    state.isLogin = true
  },
  Logout (state) {
    state.isLogin = false
  }
}
export default new Vuex.Store({
  state,
  mutations
})
