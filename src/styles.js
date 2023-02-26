import { StyleSheet } from 'react-native'

import theme from './theme'

export const formStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 10, 
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    aligenItems: 'center',
    padding: 10,
  },
  text: {
    color: theme.colors.onBackground,
  },
})

export const errorStyles = {
  text: {
    color: theme.colors.error,
    marginBottom: 15,
  }
}