import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-native'

import { CREATE_REVIEW } from '../graphql/mutations'

const useCreateReview = () => {
  const navigate = useNavigate()

  const [mutate, result] = useMutation(CREATE_REVIEW)

  const createReview = async ({ ownerName, rating, repositoryName, text }) => {
    console.log(rating)
    await mutate({
      variables: { review: { ownerName, rating, repositoryName, text }},
      onCompleted: (data) => {
        console.log(data)
        const repositoryId = data?.createReview?.repositoryId
        navigate(`/repository/${repositoryId}`)
      },
      onError: err => console.log(err)
    })
  }

  return [createReview, result]
}

export default useCreateReview