import ReviewFormContainer from './ReviewFormContainer'
import useCreateReview from '../../hooks/useCreateReview'

const ReviewForm = () => {
  const [createReview, { error }] = useCreateReview()

  const onSubmit = async (values) => {
    await createReview({ 
      ...values, 
      rating: Number(values.rating),
    })
  }

  return (
    <ReviewFormContainer onSubmit={onSubmit} error={error}/>
  )
}

export default ReviewForm