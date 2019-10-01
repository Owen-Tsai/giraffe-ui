import Vue from 'vue'
import App from './App.vue'
import 'material-design-icons/iconfont/material-icons.css'
import './styles/cui.scss'
import './utilities/clickOutside'

import GiraffeUI from "./build"

Vue.config.productionTip = false

Vue.use(GiraffeUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
