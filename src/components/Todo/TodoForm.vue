<template>
  <div>
    <h1>Todo imput</h1>
    <input v-model="todoValue" />
    <button @click="todoSave" >Save</button>
  </div>
</template>

<script>
  export default {
    name: "TodoForm",
    props: {
      exitentTodoValue: {
        type: String,
        default: ""
      }
    },
    data: ()=>{
      return {
        todos: [],
        todoValue: ""
      }
    },
    methods: {
      todoSave() {
        this.$emit("todoSave", this.todoValue);
        this.todoValue = ""
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>