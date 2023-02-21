import { NativeRouter } from 'react-router-native'
import { StatusBar } from 'expo-status-bar'
import { ApolloProvider } from '@apollo/client'

import Main from './src/components/Main'
import createApolloClient from './src/utils/apolloClient'

const client = createApolloClient()

const App = () => {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={client}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  )
}

export default App