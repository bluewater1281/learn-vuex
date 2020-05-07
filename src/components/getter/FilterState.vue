<!--FilterState-->
<template>
    <div>
        FilterState组件：{{ doneTodoCount[0].text }}
        <h1>doneTodos:{{ this.$store.getters.doneTodos }}</h1>
        <h1>doneTodosCount: {{ this.$store.getters.doneTodosCount }}</h1>

        <h2>getTodoById: {{ this.$store.getters.getTodoById(2)[0].text }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'FilterState',
        computed: {
            doneTodoCount() {
                return this.$store.state.todos.filter(todo => todo.done);
            }
        }
    }
</script>

<style>

</style>