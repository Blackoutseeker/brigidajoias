import { FC } from 'react'
import { NoResultContainer, NoResultText } from './styles'

const NoResult: FC = () => {
  return (
    <NoResultContainer>
      <NoResultText>Nenhum resultado foi encontrado</NoResultText>
    </NoResultContainer>
  )
}

export default NoResult
