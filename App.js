import { NativeRouter } from 'react-router-native'
import { StatusBar } from 'expo-status-bar'
import { ApolloProvider } from '@apollo/client'
import { Provider as PaperProvider } from 'react-native-paper'
import { useState } from 'react'

import Main from './src/components/Main'
import createApolloClient from './src/utils/apolloClient'
import AuthStorage from './src/utils/authStorage'
import AuthStorageContext from './src/hooks/useAuthStorage'
import RepositoriesContext from './src/hooks/useRepositoriesContext'

const authStorage = new AuthStorage()
const client = createApolloClient(authStorage)

const App = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT')
  const [orderDirection, setOrderDirection] = useState('DESC')
  const [keyword, setKeyword] = useState('')

  return (
    <>
      <NativeRouter>
        <ApolloProvider client={client}>
          <AuthStorageContext.Provider value={authStorage}>
            <RepositoriesContext.Provider value={{orderBy, setOrderBy, orderDirection, setOrderDirection, keyword, setKeyword }}>
            <PaperProvider>
              <Main />
            </PaperProvider>
            </RepositoriesContext.Provider>
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  )
}

export default App