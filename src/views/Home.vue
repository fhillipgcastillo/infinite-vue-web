<template>
  <div class="movies">
    <img alt="Vue logo" src="../assets/logo.png">
    <Movies />
  </div>
</template>

<script>
// @ is an alias to /src
import Movies from '@/components/Movies/Movies.vue';

export default {
  name: 'Home',
  components: {
    Movies
  }
}
</script>
