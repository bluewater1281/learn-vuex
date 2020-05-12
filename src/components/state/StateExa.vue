<!--StateCount-->
<template>
    <div>
        StateExa组件中的count：{{ count }}
    </div>
</template>

<script>
    import { store1 } from './../../main';
    export default {
        name: 'StateExa',
        computed: {
            count() {
                return store1.state.count;
            }
        }
    }
</script>

<style>

</style>