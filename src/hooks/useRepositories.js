import { useQuery } from '@apollo/client'

import { FILTER_REPOSITORIES } from '../graphql/queries'

const useRepositories = ({ orderBy, orderDirection, keyword }) => {
  const {loading, error, data} = useQuery(FILTER_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { orderBy, orderDirection, searchKeyword: keyword }
  })

  const repositories = data?.repositories

  return {repositories, loading, error}
}

export default useRepositories