import { Formik } from 'formik'
import { View, Pressable } from 'react-native'
import * as yup from 'yup'

import FormikTextInput from '../FormikTextInput'
import Text from '../Text'
import { formStyles } from '../../styles'

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, 'Username must have at least 2 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(8, 'Password must have at least 8 characters')
    // .matches(/^(?=.*[0-9])(?=.*[A-Za-z]).{8,}$/, {message: 'Password must have at least 8 characters and conatin a letter and a number'})
    .required('Password is required')
})

const SignInContainer = ({ onSubmit }) => {
  const initialValues = {
    username: '',
    password: '',
  }
  return (
    <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({handleSubmit}) =>
        <View style={formStyles.container}>
          <FormikTextInput name="username" placeholder="Username" />
          <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} />
          <Pressable style={formStyles.button} onPress={handleSubmit}>
            <Text fontWeight="bold" fontSize="subheading" style={formStyles.text}>Sign In</Text>
          </Pressable>
        </View>
      }
    </Formik>
  )
}

export default SignInContainer