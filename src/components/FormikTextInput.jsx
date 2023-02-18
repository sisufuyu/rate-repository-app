import { StyleSheet } from 'react-native-web'
import { useField } from 'formik'

import TextInput from './TextInput'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  error: {
    color: theme.colors.error,
    marginBottom: 10,
  }
})

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  const onChangeText = (value) => helpers.setValue(value)
  const onBluer = () => helpers.setTouched(true)

  return (
    <>
      <TextInput 
        value={field.value}
        onChangeText={onChangeText}
        onBlur={onBluer}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.error}>{meta.error}</Text>}
    </>
  )
}

export default FormikTextInput