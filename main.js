import Vue from 'vue'
import App from './App'
import store from './store/store'
Vue.prototype.$store = store
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
// 全局注册筛选器
import * as filters from "./filters/filter"; // global filters
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App,
})
app.$mount()
