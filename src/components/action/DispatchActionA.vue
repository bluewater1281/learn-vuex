<!--dispatchActionA-->
<template>
    <div>
        dispatchActionA:
        <button @click="dispatchActionAEvent">ActionA</button>
        <button @click="dispatchActionBEvent">ActionB</button>
    </div>
</template>
<script>
    export default {
        name: 'DispatchActionA',
        methods: {
            dispatchActionAEvent() {
                this.$store.dispatch('actionA').then(res=>{
                    console.log('actionA-res',res);
                });
            },
            dispatchActionBEvent() {
                this.$store.dispatch('actionB');
            }
        }
    }
</script>
<style>

</style>