import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import Constants from 'expo-constants'
import { relayStylePagination } from '@apollo/client/utilities'

// console.log(Constants.manifest.extra)

const { apolloUri } = Constants.manifest.extra 

const httpLink = createHttpLink({
  uri: apolloUri || 'http://192.168.0.100:4000/graphql'
})

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        repositories: relayStylePagination(),
      }
    },
    Repository: {
      fields: {
        reviews: relayStylePagination(),
      },
    },
  }
})

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const token = await authStorage.getAccessToken()

      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        }
      }
    } catch (e) {
      console.log(e)
      return { headers }
    }
  })

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
  })
}

export default createApolloClient