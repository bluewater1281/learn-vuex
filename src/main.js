import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      count: 0,
      num: 666,
    },
    mutations: {
      increment(state) {
        state.count++,
        state.num++
      }
    }
})


store.commit('increment');
console.log('store.state.count',store.state.count);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
