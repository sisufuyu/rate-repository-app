import { View, StyleSheet, ScrollView, Pressable } from 'react-native'
import Constants from 'expo-constants'
import { Link } from 'react-router-native'
import { useApolloClient } from '@apollo/client'
import { useNavigate } from 'react-router-native'

import Text from './Text'
import theme from '../theme'

import { useAuthStorage } from '../hooks/useAuthStorage'
import { useRepositoriesContext } from '../hooks/useRepositoriesContext'

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

const AppBar = ({ id }) => {
  const authStorage = useAuthStorage()
  const client = useApolloClient()

  const { setOrderBy, setOrderDirection, setSearchKeyword } = useRepositoriesContext()
  const navigate = useNavigate()

  const onPress = () => {
    setOrderBy('CREATED_AT')
    setOrderDirection('DESC')
    setSearchKeyword('')
    navigate('/')
  }

  const signOut = async () => {
    await authStorage.removeAccessToken()
    client.resetStore()
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable style={styles.tab} onPress={onPress}>
          <Text fontSize="subheading" fontWeight="bold" style={styles.text}>Repositories</Text>
        </Pressable>
        {id
          ? <>
            <Link to ="/create-review" style={styles.tab}>
              <Text fontSize="subheading" fontWeight="bold" style={styles.text}>Create a review</Text>
            </Link>
            <Link to ="/reviews" style={styles.tab}>
              <Text fontSize="subheading" fontWeight="bold" style={styles.text}>My reviews</Text>
            </Link>
            <Pressable onPress={signOut}>
              <Text fontSize="subheading" fontWeight="bold" style={styles.text}>Sign out</Text>
            </Pressable>
            </>
          : <>
            <Link to="/signin" style={styles.tab}>
              <Text fontSize="subheading" fontWeight="bold" style={styles.text}>Sign in</Text>
            </Link>
            <Link to="/signup" style={styles.tab}>
              <Text fontSize="subheading" fontWeight="bold" style={styles.text}>Sign up</Text>
            </Link>
            </>
        }
      </ScrollView>
    </View>
  )
}
  
export default AppBar