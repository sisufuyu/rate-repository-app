import { gql } from '@apollo/client'

import { REPOSITORY_INFO } from './fragment'

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ...RepositoryInfo
        }
      }
    }
  }
  ${REPOSITORY_INFO}
`

export const ME = gql`
  query ME{
    me {
      id
      username
    }
  }
`

export const GET_REPOSITORY = gql`
  query Repository($id: ID!){
    repository(id: $id) {
      ...RepositoryInfo
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
  ${REPOSITORY_INFO}
`