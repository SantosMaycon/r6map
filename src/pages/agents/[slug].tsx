import client from 'graphql/client'
import { GetAgentBySlugQuery, GetAgentsQuery } from 'graphql/generated/graphql'
import { GET_AGENTS, GET_AGENT_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import AgentsTemplate, { AgentsTemplateProps } from 'templates/Agents'

export default function Agent({ agent }: AgentsTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <AgentsTemplate agent={agent} />
}

export async function getStaticPaths() {
  const { agents } = await client.request<GetAgentsQuery>(GET_AGENTS, {
    first: 10
  })

  const paths = agents.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { agent } = await client.request<GetAgentBySlugQuery>(
    GET_AGENT_BY_SLUG,
    { slug: `${params?.slug}` }
  )

  if (!agent) return { notFound: true }

  return {
    props: {
      agent
    }
  }
}
