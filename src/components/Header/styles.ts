import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadow};
  z-index: 1;
`

const ItemContent = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: center;
`

export const LogoContent = styled(ItemContent)`
  @media screen and (max-width: 740px) {
    flex: 1;
  }
`

export const SloganContent = styled(ItemContent)`
  @media screen and (max-width: 970px) {
    display: none;
  }
`

export const SloganText = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 14px;
`

export const HeaderButton = styled.a`
  text-decoration: none;
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  transition: 200ms;
  :hover {
    background-color: ${({ theme }) => theme.colors.secundary};
  }
  :hover > span {
    color: #fff;
  }
  @media screen and (max-width: 740px) {
    display: none;
  }
`

export const HeaderButtonText = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 20px;
`

export const SearchContainer = styled.div`
  height: 30px;
  display: flex;
  flex: 1;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 4px;
  @media screen and (max-width: 740px) {
    display: none;
  }
`

export const SearchInput = styled.input`
  outline: none;
  border: none;
  width: 30px;
  height: 30px;
  display: flex;
  flex: 1;
  padding-left: 10px;
  background-color: transparent;
  border-radius: 4px;
  color: #333;
  font-size: 20px;
  ::placeholder {
    color: #777;
  }
`

export const SearchButton = styled.button`
  outline: none;
  border: none;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 4px;
  cursor: pointer;
`

export const CornerButton = styled.button`
  outline: none;
  border: none;
  width: 50px;
  height: 50px;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  @media screen and (max-width: 740px) {
    display: flex;
  }
`
