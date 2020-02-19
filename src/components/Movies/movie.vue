<template>
  <div>
    <h1>Movies</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Movie",
  data() {
    return {
      currentTodoValue: ""
    };
  },
  computed: {
    ...mapState(["movies"])
  },
  methods: {
    
  },
  components: {
  }
};
</script>

<style lang="scss" scoped></style>
