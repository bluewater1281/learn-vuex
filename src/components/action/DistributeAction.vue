<!--DistributeAction.vue-->
<template>
    <div>
        <h1>
            DistributeAction:
            <button @click="distributeActionEvent">在组件中分发Action-1</button>
            <button @click="distributeActionObjEvent">在组件中分发Action-2</button>

            <button @click="addEvent">+</button>
        </h1>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default{
        name: 'DistributeAction',
        data() {
            return {

            }
        },
        methods: {
            ...mapActions([
                'distributeAction',
                'distributeActionObj'
            ]),
            ...mapActions({
                add: 'increment'
            }),
            distributeActionEvent() {
                this.distributeAction({amount: 1});
            },
            distributeActionObjEvent(){
                this.distributeActionObj({amount: 10});
            },
            addEvent() {
                this.add();
            }
        }
    }
</script>

<style>

</style>