import Vue from "vue";
import Vuex from "vuex";
import logger from "vuex/dist/logger";
import * as types from "./store-types";
import Cookies from "js-cookie";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {},
  state: {
    opened: Cookies.get("sidebarStatus")
      ? !!Cookies.get("sidebarStatus")
      : false,
    isLogin: false,
    power: "",
  },
  mutations: {
    [types.TOGGLE_SIDEBAR]: (state) => {
      state.opened = !state.opened;
      console.log(Cookies.get("sidebarStatus"));
      if (state.opened) {
        Cookies.set("sidebarStatus", 1);
      } else {
        Cookies.set("sidebarStatus", 0);
      }
    },
  },
  actions: {
    [types.TOGGLE_SIDEBAR]({ commit }) {
      commit(types.TOGGLE_SIDEBAR);
    },
  },
  getters: {
    opened: (state) => state.opened,
  },
  plugins: [logger()],
});

export default store;
