import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'
const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ agents }: MapProps) {
  return (
    <>
      <LinkWrapper href="/sobre">
        <InfoOutline size={32} aria-label="Go to the page about" />
      </LinkWrapper>
      <Map agents={agents} />
    </>
  )
}
