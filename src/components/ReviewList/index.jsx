import { FlatList } from 'react-native'

import ItemSeperator from '../ItemSeperator'
import MyReviewItem from './MyReviewItem'

const ReviewList = ({ reviews, refetch }) => {  
  return (
    <FlatList 
      data={reviews}
      ItemSeparatorComponent={ItemSeperator}
      renderItem={({item}) => <MyReviewItem item={item} refetch={refetch} />}
    />
  )
}

export default ReviewList