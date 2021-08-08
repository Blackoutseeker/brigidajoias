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
          content="brigida, brígida, joias, brigida joias, brígida joias, ouro, prata, romannel, anel, aliança, colar, pulseira, brinco, pingentes, gargantilhas, correntes, acessórios, milagres, ceara, ceará"
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
