<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ToDo />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ToDo from '@/components/ToDo.vue';

export default {
  name: 'Home',
  components: {
    ToDo
  }
}
</script>
