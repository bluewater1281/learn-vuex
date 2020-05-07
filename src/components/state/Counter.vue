<!--Counter-->
<template>
    <div>
        Counter组件中的count：{{ count }}
    </div>
</template>

<script>
    export default {
        name: 'Counter',
        computed: {
            count() {
                return this.$store.state.count;
            }
        }
    }
</script>

<style>

</style>