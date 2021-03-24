import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ agents }: MapProps) {
  return (
    <>
      <NextSeo
        title="R6 Map"
        description="A simple project to show agents of R6 spots in the world."
        canonical="https://r6map-santosmaycon.vercel.app"
        openGraph={{
          url: 'https://r6map-santosmaycon.vercel.app',
          images: [
            {
              url: 'https://r6map-santosmaycon.vercel.app/img/cover.jpeg',
              width: 1280,
              height: 720,
              alt: 'R6 Map'
            }
          ],
          site_name: 'R6 Map'
        }}
      />
      <LinkWrapper href="/sobre">
        <InfoOutline size={32} aria-label="Go to the page about" />
      </LinkWrapper>
      <Map agents={agents} />
    </>
  )
}
