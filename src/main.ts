import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'leaflet/dist/leaflet.css'
import 'leaflet-sidebar-v2/css/leaflet-sidebar.css'
import 'leaflet-sidebar-v2/js/leaflet-sidebar.js'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
