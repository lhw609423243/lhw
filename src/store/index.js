import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters.js'

Vue.use(Vuex)

/** 状态定义 */

const store = new Vuex.Store({
  state: {
    srfname: '',
    image_height: []
  },
  mutations: {
    increment: (state,height) => {
      // console.log(state,height);
      const obj = state
      obj.srfname = height
    },
    decrement: (state,height) => {
      const obj = state
      obj.image_height = height
    }
  }
})

export default store
