import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Nav from './components/Nav.vue'
import Layout from './components/Layout.vue'

Vue.component('Nav',Nav)
Vue.component('Layout',Layout)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
