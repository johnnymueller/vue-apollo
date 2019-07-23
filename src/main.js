import Vue from 'vue'
import App from './App.vue'

import ApolloClient from 'apollo-boost'
const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  // uri: 'https://api.graphcms.com/simple/v1/awesomeTalksClone'
  uri: 'https://ngpoc.frb.io/api',
  // uri: 'http://ngpoc.test/api',
  request: async operation => {
    operation.setContext({
      headers: {
        authorization: "Bearer rFPsa_97qD8goSf4A3YA7yEZoJUf2-2nx-SwSR0jOYp24a5rdmHQjQvPpWhS1lgE"
      }
    });
  },
})

// import { ApolloClient } from 'apollo-client'
// import { createHttpLink } from 'apollo-link-http'
// import { InMemoryCache } from 'apollo-cache-inmemory'

// // HTTP connection to the API
// const httpLink = createHttpLink({
//   // You should use an absolute URL here
//   uri: 'https://ngpoc.frb.io/api',
// })

// // Cache implementation
// const cache = new InMemoryCache()

// // Create the apollo client
// const apolloClient = new ApolloClient({
//   link: httpLink,
//   cache,
// })

import VueApollo from 'vue-apollo'
Vue.use(VueApollo)
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.config.productionTip = false

new Vue({
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
