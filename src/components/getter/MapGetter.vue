<!--MapGetter-->
<template>
    <div>
        <h1>MapGetter组件</h1>
        <div>长度为：{{ doneTodosCount }}</div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'MapGetter',
        computed: {
            ...mapGetters([
                'doneTodosCount',
                'anotherGetter',
            ])
        }
    }
</script>