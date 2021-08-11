import { NextPage } from 'next'
import Head from 'next/head'
import PageContainer from '@components/PageContainer'
import Header from '@components/Header'
import NavBar from '@components/NavBar'
import Slogan from '@components/Slogan'
import MapCard from '@components/MapCard'
import SocialNetworksDrawer from '@components/SocialNetworksDrawer'
import Footer from '@components/Footer'
import { CUSTOMER_SERIVCE_HOURS } from '@utils/constants'

const LocationPage: NextPage = () => {
  return (
    <PageContainer>
      <Head>
        <title>Brígida Joias - Localização</title>
        <meta
          name="description"
          content={`Nossos serviços se encontram na cidade de Milagres no Ceará. Atendimento de ${CUSTOMER_SERIVCE_HOURS}`}
        />
        <meta
          name="keywords"
          content="brigida, brígida, joias, brigida joias, brígida joias, ouro, prata, romannel, joias de ouro, joias de prata, anel, anel de ouro, anel de prata, aliança, aliança de ouro, aliança de prata, colar, colar de ouro, colar de prata, pulseira, pulseira de ouro, pulseira de prata, brinco, brinco de ouro, brinco de prata, pingentes, pingentes de ouro, pingentes de prata, gargantilhas, gargantilhas de ouro, gargantilhas de prata, correntes, correntes de ouro, correntes de prata, acessórios, milagres, ceara, ceará"
        />
      </Head>
      <Header />
      <NavBar />
      <Slogan />
      <MapCard />
      <SocialNetworksDrawer />
      <Footer />
    </PageContainer>
  )
}

export default LocationPage
