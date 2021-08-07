import { NextPage, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import PageContainer from '@components/PageContainer'
import Header from '@components/Header'
import NavBar from '@components/NavBar'
import Slogan from '@components/Slogan'
import FlexWrapContainer from '@components/FlexWrapContainer'
import ProductCard, { Product } from '@components/ProductCard'
import NoResult from '@components/NoResult'
import SocialNetworksDrawer from '@components/SocialNetworksDrawer'
import Footer from '@components/Footer'
import {
  getAllProductsFromDatabase,
  getProductsByTitle
} from '@database/products'

interface SearchPageProps {
  allProducts: Product[]
}

const SearchPage: NextPage<SearchPageProps> = ({ allProducts }) => {
  const { query } = useRouter()
  const searchedTitle = String(query.productTitle)

  const productsFilteredByTitle: Product[] = getProductsByTitle(
    allProducts,
    searchedTitle
  )

  const renderProductsCards = () =>
    productsFilteredByTitle.map((product: Product, index: number) => (
      <ProductCard
        key={index}
        title={product.title}
        price={product.price}
        imageUrl={product.imageUrl}
      />
    ))

  const haveProductsWithSearchedTitle = productsFilteredByTitle.length > 0

  return (
    <PageContainer>
      <Head>
        <title>
          Brígida Joias - Pesquisar por: &quot;{searchedTitle}&quot;
        </title>
      </Head>
      <Header />
      <NavBar />
      <Slogan />
      <FlexWrapContainer>
        {haveProductsWithSearchedTitle ? renderProductsCards() : <NoResult />}
      </FlexWrapContainer>
      <SocialNetworksDrawer />
      <Footer />
    </PageContainer>
  )
}

export const getStaticProps: GetStaticProps<SearchPageProps> = async () => {
  const allProducts: Product[] = await getAllProductsFromDatabase()

  return {
    props: {
      allProducts
    },
    revalidate: 120
  }
}

export default SearchPage
