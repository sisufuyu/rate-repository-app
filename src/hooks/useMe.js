import { useQuery } from '@apollo/client'

import { ME } from '../graphql/queries'

const useMe = () => {
  const { loading, error, data } = useQuery(ME)

  return { loading, error, data }
}

export default useMe