<template>
  <div class="movie-preview-contaiener">
    <img class="img thumbnail" :src="movie.covertImage" />
    <div class="card-body">
      <h5 class="title">{{ movie.title }} {{ movie.year }}</h5>
      <p class="synopsis">{{ movie.synopsis }}</p>
      <p class="rating">{{ movie.rating }}</p>
      <a href="#trailer" class="btn">Trailer</a>
      <a href="#movie" class="btn">Watch it</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoPreview",
  props: {
    movie: { type: Object }
  }
};
</script>

<style scoped>
.btn {
  display: block;
}
.movie-preview-contaiener {
  padding: 10px;
  border-radius: 10px;
  -webkit-box-shadow: #144e8099 0px 1px 7px 0px;
  box-shadow: #144e8099 0px 1px 7px 0px;
  max-width: 300px;
  border: #44abfc 1px;
  background-color: white;
  margin: auto;
  margin-bottom: 15px;
}
.movie-preview-contaiener .thumbnail {
  max-width: 300px;
  max-height: 300px;
}
</style>
