/**
 * Created by mapbar_front on 2020/5/10.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import { ADD_MUTATION,DEC_MUTATION } from './mutation-types';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 1,
    },
    mutations: {
        [ADD_MUTATION](state) {
            console.log('ADD_MUTATION',state);
            state.count += 1;
        },
        [DEC_MUTATION](state) {
            state.count -= 1;
        },
        someMutation(state) {
            setTimeout(()=>{
                state.count +=100;
            },1000)
        },
        dispatchAction(state) {
            state.count +=100;
        }
    },
    actions: {
        dispatchAction(context) {
            context.commit('dispatchAction');
        }
    }
})