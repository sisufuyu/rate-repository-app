import { FlatList } from 'react-native'
import { useParams } from 'react-router-native'

import useRepository from '../../hooks/useRepository'
import ReviewItem from '../ReviewItem'
import RepositoryInfo from './RepositoryInfo'
import ItemSeperator from '../ItemSeperator'

const SingleRepository = () => {
  let { repositoryId } = useParams()

  const { repository } = useRepository(repositoryId)

  const reviews = repository?.reviews
    ? repository.reviews.edges.map(edge => edge.node)
    : []

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      ItemSeparatorComponent={ItemSeperator}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
    />
  )
}

export default SingleRepository