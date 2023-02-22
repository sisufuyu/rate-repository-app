import { useMutation, useApolloClient } from '@apollo/client'
import { useNavigate } from 'react-router-native'

import { AUTHENTICATE } from '../graphql/mutations'
import { useAuthStorage } from '../hooks/useAuthStorage'

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE)
  const authStorage = useAuthStorage()
  const client = useApolloClient()
  const navigate = useNavigate()

  const signIn = async ({ username, password }) => {
    await mutate({ 
      variables: { username, password },
      onCompleted: async data => {
        const token = data?.authenticate?.accessToken || ''
        await authStorage.setAccessToken(token)
        
        client.resetStore()

        navigate('/')
      },
    })
  }

  return [signIn, result]
}

export default useSignIn