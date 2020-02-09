<template>
  <div>
    <h2>Todos</h2>
    <ul class="todo-list">
      <li 
        v-for="todo in todos" 
        :key="todo.id" 
        class="todo-item" 
        :class="{finished:todo.finished}"
        >
          <input v-model="todo.finished" type="checkbox" /> {{ todo.text }}
        </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:"ToDoList",
    props: {
      todos: Array
    },
    methods: {
      toggleFinished(todo) {
        console.log(todo);
        todo.finished = !todo.finished
      }
    },
  }
</script>

<style scoped>
  .todo-list {
    list-style: none;
    font-size: x-large;
  }
  .todo-item {
    max-width: 300px;
    display: block;
    margin: auto;
  }
  .finished {
    text-decoration-line: line-through;
  }
</style>