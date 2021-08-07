import styled from 'styled-components'

export const NavBarContainer = styled.div`
  position: sticky;
  top: 70px;
  margin: 20px 0;
  width: 80%;
  height: 45px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: ${({ theme }) => theme.shadow};
  z-index: 1;
  @media screen and (max-width: 740px) {
    display: none;
  }
`

export const NavContent = styled.a`
  text-decoration: none;
  height: 45px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secundary};
  padding: 0 15px;
  cursor: pointer;
  transition: 200ms;
  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  :hover > span {
    color: ${({ theme }) => theme.colors.accent};
  }
`

export const NavText = styled.span`
  color: #fff;
  font-size: 18px;
`
