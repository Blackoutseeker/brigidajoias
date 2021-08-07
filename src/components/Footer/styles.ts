import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.secundary};
  .social-networks {
    display: none;
    @media screen and (max-width: 656px) {
      display: flex;
    }
  }
`

export const SectionContent = styled.div`
  min-width: 300px;
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
`

export const SectionTitleContent = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SectionTitleText = styled.span`
  color: #fff;
  font-size: 16px;
`

export const DividerWrapper = styled.div`
  width: 100%;
  display: none;
  @media screen and (max-width: 656px) {
    display: flex;
  }
`

export const SocialNetworksContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`

export const SocialNetworksButton = styled.a`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 20px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
`

export const ServiceContent = styled.div`
  width: 300px;
  min-height: 70px;
  display: flex;
  flex: 1;
  align-items: center;
`

export const ServiceIconContent = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`

export const ServiceInfoContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const ServiceTitleText = styled.span`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin: 2px 0px;
`

export const ServiceDescriptionText = styled.span`
  color: #fff;
  font-size: 14px;
  margin: 2px 0px;
`

export const PaymentContent = styled(ServiceContent)`
  min-height: 60px;
`

export const PaymentText = styled.span`
  color: #fff;
  font-size: 16px;
`

export const TrademarkText = styled.span`
  color: #fff;
  font-size: 14px;
  opacity: 0.25;
  margin-top: 20px;
`

export const LogoContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 20px;
`
