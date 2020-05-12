<template>
    <div class="hello">
        <!--<h1>{{ msg }}</h1>-->
        <!--<h3>count:{{ count }}</h3>-->
        <!--<h3>val:{{ val }}</h3>-->
        <!--<button @click="add">+</button>-->
        <h1>{{ count }}</h1>
        <button @click="addEvent">+</button>
        <button @click="decEvent">-</button>
        <button @click="add">+100</button>
    </div>
</template>

<script>
    //import { mapState } from "vuex";
    import { mapMutations } from "vuex";

    export default {
        name: 'HelloWorld',
        components: {

        },
        props: {
            msg: String
        },
        data() {
            return {}
        },
//    computed: {
//      val() {
//          return stores.state.value;
//      }
//    },

//  computed: {
//    count() {
//      return this.$store.state.num;
//    }
//  },

//  computed: mapState({
//      count: state => state.num,
//      countAlias: 'count',
//  }),

//    computed: {
//        ...mapState({
//            count: state => state.num,
//        })
//    },
        computed: {
            count() {
                return this.$store.state.count;
            }
        },
        methods: {
            ...mapMutations([
                'ADD_MUTATION',
            ]),
            ...mapMutations({
                DEC_MUTATION: 'DEC_MUTATION'
            }),
            addEvent() {
                this.ADD_MUTATION();
                //this.$store.commit('ADD_MUTATION');
            },
            decEvent() {
                //this.$store.commit('DEC_MUTATION');
                this.DEC_MUTATION();
            },
            add() {
                this.$store.commit('someMutation');
            },
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
