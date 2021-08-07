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
        <title>Brígida Joias - Confira todos os nossos produtos!</title>
        <meta
          name="description"
          content="Confira todas as nossas joias de alta qualidade, anéis, alianças, colares, pulseiras, brincos e muito mais! Temos joias de ouro, prata e Rommanel! Oferecemos garantia PERMANENTE de todos os produtos! Aceitamos pagamentos com cartão, transferência bancária e Pix!"
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
