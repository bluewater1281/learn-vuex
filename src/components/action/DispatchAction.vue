<!--DispatchAction.vue-->
<template>
    <div>
        <h3>
            DispatchAction:
            <button @click="dispatchActionEvent">dispatchAction</button>
            <button @click="dispatchActionObjEvent">以对象形式分发</button>
        </h3>
    </div>
</template>

<script>
    export default {
        name: 'DispatchAction',
        data() {
            return {

            }
        },
        methods: {
            dispatchActionEvent() {
                this.$store.dispatch('dispatchAction',{
                    amount: 10
                });
            },
            dispatchActionObjEvent() {
                this.$store.dispatch({
                    type: 'dispatchActionObj',
                    amount: 1
                });
            }
        }
    }
</script>
<style>

</style>