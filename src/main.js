import Vue from 'vue'
import App from './App.vue'
import './assets/css/golbal.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index'

import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios
import { Message } from 'element-ui'
Vue.prototype.$message = Message

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')