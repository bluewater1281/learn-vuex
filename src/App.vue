<template>
    <div id="app">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <StateExa />
        <Counter />
        <MapState />
        <MState />
        <MSOperator />
    </div>
</template>

<script>
    import HelloWorld from './components/state/HelloWorld.vue'
    import StateExa from './components/state/StateExa.vue';
    import Counter from './components/state/Counter.vue';
    import MapState from './components/state/MapState.vue';
    import MState from './components/state/MState.vue';
    import MSOperator from './components/state/MSOperator.vue';

    export default {
        name: 'App',
        components: {
            HelloWorld,
            StateExa,
            Counter,
            MapState,
            MState,
            MSOperator
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
