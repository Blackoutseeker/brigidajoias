import { FC } from 'react'
import Link from 'next/link'
import { NavBarContainer, NavContent, NavText } from './styles'
import { PAGE_ROUTES, PRODUCTS_TYPES } from '@utils/constants'

const NavBar: FC = () => {
  const productsPageRoute = PAGE_ROUTES.PRODUCTS
  const productsTypes: string[] = PRODUCTS_TYPES

  const renderProductsTypes = () =>
    productsTypes.map((type: string, index: number) => (
      <Link key={index} href={`${productsPageRoute}/${type}`} passHref>
        <NavContent>
          <NavText>{type}</NavText>
        </NavContent>
      </Link>
    ))

  return <NavBarContainer>{renderProductsTypes()}</NavBarContainer>
}

export default NavBar
