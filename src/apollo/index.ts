import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const serverUrl = 'http://localhost:9000/graphql';

const client = new ApolloClient({
  link: new HttpLink({ uri: serverUrl }),
  cache: new InMemoryCache()
});

export default client;