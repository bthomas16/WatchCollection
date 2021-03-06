import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import MainCSS from './assets/MainCSS.css'
import VueRouter from 'vue-router'
import { routes } from './routes'
import axios from 'axios'
import store from './State/store.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueAnalytics from 'vue-analytics'

const env = process.env.NODE_ENV

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(MainCSS)

axios.defaults.baseURL = process.env.VUE_APP_ROOT_API

const router = new VueRouter({
  mode: 'history',
  baseURL: process.env.BASE_URL, // SET BASE_URL HERE
  routes
})

Vue.use(VueAnalytics, {
  id: 'UA-131185774-1',
  router,
  autoTracking: {
    exception: true
  },
  debug: {
    enabled: env !== 'production',
    sendHitTask: env === 'production'
  }
})

if (('serviceWorker' in navigator) && (process.env.NODE_ENV !== 'development')) {
  navigator.serviceWorker.register('/service-worker.js')
}

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  store,
  render: h => h(App)
})
