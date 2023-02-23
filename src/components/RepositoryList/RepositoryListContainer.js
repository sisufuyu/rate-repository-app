import { FlatList, View, StyleSheet } from 'react-native'

import RepositoryItem from './RepositoryItem'

const styles = StyleSheet.create({
  spearator: {
    height: 10,
  },
})

const ItemSeperator = () => <View style={styles.spearator} />

const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : []

  return (
    <FlatList 
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeperator}
        renderItem={RepositoryItem}
    />
  )
}

export default RepositoryListContainer