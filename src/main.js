import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import routes from './config/routes'
import Vuex from 'vuex'
import store from './store/'
import App from './App'
import VueResource from 'vue-resource'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueResource)

Vue.http.options.emulateHTTP = true
Vue.http.options.emulateJSON = true


const router = new VueRouter({
  routes
})

router.beforeEach(({ meta, path }, from, next) => {
  // var { auth = true } = meta
  // var isLogin = Boolean(store.state.user.id) //true用户已登录， false用户未登录
  
  // if (auth && !isLogin && path !== '/login') {
  //   return next({ path: '/login' })
  // }
  next()
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')