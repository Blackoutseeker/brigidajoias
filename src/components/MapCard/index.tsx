import { FC } from 'react'
import Image from 'next/image'
import {
  MapCardContainer,
  ItemContent,
  ItemText,
  MapContainer,
  CustomerServiceText
} from './styles'
import LocationMarkerIcon from '@assets/icons/location_marker.svg'
import ClockGreyIcon from '@assets/icons/clock_grey.svg'
import Map from '@assets/images/Map.png'
import { CUSTOMER_SERIVCE_HOURS } from '@utils/constants'

const MapCard: FC = () => {
  return (
    <MapCardContainer>
      <ItemContent>
        <ItemText>Milagres - CE, 63250-000</ItemText>
        <Image src={LocationMarkerIcon} alt={'Localização'} />
      </ItemContent>
      <MapContainer>
        <Image
          src={Map}
          alt={'Milagres - CE'}
          objectFit={'cover'}
          layout={'fixed'}
          quality={100}
          placeholder={'blur'}
        />
      </MapContainer>
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
