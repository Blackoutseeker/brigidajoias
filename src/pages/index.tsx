import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import PageContainer from '@components/PageContainer'
import Header from '@components/Header'
import NavBar from '@components/NavBar'
import Slogan from '@components/Slogan'
import PageStatusBar from '@components/PageStatusBar'
import FlexWrapContainer from '@components/FlexWrapContainer'
import ProductCard, { Product } from '@components/ProductCard'
import SocialNetworksDrawer from '@components/SocialNetworksDrawer'
import Footer from '@components/Footer'
import { getAllProductsFromDatabase } from '@database/products'

interface HomePageProps {
  allProducts: Product[]
}

const HomePage: NextPage<HomePageProps> = ({ allProducts }) => {
  const renderProductsCards = () =>
    allProducts.map((product: Product, index: number) => (
      <ProductCard
        key={index}
        title={product.title}
        price={product.price}
        imageUrl={product.imageUrl}
      />
    ))

  return (
    <PageContainer>
      <Head>
        <title>Brígida Joias - Joias de ouro, prata e Rommanel</title>
        <meta
          name="description"
          content="Confira todas as nossas joias de alta qualidade, anéis, alianças, colares, pulseiras, brincos e muito mais! Temos joias de ouro, prata e Rommanel! Oferecemos garantia PERMANENTE de todos os produtos! Aceitamos pagamentos com cartão, transferência bancária e Pix!"
        />
        <meta
          name="keywords"
          content="brigida, brígida, joias, brigida joias, brígida joias, ouro, prata, romannel, joias de ouro, joias de prata, anel, anel de ouro, anel de prata, aliança, aliança de ouro, aliança de prata, colar, colar de ouro, colar de prata, pulseira, pulseira de ouro, pulseira de prata, brinco, brinco de ouro, brinco de prata, pingentes, pingentes de ouro, pingentes de prata, gargantilhas, gargantilhas de ouro, gargantilhas de prata, correntes, correntes de ouro, correntes de prata, acessórios, milagres, ceara, ceará"
        />
      </Head>
      <Header />
      <NavBar />
      <Slogan />
      <PageStatusBar />
      <FlexWrapContainer>{renderProductsCards()}</FlexWrapContainer>
      <SocialNetworksDrawer />
      <Footer />
    </PageContainer>
  )
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const allProducts: Product[] = await getAllProductsFromDatabase()

  return {
    props: {
      allProducts
    },
    revalidate: 120
  }
}

export default HomePage
