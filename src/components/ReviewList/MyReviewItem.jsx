import { View, StyleSheet, Pressable, Alert } from 'react-native'
import { Link } from 'react-router-native'

import ReviewItem from '../ReviewItem'
import Text from '../Text'
import useDeleteReview from '../../hooks/useDeleteReview'
import { formStyles } from '../../styles' 
import theme from '../../theme'

const styles = StyleSheet.create({
  container: {
    ...formStyles.container,
    paddingVertical: 10,
    paddingHorizontal: 0, 
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  viewButton: {
    ...formStyles.button,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  deleteButton: {
    ...formStyles.button,
    backgroundColor: theme.colors.error,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    marginLeft: 10,
  },
  text: {
    color: 'white',
  },
})

const MyReviewItem = ({ item, refetch }) => {
  const repositoryId = item.repositoryId
  const reviewId = item.id

  const [deleteReview] = useDeleteReview(reviewId)

  const createDeleteAlert = () => {
    Alert.alert(
      'Delete review',
      'Are you sue want to delete this review?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK', 
          onPress: async () => {
            await deleteReview(reviewId)
            refetch({ includeReviews: true })
          }
        },
      ]
    )
  }

  return (
  <View style={styles.container}>
    <ReviewItem review={item} />
    <View style={styles.buttonContainer}>
      <Link style={styles.viewButton} to={`/repository/${repositoryId}`}>
        <Text fontWeight="bold" style={styles.text}>View Repository</Text>
      </Link>
      <Pressable style={styles.deleteButton} onPress={createDeleteAlert}>
        <Text fontWeight="bold" style={styles.text}>Delete Review</Text>
      </Pressable>
    </View>
  </View>
  )
}

export default MyReviewItem