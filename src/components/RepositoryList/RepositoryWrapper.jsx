import { Link } from 'react-router-native'

import RepositoryItem from './RepositoryItem'

const RepositoryWrapper = ({ item }) => {
  const id = item?.id

  return (
    <Link to={`/repository/${id}`}>
      <RepositoryItem item={item} />
    </Link>
  )
}

export default RepositoryWrapper