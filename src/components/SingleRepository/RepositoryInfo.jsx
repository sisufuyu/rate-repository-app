import { View, Pressable, StyleSheet } from 'react-native'
import * as Linking from 'expo-linking'

import RepositoryItem from '../RepositoryItem'
import Text from '../Text'
import theme from '../../theme'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    marginBottom: 10,
  },
  button: {
    marginHorizontal: 20,
    marginBottom: 10,
    paddingVertical: 15,
    backgroundColor: theme.colors.primary,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  text: {
    color: theme.colors.onBackground
  }
})

const RepositoryInfo = ({ repository }) => {
  const link = repository?.url
  
  return (
      <View style={styles.container}>
        <RepositoryItem item={repository} />
        <Pressable style={styles.button} onPress={() => Linking.openURL(link)}>
          <Text fontSize="subheading" fontWeight="bold" style={styles.text}>Open in GitHub</Text>
        </Pressable>
      </View>
  )
}

export default RepositoryInfo