import { useRouter } from 'next/dist/client/router'
import { MapContainer, TileLayer, Marker, MapConsumer } from 'react-leaflet'
import L from 'leaflet'

import * as S from './styles'

type Agent = {
  id: string
  nickName: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
  gadget: {
    url: string
    height: number
    width: number
  }
}

export type MapProps = {
  agents?: Agent[]
}

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID

const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}

const Map = ({ agents }: MapProps) => {
  const router = useRouter()
  return (
    <S.MapWrapper>
      <MapContainer
        center={[20, 0]}
        zoom={2.7}
        style={{ width: '100%', height: '100%' }}
        minZoom={2.7}
        maxBounds={[
          [-180, 180],
          [180, -180]
        ]}
      >
        <MapConsumer>
          {(map) => {
            const width =
              window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth

            if (width < 768) {
              map.setMinZoom(1.8)
            }

            return null
          }}
        </MapConsumer>
        <CustomTileLayer />
        {agents?.map(({ id, slug, nickName, location, gadget }) => {
          const { latitude, longitude } = location

          return (
            <Marker
              key={`agents-${id}`}
              position={[latitude, longitude]}
              title={nickName}
              icon={
                new L.Icon({
                  iconUrl: gadget.url,
                  iconSize: [40, 40],
                  iconAnchor: [20, 40],
                  popupAnchor: [0, -40]
                })
              }
              eventHandlers={{
                click: () => {
                  router.push(`agents/${slug}`)
                }
              }}
            />
          )
        })}
      </MapContainer>
    </S.MapWrapper>
  )
}

export default Map
