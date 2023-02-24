import { FlatList } from 'react-native'

import RepositoryWrapper from './RepositoryWrapper'
import ItemSeperator from './ItemSeperator'

const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : []

  return (
    <FlatList 
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeperator}
      renderItem={RepositoryWrapper}
    />
  )
}

export default RepositoryListContainer