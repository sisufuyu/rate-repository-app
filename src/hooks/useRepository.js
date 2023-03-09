import { useQuery } from '@apollo/client'

import { GET_REPOSITORY } from '../graphql/queries'

const useRepository = (variables) => {
  const { data, loading, error, fetchMore } = useQuery(
    GET_REPOSITORY,
    {
      variables,
      fetchPolicy: 'cache-and-network',
      // onCompleted: data => console.log(data),
    },
  )

  const handleFetchMore = () => {
    const pageInfo = data?.repository.reviews.pageInfo
    const canFetchMore = !loading && pageInfo.hasNextPage

    if(!canFetchMore){
      return;
    }

    fetchMore({
      variables: {
        ...variables,
        after: pageInfo.endCursor,
      }
    })
  }

  const repository = data?.repository
  
  return { repository, loading, error, fetchMore: handleFetchMore }
}

export default useRepository