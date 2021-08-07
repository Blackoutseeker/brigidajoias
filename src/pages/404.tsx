import { NextPage } from 'next'
import Head from 'next/head'
import PageContainer from '@components/PageContainer'
import Header from '@components/Header'
import NavBar from '@components/NavBar'
import Slogan from '@components/Slogan'
import FlexWrapContainer from '@components/FlexWrapContainer'
import NoResult from '@components/NoResult'
import SocialNetworksDrawer from '@components/SocialNetworksDrawer'
import Footer from '@components/Footer'

const Page404: NextPage = () => {
  return (
    <PageContainer>
      <Head>
        <title>Brígida Joias - Página não encontrada!</title>
      </Head>
      <Header />
      <NavBar />
      <Slogan />
      <FlexWrapContainer>
        <NoResult />
      </FlexWrapContainer>
      <SocialNetworksDrawer />
      <Footer />
    </PageContainer>
  )
}

export default Page404
