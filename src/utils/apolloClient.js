import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

const link = createHttpLink({
  uri: 'http://192.168.0.100:4000/graphql'
})

const createApolloClient = () => {
  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  })
}

export default createApolloClient