import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        count: 123,
        localCount: 2,
        num: 666,
        todos: [
            {
                id:1,text: 'xiao',done: true,
            },
            {
                id:2,text: 'xiao666',done: false
            }
        ]
    },
    mutations: {
        increment(state) {
            state.count++,
                state.num++
        }
    }
})
const Counter = {
    template: `<div>{{ count }}</div>`,
    computed: {
        count() {
            //return this.$store.state.count;
        }
    }
}

//store.commit('increment');

Vue.config.productionTip = false

new Vue({
    store,
    components: {
        Counter
    },
    template: `<div><counter></counter></div>`,
    render: h => h(App),
}).$mount('#app')
