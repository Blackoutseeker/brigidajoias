import styled from 'styled-components'

export const SearchDrawerContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  flex-direction: column;
`

export const SearchDrawerHeader = styled.header`
  width: 100%;
  min-height: 50px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadow};
`

export const Button = styled.button`
  outline: none;
  border: none;
  min-width: 50px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
`

export const SearchInput = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 50px;
  background-color: transparent;
  padding-left: 20px;
  color: #333;
  font-size: 18px;
  ::placeholder {
    color: #777;
  }
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
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
