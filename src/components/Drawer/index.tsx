import { FC, useCallback, memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  DrawerContainer,
  DrawerHeader,
  CloseButton,
  LogoContent,
  ItemContent,
  ItemText
} from './styles'
import ListContainer from '@components/ListContainer'
import Divider from '@components/Divider'
import CloseIcon from '@assets/icons/close.svg'
import LogoBlack from '@assets/images/logo_black.svg'
import { PAGE_ROUTES, PRODUCTS_TYPES } from '@utils/constants'

interface DrawerProps {
  drawerOpen: boolean
  setDrawerOpen: (value: boolean) => void
}

const Drawer: FC<DrawerProps> = props => {
  const { drawerOpen, setDrawerOpen } = props
  const isOpen = drawerOpen
  const productsTypes: string[] = PRODUCTS_TYPES
  const locationPageRoute = PAGE_ROUTES.LOCATION
  const sellersPageRoute = PAGE_ROUTES.SELLERS
  const productsPageRoute = PAGE_ROUTES.PRODUCTS

  const closeDrawer = useCallback(() => setDrawerOpen(false), [setDrawerOpen])

  const renderProductsTypes = () =>
    productsTypes.map((type: string, index: number) => (
      <Link key={index} href={`${productsPageRoute}/${type}`} passHref>
        <ItemContent onClick={closeDrawer}>
          <ItemText>{type}</ItemText>
        </ItemContent>
      </Link>
    ))

  return (
    <DrawerContainer className={isOpen ? 'opened' : 'closed'}>
      <DrawerHeader>
        <CloseButton onClick={closeDrawer}>
          <Image src={CloseIcon} alt={'Fechar'} />
        </CloseButton>
        <LogoContent>
          <Image src={LogoBlack} alt={'Brígida Joias'} />
        </LogoContent>
        <CloseButton />
      </DrawerHeader>
      <ListContainer>
        {renderProductsTypes()}
        <Divider width={'100%'} height={25} />
        <Link href={sellersPageRoute} passHref shallow>
          <ItemContent>
            <ItemText>Vendedoras</ItemText>
          </ItemContent>
        </Link>
        <Divider width={'100%'} height={25} />
        <Link href={locationPageRoute} passHref>
          <ItemContent>
            <ItemText>Localização</ItemText>
          </ItemContent>
        </Link>
      </ListContainer>
    </DrawerContainer>
  )
}

export default memo(Drawer)
