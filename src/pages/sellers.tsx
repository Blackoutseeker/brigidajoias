import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import PageContainer from '@components/PageContainer'
import Header from '@components/Header'
import NavBar from '@components/NavBar'
import Slogan from '@components/Slogan'
import FlexWrapContainer from '@components/FlexWrapContainer'
import SellerCard, { Seller } from '@components/SellerCard'
import SocialNetworksDrawer from '@components/SocialNetworksDrawer'
import Footer from '@components/Footer'
import getSellersFromDatabase from '@database/sellers'

interface LocationPageProps {
  sellers: Seller[]
}

const LocationPage: NextPage<LocationPageProps> = ({ sellers }) => {
  const renderSellersCards = () =>
    sellers.map((seller: Seller, index: number) => (
      <SellerCard
        key={index}
        name={seller.name}
        imageUrl={seller.imageUrl}
        location={seller.location}
        instagram={seller.instagram}
        whatsApp={seller.whatsApp}
      />
    ))

  return (
    <PageContainer>
      <Head>
        <title>Brígida Joias - Vendedoras</title>
        <meta
          name="description"
          content="Contamos com nossa equipe de vendedoras para oferecer o melhor atendimento possível para nossos clientes!"
        />
        <meta
          name="keywords"
          content="brigida, brígida, joias, brigida joias, brígida joias, ouro, prata, romannel, joias de ouro, joias de prata, anel, anel de ouro, anel de prata, aliança, aliança de ouro, aliança de prata, colar, colar de ouro, colar de prata, pulseira, pulseira de ouro, pulseira de prata, brinco, brinco de ouro, brinco de prata, pingentes, pingentes de ouro, pingentes de prata, gargantilhas, gargantilhas de ouro, gargantilhas de prata, correntes, correntes de ouro, correntes de prata, acessórios, milagres, ceara, ceará, vendedoras"
        />
      </Head>
      <Header />
      <NavBar />
      <Slogan />
      <FlexWrapContainer>{renderSellersCards()}</FlexWrapContainer>
      <SocialNetworksDrawer />
      <Footer />
    </PageContainer>
  )
}

export const getStaticProps: GetStaticProps<LocationPageProps> = async () => {
  const sellers: Seller[] = await getSellersFromDatabase()

  return {
    props: {
      sellers
    },
    revalidate: 180
  }
}

export default LocationPage
