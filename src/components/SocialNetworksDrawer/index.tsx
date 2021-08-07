import { FC } from 'react'
import Image from 'next/image'
import {
  SocialNetworksDrawerContainer,
  ItemContent,
  ItemIconContent,
  ItemText
} from './styles'
import InstagramYellowIcon from '@assets/icons/instagram_yellow.svg'
import WhatsAppYellowIcon from '@assets/icons/whatsApp_yellow.svg'
import removeSpecialCharacters from '@services/removeSpecialChars'

const SocialNetworksDrawer: FC = () => {
  const instagram = process.env.INSTAGRAM!
  const whatsApp = process.env.WHATSAPP!

  const instagramWithoutSpecialCharacters = removeSpecialCharacters(instagram)
  const whatsAppWithoutSpecialCharacters = removeSpecialCharacters(whatsApp)

  const instagramProfileUrl = `https://instagram.com/${instagramWithoutSpecialCharacters}`
  const startCustomerServiceViaWhatsApp = `https://api.whatsapp.com/send?phone=${whatsAppWithoutSpecialCharacters}`

  return (
    <SocialNetworksDrawerContainer>
      <ItemContent
        width={140}
        href={instagramProfileUrl}
        rel={'noreferrer'}
        target={'_blank'}
      >
        <ItemIconContent>
          <Image src={InstagramYellowIcon} alt={`Instagram: ${instagram}`} />
        </ItemIconContent>
        <ItemText>{instagram}</ItemText>
      </ItemContent>
      <ItemContent
        width={200}
        href={startCustomerServiceViaWhatsApp}
        rel={'noreferrer'}
        target={'_blank'}
      >
        <ItemIconContent>
          <Image src={WhatsAppYellowIcon} alt={`WhatsApp: ${whatsApp}`} />
        </ItemIconContent>
        <ItemText>{whatsApp}</ItemText>
      </ItemContent>
    </SocialNetworksDrawerContainer>
  )
}

export default SocialNetworksDrawer
