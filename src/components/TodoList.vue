<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id"># {{ todo.text }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:"ToDoList",
    props: {
      todos: Array
    }
  }
</script>

<style lang="scss" scoped>

</style>