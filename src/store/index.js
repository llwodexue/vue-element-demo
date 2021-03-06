import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger'
import * as types from './store-types'
import Cookies from 'js-cookie'
import variable from '@/styles/variable.less'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {},
  state: {
    opened: Cookies.get('sidebarStatus')
      ? !!Cookies.get('sidebarStatus')
      : false,
    isLogin: false,
    power: '',
  },
  mutations: {
    [types.TOGGLE_SIDEBAR]: (state) => {
      state.opened = !state.opened
      if (state.opened) {
        variable.sideBarWidth = '65px'
        Cookies.set('sidebarStatus', 1)
      } else {
        variable.sideBarWidth = '210px'
        Cookies.set('sidebarStatus', 0)
      }
    },
  },
  actions: {
    [types.TOGGLE_SIDEBAR]({ commit }) {
      commit(types.TOGGLE_SIDEBAR)
    },
  },
  getters: {
    opened: (state) => state.opened,
  },
  plugins: [logger()],
})

export default store
