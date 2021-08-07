import { FC } from 'react'
import { SloganContainer, SloganText } from './styles'
import Divider from '@components/Divider'

const Slogan: FC = () => {
  return (
    <SloganContainer>
      <SloganText>OURO | PRATA | ROMMANEL</SloganText>
      <Divider height={15} color={'#FDD835'} />
    </SloganContainer>
  )
}

export default Slogan
