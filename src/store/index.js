import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters.js'

Vue.use(Vuex)

/** 状态定义 */

const store = new Vuex.Store({
  state: {
    title_img_width: '',
    image_height: []
  },
  mutations: {
    increment: (state,width) => {
      // console.log(state,width);
      const obj = state
      obj.title_img_width = width
    },
    decrement: (state,height) => {
      const obj = state
      obj.image_height = height
    }
  }
})

export default store
