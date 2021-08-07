import { FC } from 'react'
import { DividerWrapper, DividerLine } from './styles'

interface Styles {
  width?: string
  height?: number
  marginHorizontal?: number
  color?: string
}

const Divider: FC<Styles> = props => {
  let { width, height, marginHorizontal, color } = props

  width = width || '100%'
  height = height || 1
  marginHorizontal = marginHorizontal || 0
  color = color || 'rgba(0, 0, 0, 0.2)'

  return (
    <DividerWrapper
      width={width}
      height={height}
      marginHorizontal={marginHorizontal}
    >
      <DividerLine color={color} />
    </DividerWrapper>
  )
}

export default Divider
