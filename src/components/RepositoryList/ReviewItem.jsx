import { View, StyleSheet } from 'react-native'

import Text from '../Text'
import theme from '../../theme'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  rating: {
    borderColor: theme.colors.primary,
    borderRadius: 20,
    borderWidth: 1,
    width: 40,
    height: 40,
    marginRight: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flexShrink: 1,
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'flex-start',
  },
  text: {
    paddingBottom: 10,
  }
})

const dateTransfer = (time) => {
  const date = new Date(time)
  return `${date.getDate()}.${date.getMonth()+1< 10 ? '0' + (date.getMonth()+1) : date.getMonth()+1}.${date.getFullYear()}`
}

const ReviewItem = ({ review }) => {
  if(!review) return <></>

  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text color="primary" fontWeight="bold" fontSize="subheading">{review.rating}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text fontWeight="bold" fontSize="subheading" style={styles.text}>{review.user?.username}</Text>
        <Text style={styles.text}>{dateTransfer(review.createdAt)}</Text>
        <Text style={styles.text}>{review.text}</Text>
      </View>
    </View>
  )
}

export default ReviewItem