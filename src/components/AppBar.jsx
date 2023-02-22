import { View, StyleSheet, ScrollView, Pressable } from 'react-native'
import Constants from 'expo-constants'
import { Link } from 'react-router-native'
import { useApolloClient } from '@apollo/client'

import Text from './Text'
import theme from '../theme'
import useMe from '../hooks/useMe'
import { useAuthStorage } from '../hooks/useAuthStorage'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 15,
    paddingLeft: 15,
    backgroundColor: theme.colors.background,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  tab: {
    marginRight: 10,
  },
  text: {
    color: theme.colors.onBackground,
  }
})

const AppBar = () => {
  const { data } = useMe()

  const me = data?.me

  const authStorage = useAuthStorage()
  const client = useApolloClient()

  const signOut = async () => {
    await authStorage.removeAccessToken()
    client.resetStore()
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/" style={styles.tab}>
          <Text fontSize="subheading" fontWeight="bold" style={styles.text}>Repositories</Text>
        </Link>
        {me
          ? <Pressable onPress={signOut}>
              <Text fontSize="subheading" fontWeight="bold" style={styles.text}>Sign out</Text>
            </Pressable>
          : <Link to="/signin" style={styles.tab}>
              <Text fontSize="subheading" fontWeight="bold" style={styles.text}>Sign in</Text>
            </Link>
        }
      </ScrollView>
    </View>
  )
}
  
export default AppBar