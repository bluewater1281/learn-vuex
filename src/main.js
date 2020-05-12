import Vue from 'vue';
//import Vuex from 'vuex';
import App from './App.vue';

import { store } from './store';
console.log('store',store);

/*
export const store1 = new Vuex.Store({
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
        increment(state,payLoad) {
            state.count += payLoad.amount;
            state.num++;
        }
    },
    getters: {
        doneTodos: (state) => {
            return state.todos.filter(todo => todo.done);
        },
        doneTodosCount: (state,getters) => {
            return getters.doneTodos.length;
        },
        getTodoById: (state) => (id) => {
            return state.todos.filter(todo => todo.id = id);
        }
    }
})


store.commit('increment',{
    amount: 10
});
store.commit({
    type: 'increment',
    amount: 10
})
 */

Vue.config.productionTip = false
//store.commit('SOME_MUTATION',10);

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
