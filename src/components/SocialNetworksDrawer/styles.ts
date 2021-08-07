import styled from 'styled-components'

export const SocialNetworksDrawerContainer = styled.div`
  position: fixed;
  top: 50%;
  right: 0;
  width: 70px;
  height: 140px;
  display: block;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  transform: translateY(-50%);
  @media screen and (max-width: 740px) {
    display: none;
  }
`

interface Styles {
  width: number
}

export const ItemContent = styled.a`
  text-decoration: none;
  position: relative;
  right: 0;
  width: 280px;
  height: 70px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: 200ms;
  :hover {
    right: ${(styles: Styles) => styles.width}px;
  }
  :hover > span {
    color: ${({ theme }) => theme.colors.accent};
  }
`

export const ItemIconContent = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ItemText = styled.span`
  color: transparent;
  font-size: 20px;
  transition: 400ms;
`
