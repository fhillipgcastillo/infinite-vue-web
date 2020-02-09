<template>
  <div>
    <div class="todo-input-container">
      <TodoForm :todoValue="currentTodoValue" @todoSave="saveCurrenttodo" />
      <TodoList :todos="todos" />
    </div>
  </div>
</template>

<script>
  import TodoForm from './Todo/TodoForm.vue';
  import TodoList from './Todo/TodoList.vue';

  export default {
    name:"ToDo",
    // props: {},
    data() {
      return {
        currentTodoValue: "",
        todos: [{
          text: "todo 1",
          id: 1,
          finished: false
        }]
      }
    },
    methods: {
      saveCurrenttodo(value) {
        this.todos.push(value ? {text:value, id: this.todos.length +1, finished: false}  : this.currentTodoValue);
      }
    },
    components: {
      TodoForm,
      TodoList
    },
  }
</script>

<style lang="scss" scoped>

</style>
