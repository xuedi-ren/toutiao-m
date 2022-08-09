import Vue from 'vue'
import Vuex from 'vuex'
import Store from '@/utils/storeage'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // TOKEN: JSON.parse(localStorage.getItem('token'))
    TOKEN: Store.get('token') || {},
    COMMUNITY: Store.get('community') || ''
  },
  mutations: {
    HAOKE_TOKEN(state, payload) {
      state.TOKEN = payload
      // localStorage.setItem('token', JSON.stringify(payload))
      Store.set('token', payload)
    },
    COMMUNITY_NAME(state, payload) {
      state.COMMUNITY = payload
      Store.set('community', payload)
    }
  }
})
