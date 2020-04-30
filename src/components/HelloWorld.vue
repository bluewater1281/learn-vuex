<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{ count }}</h3>
    <button @click="add">+</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {

    }
  },
//  computed: {
//    count() {
//      return this.$store.state.num;
//    }
//  },
  computed: mapState({
      count: state => state.num,
      countAlias: 'count',
  }),
  methods: {
      add() {
          this.$store.commit('increment');
          console.log('this.$store.state',this.$store.state);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
