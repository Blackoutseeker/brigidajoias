import {
  NextPage,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPaths
} from 'next'
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
import { PRODUCTS_TYPES } from '@utils/constants'
import {
  getProductsByType,
  getAllProductsFromDatabase
} from '@database/products'

interface ProductsPageProps {
  productType: string
  products: Product[]
}

const ProductsPage: NextPage<ProductsPageProps> = ({
  productType,
  products
}) => {
  const renderProductsCards = () =>
    products?.map((product: Product, index: number) => (
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
        <title>Brígida Joias - {productType}</title>
        <meta
          name="description"
          content={`Procurando por ${productType?.toLowerCase()}? Nós temos aqui! Em ouro, prata e Rommanel! Oferecemos garantia PERMANENTE de todos os produtos! Aceitamos pagamentos com cartão, transferência bancária e Pix!`}
        />
        <meta
          name="keywords"
          content="brigida, brígida, joias, brigida joias, brígida joias, ouro, prata, romannel, joias de ouro, joias de prata, anel, anel de ouro, anel de prata, aliança, aliança de ouro, aliança de prata, colar, colar de ouro, colar de prata, pulseira, pulseira de ouro, pulseira de prata, brinco, brinco de ouro, brinco de prata, pingentes, pingentes de ouro, pingentes de prata, gargantilhas, gargantilhas de ouro, gargantilhas de prata, correntes, correntes de ouro, correntes de prata, acessórios, milagres, ceara, ceará"
        />
      </Head>
      <Header />
      <NavBar />
      <Slogan />
      <PageStatusBar productType={productType} />
      <FlexWrapContainer>{renderProductsCards()}</FlexWrapContainer>
      <SocialNetworksDrawer />
      <Footer />
    </PageContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { params: { productType: string } }[] = []

  PRODUCTS_TYPES.forEach(productType => {
    paths.push({
      params: {
        productType
      }
    })
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<ProductsPageProps> = async (
  context: GetStaticPropsContext
) => {
  const productType: string = context.params!.productType!.toString()
  const products: Product[] =
    productType === 'Todos'
      ? await getAllProductsFromDatabase()
      : await getProductsByType(productType)

  return {
    props: {
      productType,
      products
    },
    revalidate: 120
  }
}

export default ProductsPage
