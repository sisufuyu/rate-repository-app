import { Pressable, View, Image, StyleSheet } from 'react-native'

import Text from '../Text'
import theme from '../../theme'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: 'white',
  },
  flextAround: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginVertical: 5
  },
  flexStart: {
    justifyContent: 'flex-start'
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 5,
    marginHorizontal: 10
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 3,
    marginVertical: 5 
  },
  marginVertical: {
    marginVertical: 5
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    flexWrap: 'wrap'
  },
  text: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginVertical: 5,
  },
  content: {
    flexShrink: 1,
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'flex-start',
    marginLeft: 10
  }
})

const RepositoryItem = ({ item }) => {
  const infoStyles = [
    styles.flextAround,
    styles.flexStart
  ]

  const count = (num) => {
    if(num > 1000) {
      return (num/1000).toFixed(1) + 'k'
    }
    return num
  }

  return (
    <View testID="repositoryItem" style={styles.container}>
      <View style={infoStyles}>
        <Image source={{uri: item?.ownerAvatarUrl}} style={styles.image} />
        <View style={styles.content}>
          <Text fontWeight="bold" style={styles.marginVertical}>{item?.fullName}</Text>
          <Text color="textSecondary" style={styles.text}>{item?.description}</Text>
          <Pressable style={styles.button}>
            <Text fontWeight="bold" style={{color: theme.colors.onBackground}}>{item?.language}</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.flextAround}>
        <View style={styles.flexColumn}>
          <Text fontWeight="bold" style={styles.marginVertical}>{count(item?.stargazersCount)}</Text>
          <Text color="textSecondary">Stars</Text>
        </View>
        <View style={styles.flexColumn}>
          <Text fontWeight="bold" style={styles.marginVertical}>{count(item?.forksCount)}</Text>
          <Text color="textSecondary">Forks</Text>
        </View>
        <View style={styles.flexColumn}>
          <Text fontWeight="bold" style={styles.marginVertical}>{count(item?.reviewCount)}</Text>
          <Text color="textSecondary">Reviews</Text>
        </View>
        <View style={styles.flexColumn}>
          <Text fontWeight="bold" style={styles.marginVertical}>{count(item?.ratingAverage)}</Text>
          <Text color="textSecondary">Rating</Text>
        </View>
      </View>
    </View>
  )
}

export default RepositoryItem