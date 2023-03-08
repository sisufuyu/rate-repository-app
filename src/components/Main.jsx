import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'

import useMe from '../hooks/useMe'
import AppBar from './AppBar'
import RepositoryList from './RepositoryList'
import theme from '../theme'
import SignIn from './SignIn'
import SingleRepository from './SingleRepository'
import ReviewForm from './ReviewForm'
import SignUp from './SignUp'
import ReviewList from './ReviewList'

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.surface,
  },
})

const Main = () => {
  const { me, refetch } = useMe()
  const id = me?.id
  const reviews = me?.reviews
    ? me.reviews.edges.map(edge => edge.node)
    : []

  return (
    <View style={styles.container}>
        <AppBar id={id} />
        <Routes>
          <Route path="/" element={<RepositoryList />} exact />
          <Route path="/signin" element={<SignIn />} exact />
          <Route path="/repository/:repositoryId" element={<SingleRepository />} exact />
          <Route path="/create-review" element={<ReviewForm />} exact />
          <Route path="/reviews" element={<ReviewList reviews={reviews} refetch={refetch} />} exact />
          <Route path="/signup" element={<SignUp />} exact />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </View>
  )
}

export default Main