import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query getPages($first: Int) {
    pages(first: $first) {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`

export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      id
      slug
      heading
      body {
        html
      }
    }
  }
`

export const GET_AGENTS = gql`
  query getAgents($first: Int) {
    agents(first: $first) {
      id
      name
      nickName
      slug
      location {
        latitude
        longitude
      }
      gadget {
        url
        height
        width
      }
    }
  }
`

export const GET_AGENT_BY_SLUG = gql`
  query getAgentBySlug($slug: String) {
    agent(where: { slug: $slug }) {
      id
      name
      nickName
      slug
      org
      birthDate
      height
      weight
      birthplace
      location {
        longitude
        latitude
      }
      avatar {
        url
        width
        height
      }
      orgImage {
        url
        width
        height
      }
      about {
        html
      }
    }
  }
`
