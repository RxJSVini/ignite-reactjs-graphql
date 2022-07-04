import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: `${import.meta.env.TOKEN}`,
  headers: {
    'Authorization': `Bearer ${import.meta.env.BASE_URL}`
  },
  cache: new InMemoryCache()
})
