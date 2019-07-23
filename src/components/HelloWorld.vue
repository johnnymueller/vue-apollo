<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <template v-if="$apollo.loading">Loading...</template>
    <h2 v-else>{{ speaker }}</h2>
  </div>
</template>

<script>
import Test from "../graphql/Test";
export default {
  name: 'HelloWorld',

  props: {
    msg: String
  },

  data() {
    return {
      // speaker: null,
    }
  },

  apollo: {
    speaker: {
      query: Test,
      update: (data) => {
        // console.log('data', data.entry.title);
        return data.entry;
      },
      // variables() {
      //   return {
      //     artNumber: this.artNumber
      //   }
      // },
      // result(result) {
      //   console.log('result', result);
      // }
    }
  },

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
