import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //admin 登录判断
    admin: {
      userName : window.localStorage.getItem('admin' || '[]') == null ? '': JSON.parse(window.localStorage.getItem('admin' || '[]')).userName
    }
  },
  mutations: {
    adminLogin(state, admin) {
      state.admin = admin
      window.localStorage.setItem('admin',JSON.stringify(admin))
    }
  }
})
