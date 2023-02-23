import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ownerAvatarUrl
          language
          fullName
          description
          ratingAverage
          reviewCount
          stargazersCount
          forksCount
        }
      }
    }
  }
`

export const ME = gql`
  query ME{
    me {
      id
      username
    }
  }
`