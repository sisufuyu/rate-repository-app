import { gql } from '@apollo/client'

export const REPOSITORY_INFO = gql`
  fragment RepositoryInfo on Repository {
    id
    ownerAvatarUrl
    language
    fullName
    description
    ratingAverage
    reviewCount
    stargazersCount
    forksCount
  }
`