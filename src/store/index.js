/**
 * Created by Anna on 04.01.2018.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation_types'
import api from './../api/mock'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    list: []
  },
  getters: {
    getMockList: state => state.list,
    getTotal: state => {
      let total = 0;
      state.list.forEach((item, i, arr) => {
        total += Number(item.currency)
      })
      return total
    }
  },
  mutations: {
    [types.SET_FOUND] (state, found) {
      state.list = found
    }
  },
  actions: {
    find ({ commit }, payload) {
      api.getList((found) => commit(types.SET_FOUND, found), payload)
    }
  }
});

export default store