import { useQuery } from '@apollo/client'

import { FILTER_REPOSITORIES } from '../graphql/queries'

const useRepositories = (variables) => {
  const {loading, error, data, fetchMore } = useQuery(FILTER_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables,
  })

  const handleFetchMore = () => {
    const pageInfo = data?.repositories.pageInfo
    const canFetchMore = !loading && pageInfo.hasNextPage

    if(!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        ...variables,
        after: pageInfo.endCursor,
      }
    })
  }

  const repositories = data?.repositories

  return { repositories, loading, error, fetchMore: handleFetchMore }
}

export default useRepositories