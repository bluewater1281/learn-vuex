<!--mapState-->
<template>
    <div>
        mapState组件中的count: {{ count }}
        <h1>{{ countPlusLocalState }}</h1>
        <h1>{{ countAlias }}</h1>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: 'MapState',
        computed: mapState({
            count: state => state.count,
            //传字符串参数 'count' 等同于`state => state.count`
            countAlias: 'count',
            //为了能够使用`this`获取局部状态，必须使用常规函数
            countPlusLocalState (state) {
                return state.count + this.localCount;
            }
        }),
        data() {
            return {
                localCount: 666,
            }
        }
    }
</script>

<style>

</style>