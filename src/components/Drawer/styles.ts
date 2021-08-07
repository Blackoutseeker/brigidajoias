import styled from 'styled-components'

export const DrawerContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  flex-direction: column;
`

export const DrawerHeader = styled.header`
  width: 100%;
  min-height: 50px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadow};
`

export const CloseButton = styled.button`
  outline: none;
  border: none;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
`

export const LogoContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const ItemContent = styled.a`
  text-decoration: none;
  width: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
`

export const ItemText = styled.span`
  color: #777;
  font-size: 20px;
  font-weight: bold;
`
