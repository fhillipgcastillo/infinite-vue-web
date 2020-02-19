import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        text: "todo 1",
        id: 1,
        finished: false
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
