import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [
      {
        title: "Movie Sample 1",
        _id: 1
      }
    ],
    recentlyUpdated: []
  },
  mutations: {},
  actions: {},
  modules: {}
});
