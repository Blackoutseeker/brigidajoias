import { FC } from 'react'
import { StatusContainer, StatusText } from './styles'

interface PageStatusBarProps {
  productType?: string
}

const PageStatusBar: FC<PageStatusBarProps> = ({ productType }) => {
  const status: string = productType ?? 'Todos'

  return (
    <StatusContainer>
      <StatusText>{'Produtos > ' + status}</StatusText>
    </StatusContainer>
  )
}

export default PageStatusBar
