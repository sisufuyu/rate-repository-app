import ReviewFormContainer from './ReviewFormContainer'
import useCreateReview from '../../hooks/useCreateReview'

const ReviewForm = ({ refetch }) => {
  const [createReview, { error }] = useCreateReview()

  const onSubmit = async (values) => {
    await createReview({ 
      ...values, 
      rating: Number(values.rating),
    })
    refetch()
  }

  return (
    <ReviewFormContainer onSubmit={onSubmit} error={error}/>
  )
}

export default ReviewForm