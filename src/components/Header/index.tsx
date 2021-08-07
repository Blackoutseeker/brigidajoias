import { FC, useState, useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import {
  HeaderContainer,
  LogoContent,
  SloganContent,
  SloganText,
  HeaderButton,
  HeaderButtonText,
  SearchContainer,
  SearchInput,
  SearchButton,
  CornerButton
} from './styles'
import LogoYellow from '@assets/images/logo_yellow.svg'
import SearchGreyIcon from '@assets/icons/search_grey.svg'
import SearchWhiteIcon from '@assets/icons/search_white.svg'
import DrawerIcon from '@assets/icons/drawer.svg'
import { PAGE_ROUTES } from '@utils/constants'
import { getAllProductsFromDatabase } from '@database/products'
import { Product } from '@components/ProductCard'
const Drawer = dynamic(() => import('@components/Drawer'))
const SearchDrawer = dynamic(() => import('@components/SearchDrawer'))

const Header: FC = () => {
  const router = useRouter()
  const [searchInputValue, setSearchInputValue] = useState<string>('')
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
  const [searchDrawerOpen, setSearchDrawerOpen] = useState<boolean>(false)
  const [allProducts, setAllProducts] = useState<Product[]>([])
  const locationPageRoute = PAGE_ROUTES.LOCATION
  const sellersPageRoute = PAGE_ROUTES.SELLERS
  const searchPageRoute = PAGE_ROUTES.SEARCH
  const productsTitles: string[] = allProducts.map(product => product.title)

  const openDrawer = () => {
    setDrawerOpen(true)
  }

  const openSearchDrawer = () => {
    setSearchDrawerOpen(true)
  }

  const searchByProductTitle = useCallback(
    (closeSearchDrawer?: () => void) => {
      const searchInputValueIsNotEmpty = searchInputValue.length > 0
      if (searchInputValueIsNotEmpty) {
        const productTitle = searchInputValue
        router.push({
          pathname: searchPageRoute,
          query: {
            productTitle
          }
        })
        if (closeSearchDrawer) {
          closeSearchDrawer()
        }
      }
    },
    [router, searchInputValue, searchPageRoute]
  )

  const handleEnterKeyDown = (key: string, closeSearchDrawer?: () => void) => {
    if (key === 'Enter') {
      searchByProductTitle(closeSearchDrawer)
    }
  }

  const getProducts = async () => {
    const products = await getAllProductsFromDatabase()
    setAllProducts(products)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <HeaderContainer>
        <CornerButton onClick={openDrawer}>
          <Image src={DrawerIcon} alt={'Menu'} />
        </CornerButton>
        <LogoContent>
          <Image src={LogoYellow} alt="Brígida Joias" />
        </LogoContent>
        <CornerButton onClick={openSearchDrawer}>
          <Image src={SearchWhiteIcon} alt={'Pesquisar'} />
        </CornerButton>
        <SloganContent>
          <SloganText>OURO | PRATA | ROMMANEL</SloganText>
        </SloganContent>
        <SearchContainer>
          <SearchInput
            value={searchInputValue}
            onChange={({ target }) => setSearchInputValue(target.value)}
            onKeyDown={({ key }) => handleEnterKeyDown(key)}
            placeholder={'Pesquise por produtos'}
          />
          <SearchButton
            onClick={() => {
              searchByProductTitle()
            }}
            title={'Pesquisar'}
          >
            <Image src={SearchGreyIcon} alt="Pesquisar" />
          </SearchButton>
        </SearchContainer>
        <Link href={locationPageRoute} passHref>
          <HeaderButton>
            <HeaderButtonText>Localização</HeaderButtonText>
          </HeaderButton>
        </Link>
        <Link href={sellersPageRoute} passHref shallow>
          <HeaderButton>
            <HeaderButtonText>Vendedoras</HeaderButtonText>
          </HeaderButton>
        </Link>
      </HeaderContainer>

      <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <SearchDrawer
        searchDrawerOpen={searchDrawerOpen}
        setSearchDrawerOpen={setSearchDrawerOpen}
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
        handleEnterKeyDown={handleEnterKeyDown}
        productsTitles={productsTitles}
      />
    </>
  )
}

export default Header
