<!--StateCount-->
<template>
    <div>
        StateExa组件中的count：{{ count }}
    </div>
</template>

<script>
    import { store } from './../../main';
    export default {
        name: 'StateExa',
        computed: {
            count() {
                return store.state.count;
            }
        }
    }
</script>

<style>

</style>