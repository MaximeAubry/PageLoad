import Vue from 'vue'
import App from './App'
import axios from 'axios'
import { auth } from './auth/authService'

Vue.use(VueOroneMaterial)

axios.interceptors.request.use(function (config) {
  Vue.OroneMaterial.PageloadSwitcher.start()
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  Vue.OroneMaterial.PageloadSwitcher.stop()
  return response
}, function (error) {
  return Promise.reject(error)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  directives: { EsInput, EsInputFile }
})
