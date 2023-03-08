import { useQuery } from '@apollo/client'

import { ME } from '../graphql/queries'

const useMe = () => {
  const { loading, error, data, refetch } = useQuery(ME, {
    variables: { includeReviews: true },
    fetchPolicy: 'cache-and-network',
    // onCompleted: data => console.log(data)
  })

  const me = data?.me

  return { loading, error, me, refetch }
}

export default useMe