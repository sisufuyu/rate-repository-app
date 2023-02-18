import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import { Link } from 'react-router-native'

import Text from './Text'
import theme from '../theme'

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
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/" style={styles.tab}>
          <Text fontSize="subheading" fontWeight="bold" style={styles.text}>Repositories</Text>
        </Link>
        <Link to="/signin" style={styles.tab}>
          <Text fontSize="subheading" fontWeight="bold" style={styles.text}>Sign in</Text>
        </Link>
      </ScrollView>
    </View>
  )
}
  
export default AppBar