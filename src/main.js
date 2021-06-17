// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
import store from './store';
import VueI18n from 'vue-i18n'

axios.defaults.baseURL = 'http://localhost:8081/api'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(ElementUI);
Vue.use(VueI18n)
Vue.prototype.$qs = qs
/* eslint-disable no-new */

const i18n = new VueI18n({
  locale: 'en',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('./common/lang/zh'),   // 中文语言包
    'en': require('./common/lang/en')    // 英文语言包
  }
})

router.beforeEach((to, from, next) => {
  //路由中是否开启requireAuth
  if (to.meta.requireAuth) {
    //state中是否保存了登录的用户？
    if (store.state.admin.userName) {
      //找到了 放行
      next()
    } else {
      //没找到 跳转至登录页
      next({
        path: 'adminLogin',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    //没开启requireAuth 放行
    next()
  }
})

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
