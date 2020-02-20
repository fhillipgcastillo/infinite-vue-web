<template>
  <div>
    <div v-if="movies && movies.length && movies.length > 0">
      <div class="movies-list-container">
        <VideoPreview v-for="movie in movies" :key="movie.id" :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import VideoPreview from "./VideoPreview.vue";

export default {
  name: "Movies",
  created() {
    this.getMovies();
  },
  computed: {
    ...mapState(["movies"])
  },
  methods: {
    ...mapActions(["getMovies"])
  },
  components: {
    VideoPreview
  }
};
</script>

<style scoped>
.movies-list-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
