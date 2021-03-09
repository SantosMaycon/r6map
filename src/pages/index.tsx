import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <Map
      places={[
        {
          id: '1',
          name: 'Penha',
          slug: 'penha',
          location: {
            latitude: -21.791326,
            longitude: -41.29285
          }
        }
      ]}
    />
  )
}
