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
  price: number
  imageUrl: string
}

const ProductCard: FC<Product> = props => {
  const { title, price, imageUrl } = props
  const formattedPrice = formatPriceToBrl(price)

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
      <ProductPriceText>{formattedPrice}</ProductPriceText>
    </CardContainer>
  )
}

export default memo(ProductCard)
