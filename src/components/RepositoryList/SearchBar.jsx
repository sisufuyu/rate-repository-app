import { Searchbar as NativeSearchBar } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import { useState } from 'react'

import { useRepositoriesContext } from '../../hooks/useRepositoriesContext'
import theme from '../../theme'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 45,
    borderBottomColor: theme.colors.surface,
    borderWidth: 0,
    borderRadius: 0,
  },
  input: {
    fontSize: theme.fontSizes.body
  }
})

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { setKeyword } = useRepositoriesContext()

  const onChangeSearch = query => setSearchQuery(query)

  const onSubmitEditing = () => setKeyword(searchQuery)
  
  return (
    <NativeSearchBar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.container}
      inputStyle={styles.input}
      onSubmitEditing={onSubmitEditing}
      onIconPress={onSubmitEditing}
    />
  )
}
  
export default Searchbar
