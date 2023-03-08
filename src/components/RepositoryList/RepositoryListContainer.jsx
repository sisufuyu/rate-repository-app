import { FlatList } from 'react-native'

import RepositoryWrapper from './RepositoryWrapper'
import ItemSeperator from '../ItemSeperator'
import SortMenu from './SortMenu'
import Searchbar from './SearchBar'

const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : []

  return (
    <FlatList 
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeperator}
      ListHeaderComponent={<><Searchbar /><SortMenu /></>}
      renderItem={RepositoryWrapper}
    />
  )
}

export default RepositoryListContainer