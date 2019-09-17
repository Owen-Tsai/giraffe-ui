import Vue from 'vue'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import './styles/cui.scss'
import './utilities/clickOutside'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
