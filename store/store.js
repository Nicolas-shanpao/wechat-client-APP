import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    user,
  }
})
if (module.hot) {
  module.hot.accept([
    './modules/user',
  ], () => {
    store.hotUpdate({
      modules: {
        user: require('./modules/user').default,
      }
    })
  })
}

export default store
