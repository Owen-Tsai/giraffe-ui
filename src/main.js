import Vue from 'vue'
import App from './App.vue'
import 'material-design-icons/iconfont/material-icons.css'
import './styles/cui.scss'
import './utilities/clickOutside'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
