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
    import HelloWorld from './components/HelloWorld.vue'
    import StateExa from './components/StateExa.vue';
    import Counter from './components/Counter.vue';
    import MapState from './components/MapState.vue';
    import MState from './components/MState.vue';
    import MSOperator from './components/MSOperator.vue';

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
