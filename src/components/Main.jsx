import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native'

import AppBar from './AppBar'
import RepositoryList from './RepositoryList'
import theme from '../theme'
import SignIn from './SignIn'
import SingleRepository from './RepositoryList/SingleRepository'
import ReviewForm from './ReviewForm'

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.surface,
  },
})

const Main = () => {
  return (
    <View style={styles.container}>
        <AppBar />
        <Routes>
          <Route path="/" element={<RepositoryList />} exact />
          <Route path="/signin" element={<SignIn />} exact />
          <Route path="/repository/:repositoryId" element={<SingleRepository />} exact />
          <Route path="/review" element={<ReviewForm />} exact />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </View>
  )
}

export default Main