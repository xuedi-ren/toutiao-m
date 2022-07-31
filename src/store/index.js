import Vue from 'vue'
import Vuex from 'vuex'
import Store from '@/utils/storeage'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // TOKEN: JSON.parse(localStorage.getItem('token'))
    TOKEN: Store.get('token') || {}
  },
  mutations: {
    HAOKE_TOKEN(state, payload) {
      state.TOKEN = payload
      // localStorage.setItem('token', JSON.stringify(payload))
      Store.set('token', payload)
    }
  }
})
