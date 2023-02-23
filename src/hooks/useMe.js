import { useQuery } from '@apollo/client'

import { ME } from '../graphql/queries'

const useMe = () => {
  const { loading, error, data } = useQuery(ME)

  const me = data?.me

  return { loading, error, me }
}

export default useMe