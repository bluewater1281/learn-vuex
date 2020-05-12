<template>
    <div id="app">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <!--<StateExa />-->
        <!--<Counter />-->
        <!--<MapState />-->
        <!--<MState />-->
        <!--<MSOperator />-->
        <!--&lt;!&ndash;getter&ndash;&gt;-->
        <!--<FilterState />-->
        <!--<MapGetter/>-->
        <!--<MapGetter1/>-->
    </div>
</template>

<script>
    /*state*/
    import HelloWorld from './components/state/HelloWorld.vue';
//    import StateExa from './components/state/StateExa.vue';
//    import Counter from './components/state/Counter.vue';
//    import MapState from './components/state/MapState.vue';
//    import MState from './components/state/MState.vue';
//    import MSOperator from './components/state/MSOperator.vue';
    /*getter*/
//    import FilterState from './components/getter/FilterState.vue';
//    import MapGetter from './components/getter/MapGetter.vue';
//    import MapGetter1 from './components/getter/MapGetter1.vue';

    export default {
        name: 'App',
        components: {
            HelloWorld,
//            StateExa,
//            Counter,
//            MapState,
//            MState,
//            MSOperator,
            //getter
//            FilterState,
//            MapGetter,
//            MapGetter1,
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
