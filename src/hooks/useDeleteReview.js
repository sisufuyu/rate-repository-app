import { useMutation } from '@apollo/client'

import { DELETE_REVIEW } from '../graphql/mutations'

const useDeleteReview = (id) => {
  const [deleteReview, result] = useMutation(DELETE_REVIEW, {
    variables: { deleteReviewId: id },
  })

  return [deleteReview, result]
}

export default useDeleteReview