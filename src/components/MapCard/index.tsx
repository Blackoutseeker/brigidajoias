import { FC } from 'react'
import Image from 'next/image'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'
import {
  MapCardContainer,
  ItemContent,
  ItemText,
  GoogleMapContainer,
  CustomerServiceText
} from './styles'
import LocationMarkerIcon from '@assets/icons/location_marker.svg'
import ClockGreyIcon from '@assets/icons/clock_grey.svg'
import { CUSTOMER_SERIVCE_HOURS } from '@utils/constants'

const DefaultMapConfig = withGoogleMap(() => {
  // centers the map on Milagres - CE city of Brazil
  const coordinates = {
    lat: -7.3089528,
    lng: -38.943624
  }

  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={coordinates}
      center={coordinates}
    />
  )
})

const MapView = withScriptjs(DefaultMapConfig)

const MapCard: FC = () => {
  const googleMapURLWithApiKey = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`

  return (
    <MapCardContainer>
      <ItemContent>
        <ItemText>Milagres - CE, 63250-000</ItemText>
        <Image src={LocationMarkerIcon} alt={'Localização'} />
      </ItemContent>
      <MapView
        googleMapURL={googleMapURLWithApiKey}
        loadingElement={<GoogleMapContainer />}
        containerElement={<GoogleMapContainer />}
        mapElement={<GoogleMapContainer />}
      />
      <ItemContent>
        <ItemText>Horário de Atendimento</ItemText>
        <Image
          src={ClockGreyIcon}
          alt={'Horário de Atendimento'}
          width={25}
          height={25}
        />
      </ItemContent>
      <CustomerServiceText>{CUSTOMER_SERIVCE_HOURS}</CustomerServiceText>
    </MapCardContainer>
  )
}

export default MapCard
