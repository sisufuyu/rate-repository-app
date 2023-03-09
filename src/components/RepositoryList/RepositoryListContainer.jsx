import { FlatList } from 'react-native'

import RepositoryWrapper from './RepositoryWrapper'
import ItemSeperator from '../ItemSeperator'
import SortMenu from './SortMenu'
import Searchbar from './SearchBar'

const RepositoryListContainer = ({ repositories, fetchMore }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : []
  
  const onEndReached = () => {
    fetchMore()
    //console.log('You have reached the end of the list')
  }

  return (
    <FlatList 
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeperator}
      ListHeaderComponent={<><Searchbar /><SortMenu /></>}
      renderItem={RepositoryWrapper}
      onEndReached={onEndReached}
    />
  )
}

export default RepositoryListContainer