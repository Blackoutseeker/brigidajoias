import { FC } from 'react'
import Image from 'next/image'
import {
  FooterContainer,
  SectionContent,
  SectionTitleContent,
  SectionTitleText,
  DividerWrapper,
  SocialNetworksContent,
  SocialNetworksButton,
  ServiceContent,
  ServiceIconContent,
  ServiceInfoContent,
  ServiceTitleText,
  ServiceDescriptionText,
  PaymentContent,
  PaymentText,
  TrademarkText,
  LogoContent
} from './styles'
import Divider from '@components/Divider'
import InstagramWhiteIcon from '@assets/icons/instagram_white.svg'
import WhatsAppWhiteIcon from '@assets/icons/whatsApp_white.svg'
import EmailIcon from '@assets/icons/email.svg'
import ClockWhiteIcon from '@assets/icons/clock_white.svg'
import CreditCardIcon from '@assets/icons/credit_card.svg'
import BankTransferIcon from '@assets/icons/bank_transfer.svg'
import PixIcon from '@assets/icons/pix.svg'
import LogoWhite from '@assets/images/logo_white.svg'
import { CUSTOMER_SERIVCE_HOURS } from '@utils/constants'
import removeSpecialCharacters from '@services/removeSpecialChars'

const Footer: FC = () => {
  const whatsApp = process.env.WHATSAPP!
  const instagram = process.env.INSTAGRAM!
  const email = process.env.EMAIL!

  const instagramWithoutSpecialCharacters = removeSpecialCharacters(instagram)
  const whatsAppWithoutSpecialCharacters = removeSpecialCharacters(whatsApp)

  const instagramProfileUrl = `https://instagram.com/${instagramWithoutSpecialCharacters}`
  const startCustomerServiceViaWhatsApp = `https://api.whatsapp.com/send?phone=${whatsAppWithoutSpecialCharacters}`

  return (
    <FooterContainer>
      <SectionContent className={'social-networks'}>
        <SectionTitleContent>
          <SectionTitleText>Redes Sociais</SectionTitleText>
        </SectionTitleContent>
        <SocialNetworksContent>
          <SocialNetworksButton
            href={instagramProfileUrl}
            rel={'noreferrer'}
            target={'_blank'}
          >
            <Image src={InstagramWhiteIcon} alt={`Instagram: ${instagram}`} />
          </SocialNetworksButton>
          <SocialNetworksButton
            href={startCustomerServiceViaWhatsApp}
            rel={'noreferrer'}
            target={'_blank'}
          >
            <Image src={WhatsAppWhiteIcon} alt={`WhatsApp: ${whatsApp}`} />
          </SocialNetworksButton>
        </SocialNetworksContent>
      </SectionContent>
      <DividerWrapper>
        <Divider height={25} color={'rgba(255, 255, 255, 0.2)'} />
      </DividerWrapper>
      <SectionContent>
        <SectionTitleContent>
          <SectionTitleText>Atendimento</SectionTitleText>
        </SectionTitleContent>
        <ServiceContent>
          <ServiceIconContent>
            <Image
              src={WhatsAppWhiteIcon}
              alt={`WhatsApp: ${whatsApp}`}
              width={40}
              height={40}
            />
          </ServiceIconContent>
          <ServiceInfoContent>
            <ServiceTitleText>WhatsApp</ServiceTitleText>
            <ServiceDescriptionText>{whatsApp}</ServiceDescriptionText>
          </ServiceInfoContent>
        </ServiceContent>
        <ServiceContent>
          <ServiceIconContent>
            <Image src={EmailIcon} alt={`Email: ${email}`} />
          </ServiceIconContent>
          <ServiceInfoContent>
            <ServiceTitleText>Email</ServiceTitleText>
            <ServiceDescriptionText>{email}</ServiceDescriptionText>
          </ServiceInfoContent>
        </ServiceContent>
        <ServiceContent>
          <ServiceIconContent>
            <Image
              src={ClockWhiteIcon}
              alt={`Hor??rio de Atendimento: ${email}`}
            />
          </ServiceIconContent>
          <ServiceInfoContent>
            <ServiceTitleText>Hor??rio de Atendimento</ServiceTitleText>
            <ServiceDescriptionText>
              {CUSTOMER_SERIVCE_HOURS}
            </ServiceDescriptionText>
          </ServiceInfoContent>
        </ServiceContent>
      </SectionContent>
      <DividerWrapper>
        <Divider height={25} color={'rgba(255, 255, 255, 0.2)'} />
      </DividerWrapper>
      <SectionContent>
        <SectionTitleContent>
          <SectionTitleText>Formas de Pagamento</SectionTitleText>
        </SectionTitleContent>
        <PaymentContent>
          <ServiceIconContent>
            <Image
              src={CreditCardIcon}
              alt={'Cart??o de Cr??dito e D??bito'}
              width={30}
              height={30}
            />
          </ServiceIconContent>
          <PaymentText>Cart??o de Cr??dito e D??bito</PaymentText>
        </PaymentContent>
        <PaymentContent>
          <ServiceIconContent>
            <Image
              src={BankTransferIcon}
              alt={'Transfer??ncia Banc??ria'}
              width={30}
              height={30}
            />
          </ServiceIconContent>
          <PaymentText>Transfer??ncia Banc??ria</PaymentText>
        </PaymentContent>
        <PaymentContent>
          <ServiceIconContent>
            <Image src={PixIcon} alt={'Pix'} width={30} height={30} />
          </ServiceIconContent>
          <PaymentText>Pix</PaymentText>
        </PaymentContent>
      </SectionContent>
      <DividerWrapper>
        <Divider height={25} color={'rgba(255, 255, 255, 0.2)'} />
      </DividerWrapper>
      <SectionContent>
        <TrademarkText>
          ?? 2021 - Br??gida Joias?? Todos os direitos reservados.
          <br />
          ?? expressamente proibida a c??pia, reprodu????o sem autoriza????o pr??via.
          <br />
          As imagens dos produtos s??o meramente ilustrativas. Todos os pre??os e
          condi????es comerciais est??o sujeitos a altera????o sem pr??vio aviso.
        </TrademarkText>
        <LogoContent>
          <Image src={LogoWhite} alt={'Br??gida Joias'} />
        </LogoContent>
      </SectionContent>
    </FooterContainer>
  )
}

export default Footer
