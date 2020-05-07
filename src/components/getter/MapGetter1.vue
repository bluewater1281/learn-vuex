<!--MapGetter1-->
<template>
    <div>
        <h1>MapGetter1组件</h1>
        <div>长度为：{{ doneCount }}</div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'MapGetter',
        computed: {
            ...mapGetters({
                doneCount:'doneTodosCount'
            })
        }
    }
</script>