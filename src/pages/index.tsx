import { MapProps } from 'components/Map'
import client from 'graphql/client'
import { GET_AGENTS } from 'graphql/queries'
import HomeTemplate from 'templates/home'
import { GetAgentsQuery } from 'graphql/generated/graphql'

export default function Home({ agents }: MapProps) {
  return <HomeTemplate agents={agents} />
}

export const getStaticProps = async () => {
  const { agents } = await client.request<GetAgentsQuery>(GET_AGENTS)

  return {
    props: {
      agents
    }
  }
}
