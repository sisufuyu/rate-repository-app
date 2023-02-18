import { TextInput as NativeTextInput, StyleSheet } from 'react-native'

import theme from '../theme'

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.colors.tertiary,
    padding: 10,
    placeholderTextColor: theme.colors.surface,
    fontSize: theme.fontSizes.subheading,
    marginBottom: 10 
  },
  errorInput: {
    borderColor: theme.colors.error
  }
})

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    styles.input,
    error && styles.errorInput,
    style
  ]

  return <NativeTextInput style={textInputStyle} {...props} />
}

export default TextInput