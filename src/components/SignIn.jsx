import { Formik } from 'formik'
import { View, Pressable, StyleSheet } from 'react-native'
import * as yup from 'yup'

import FormikTextInput from './FormikTextInput'
import Text from './Text'
import useSignIn from '../hooks/useSignIn'
import theme from '../theme'

const styles = StyleSheet.create({
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

const SignIn = () => {
  const initialValues = {
    username: '',
    password: '',
  }

  const [signIn] = useSignIn()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      await signIn({ username, password })
      
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({handleSubmit}) =>
        <View style={styles.container}>
          <FormikTextInput name="username" placeholder="Username" />
          <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} />
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text fontWeight="bold" fontSize="subheading" style={styles.text}>Sign In</Text>
          </Pressable>
        </View>
      }
    </Formik>
  )
};

export default SignIn