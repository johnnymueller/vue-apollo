<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <template v-if="$apollo.loading">Loading...</template>
    <h2 v-else>{{ entry }}</h2>
  </div>
</template>

<script>
import GetEntry from "../graphql/GetEntry";
export default {
  name: 'HelloWorld',

  props: {
    msg: String
  },

  data() {
    return {
      // entryId: null,
    }
  },

  apollo: {
    entry: {
      query: GetEntry,
      update: (data) => {
        // console.log('data', data.entry.title);
        return data.entry;
      },
      // variables() {
      //   return {
      //     entryId: this.entryId
      //   }
      // },
      // result(result) {
      //   console.log('result', result);
      // }
    }
  },

}
</script>