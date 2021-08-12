import { FC, memo } from 'react'
import Image from 'next/image'
import {
  CardContainer,
  ImageContent,
  ProductNameContent,
  ProductNameText,
  ProductPriceText
} from './styles'
import formatPriceToBrl from '@services/formatPrice'

export interface Product {
  title: string
  price: number | string
  imageUrl: string
}

const ProductCard: FC<Product> = props => {
  const { title, price, imageUrl } = props

  const handlePrice = (): string => {
    if (typeof price === 'number') {
      return formatPriceToBrl(price)
    } else {
      return price
    }
  }

  return (
    <CardContainer>
      <ImageContent>
        <Image
          src={imageUrl}
          alt={title}
          width={220}
          height={220}
          className={'next-image'}
        />
      </ImageContent>
      <ProductNameContent>
        <ProductNameText>{title}</ProductNameText>
      </ProductNameContent>
      <ProductPriceText>{handlePrice()}</ProductPriceText>
    </CardContainer>
  )
}

export default memo(ProductCard)
