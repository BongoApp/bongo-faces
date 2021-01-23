import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

console.log(Vue.version)

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')