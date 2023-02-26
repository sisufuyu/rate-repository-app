import { Formik } from 'formik'
import { Pressable, View } from 'react-native'
import * as Yup from 'yup'

import FormikTextInput from '../FormikTextInput'
import Text from '../Text'
import { formStyles, errorStyles } from '../../styles'

const validationSchema = Yup.object().shape({
  repositoryName: Yup.string()
    .required('Repository name is required'),
  ownerName: Yup.string()
    .required('Repository owner name is required'),
  rating: Yup.number()
    .min(0, 'Rating is minimum 0')
    .max(100, 'Rating is maximum 100')
    .required('Rating is required'),
  text: Yup.string()
})

const ReviewFormContainer = ({ onSubmit, error }) => {
  const initialValues = {
    repositoryName: '',
    ownerName: '',
    rating: 0,
    text: '',
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({handleSubmit})=> 
        <View style={formStyles.container}>
          <FormikTextInput name="ownerName" placeholder="Repository owner name" />
          <FormikTextInput name="repositoryName" placeholder="Repository name" />
          <FormikTextInput name="rating" placeholder="Rating bwtween 0 and 100" />
          <FormikTextInput name="text" placeholder="Review" multiline={true} />
          <Pressable onPress={handleSubmit} style={formStyles.button}>
            <Text style={formStyles.text}>Create a review</Text>
          </Pressable>
          {error && <Text style={[errorStyles.text, {marginTop: 10}]}>{error.message}</Text>}
        </View>
      }
    </Formik>
  )
}

export default ReviewFormContainer