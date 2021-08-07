import { FC, memo } from 'react'
import Image from 'next/image'
import {
  SellerCardContainer,
  NameText,
  FlexWrapContainer,
  ItemContainer,
  ImageContent,
  ItemContent,
  ItemIconContent,
  ItemText
} from './styles'
import LocationIcon from '@assets/icons/location_marker.svg'
import InstagramGreyIcon from '@assets/icons/instagram_grey.svg'
import WhatsAppGreyIcon from '@assets/icons/whatsApp_grey.svg'

export interface Seller {
  name: string
  imageUrl: string
  location: string
  instagram: string
  whatsApp: string
}

const SellerCard: FC<Seller> = props => {
  const { name, imageUrl, location, instagram, whatsApp } = props

  return (
    <SellerCardContainer>
      <NameText>{name}</NameText>
      <FlexWrapContainer>
        <ImageContent>
          <Image
            src={imageUrl}
            alt={name}
            width={190}
            height={190}
            className={'next-image'}
          />
        </ImageContent>
        <ItemContainer>
          <ItemContent>
            <ItemIconContent>
              <Image src={LocationIcon} alt={`Localização: ${location}`} />
            </ItemIconContent>
            <ItemText>{location}</ItemText>
          </ItemContent>
          <ItemContent>
            <ItemIconContent>
              <Image src={InstagramGreyIcon} alt={`Instagram: ${instagram}`} />
            </ItemIconContent>
            <ItemText>{instagram}</ItemText>
          </ItemContent>
          <ItemContent>
            <ItemIconContent>
              <Image src={WhatsAppGreyIcon} alt={`WhatsApp: ${whatsApp}`} />
            </ItemIconContent>
            <ItemText>{whatsApp}</ItemText>
          </ItemContent>
        </ItemContainer>
      </FlexWrapContainer>
    </SellerCardContainer>
  )
}

export default memo(SellerCard)
