import Vue from 'vue'
import App from './App'
import store from './store/store'
Vue.prototype.$store = store


import mainPage from './pages/mainPage/mainPage.vue'
Vue.component('mainPage',mainPage)

import contactsPage from './pages/contactsPage/contactsPage.vue'
Vue.component('contactsPage',contactsPage)

import findPage from './pages/findPage/findPage.vue'
Vue.component('findPage',findPage)

import mePage from './pages/mePage/mePage.vue'
Vue.component('mePage',mePage)

import myCustom from './colorui/components/my-custom.vue'
import cuCustom from './colorui/components/cu-custom.vue'
import mainTitle from './colorui/components/main-title.vue'
Vue.component('my-custom',myCustom)
Vue.component('cu-custom',cuCustom)
Vue.component('main-title',mainTitle)
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
