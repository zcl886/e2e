import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import goods from './components/goods/goods.vue'
import ratings from './components/ratings/ratings.vue'
import seller from './components/seller/seller.vue'
import Vuex from 'vuex'
import VueTap from 'v-tap'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueTap)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  addCartEl: {},
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

const router = new VueRouter({
  routes: [{
    path: '/goods',
    component: goods
  }, {
    path: '/ratings',
    component: ratings
  }, {
    path: '/seller',
    component: seller
  }, {
    path: '/',
    redirect: '/goods'          //  路由重定向
  }],
  linkActiveClass: 'active'     //  高亮显示
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  },
  data: {
    eventHub: new Vue()
  }
})

