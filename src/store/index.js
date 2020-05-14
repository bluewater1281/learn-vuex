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
        dispatchMutation(state,value) {
            state.count += value.amount;
        },
        dispatchObjMutation(state,value) {
            state.count += value.amount;
        },
        distributeActionMutation(state,value) {
            state.count += value.amount;
        },
        distributeObjMutation(state,value) {
            state.count += value.amount;
        },
        incrementMutation(state) {
            state.count += 1;
        },
        anyMutation(state) {
            state.count += 1;
        },
        someOtherMutation(state) {
            state.count += 6;
        }
    },
    actions: {
        dispatchAction(context,value) {
            setTimeout(()=>{
                //console.log('context',context);
                context.commit('dispatchMutation',value);
            },1000)
        },
        dispatchActionObj({ commit },value) {
            commit('dispatchObjMutation',value);
        },
        distributeAction({ commit },value) {
            commit('distributeActionMutation',value);
        },
        distributeActionObj({ commit },value) {
            commit('distributeObjMutation',value);
        },
        increment({ commit }) {
            commit('incrementMutation')
        },

        actionA(context) {
            console.log('context',context);
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    context.commit('anyMutation');
                    resolve("123");
                },1000);
            });
        },
        actionB({dispatch,commit}) {
            return dispatch('actionA').then((res)=>{
                console.log('actionAres',res);
                commit('someOtherMutation')
            });
        }
    }
})