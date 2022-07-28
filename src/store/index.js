import Vue from "vue";
import Vuex from "vuex";
import {getItem, setItem} from '../utils/storage'
Vue.use(Vuex);
const TOKEN = "TOUTIAO_USER";
export default new Vuex.Store({
  state: {
    // 用户的登录状态信息
    user : getItem(TOKEN),
    // user: JSON.parse(window.localStorage.getItem(TOKEN)),
    // user: null
  },
  mutations: {
    setUser(state, data) {
      state.user = data;
      setItem(TOKEN, state.user);
      // window.localStorage.setItem(TOKEN, JSON.stringify(state.user));
    },
  },
  actions: {},
  modules: {},
});
