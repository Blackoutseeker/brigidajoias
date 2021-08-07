import styled from 'styled-components'

export const SellerCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadow};
`

export const NameText = styled.span`
  width: 100%;
  color: #555;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
`

export const FlexWrapContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

export const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  .next-image {
    border-radius: 4px;
  }
  @media screen and (max-width: 492px) {
    width: 100%;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ItemContent = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`

export const ItemIconContent = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ItemText = styled.span`
  color: #777;
  font-size: 16px;
  font-weight: bold;
`
