<!--MState-->
<template>
    <div>
        MState组件中的count：{{ count }}
    </div>
</template>

<script>
    import { mapState } from "vuex";

    export default {
        name: 'MState',
        computed: mapState([
            'count'
        ])
    }
</script>

<style>

</style>