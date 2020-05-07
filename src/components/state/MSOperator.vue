
<template>
    <div>
        MSOperator组件中的count：{{ count }}
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'MSOperator',
        computed: {
            ...mapState({
                count: state => state.count,
            })
        }
    }
</script>

<style>

</style>