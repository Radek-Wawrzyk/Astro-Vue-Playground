import { ApolloClient, HttpLink } from '@apollo/client/core';
import { InMemoryCache } from '@apollo/client/cache';

import * as prismic from '@prismicio/client'

const prismicClient = prismic.createClient(
  prismic.getRepositoryEndpoint('astro-vue-playground')
);

const client = new ApolloClient({
  link: new HttpLink({
    uri: prismic.getGraphQLEndpoint('astro-vue-playground'),
    fetch: prismicClient.graphQLFetch,
    useGETForQueries: true,
  }),
  cache: new InMemoryCache(),
});

export { client };
