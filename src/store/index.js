import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [
      {
        id: "5c4742651e03e71956bf1906",
        title: "The Last Man",
        year: 2019,
        released: "1546300800000",
        actors: ["Hayden Christensen, Harvey Keitel, Marco Leonardi"],
        rating: 5.2,
        covertImage:
          "https://m.media-amazon.com/images/M/MV5BYTM2MDAzOWQtY2EyNy00YjFkLWI1NGUtZGRiNzY4MGQxMDE5XkEyXkFqcGdeQXVyNDUyOTk5Njc@._V1_SY999_CR0,0,710,999_AL_.jpg",
        fullImage:
          "https://static.rogerebert.com/uploads/review/primary_image/reviews/the-last-man-2019/hero_last-man-image.jpg",
        synopsis:
          "Kurt, un veterano de combate con trastorno de estrés postraumático y alucinaciones, fortalece su hogar y construye un refugio subterráneo secreto debido a los cambios climáticos del día del juicio final. Obtiene un trabajo de seguridad para pagarlo y la linda hija de su jefe por compañía.",
        mediaContent:
          "https://storage.googleapis.com/bluerey-145701.appspot.com/THEG/M/2019/The.last.man.2019.Dual.mp4",
        trailer: "https://www.youtube.com/watch?v=vkfVqWYZycE"
      }
    ],
    recentlyUpdated: []
  },
  mutations: {
    ["UPDATE_MOVIES"](state, movies){
      state.movies = movies;
    }
  },
  actions: {
    getMovies: ({ commit }) => {
      fetch("http://infinite-api.herokuapp.com/api", {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify({
          operationName: null,
          variables: {},
          query:
            "{\n  allMovies (limit: 10) {\n    id\n    title\n    rating\n    year\n    synopsis\n    covertImage\n  released\n  mediaContent\n trailer\n }\n}\n"
        })
      })
        .then(function(res) {
          return res.json();
        })
        .then(function(res) {
          commit("UPDATE_MOVIES", res.data.allMovies)
        });
    }
  },
  modules: {}
});
