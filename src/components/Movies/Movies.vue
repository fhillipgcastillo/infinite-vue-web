<template>
  <div>
    <div v-if="movies && movies.length && movies.length > 0">
      <ul>
        <li v-for="movie in movies" :key="movie._id">
          {{movie.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

  export default {
    name: 'Movies',
    computed: {
      ...mapState(['movies'])
    }
  }
</script>

<style lang="scss" scoped>

</style>