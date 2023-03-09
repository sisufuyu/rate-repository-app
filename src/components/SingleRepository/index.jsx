import { FlatList } from 'react-native'
import { useParams } from 'react-router-native'

import useRepository from '../../hooks/useRepository'
import ReviewItem from '../ReviewItem'
import RepositoryInfo from './RepositoryInfo'
import ItemSeperator from '../ItemSeperator'

const SingleRepository = () => {
  let { repositoryId } = useParams()

  const { repository, fetchMore } = useRepository({ id: repositoryId, first: 5, after: '' })

  const reviews = repository?.reviews
    ? repository.reviews.edges.map(edge => edge.node)
    : []

  const onEndReached = () => {
    fetchMore()
    // console.log('You have reached the end of the list')
  }

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      ItemSeparatorComponent={ItemSeperator}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      onEndReached={onEndReached}
    />
  )
}

export default SingleRepository