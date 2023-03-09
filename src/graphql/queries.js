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

export const SORT_REPOSITORIES = gql`
  query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
      edges {
        node {
          ...RepositoryInfo
        }
      }
    }
  }
  ${REPOSITORY_INFO}
`

export const FILTER_REPOSITORIES = gql`
query Repositories($first: Int, $after: String, $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
  repositories(first: $first, after: $after, orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
    edges {
      node {
        ...RepositoryInfo
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
${REPOSITORY_INFO}
`

export const ME = gql`
  query Me ($includeReviews: Boolean = false){
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            createdAt
            rating
            text
            repository {
              fullName
            }
            repositoryId
          }
        }
      }
    }
  }
`

export const GET_REPOSITORY = gql`
  query Repository($id: ID!, $first: Int, $after: String){
    repository(id: $id) {
      ...RepositoryInfo
      url
      reviews(first: $first, after: $after) {
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
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
  ${REPOSITORY_INFO}
`