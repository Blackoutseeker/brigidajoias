import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  margin: 15px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadow};
`

export const ImageContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .next-image {
    border-radius: 4px;
  }
`

export const ProductNameContent = styled.div`
  width: 220px;
  height: 30px;
  display: flex;
  flex: 1;
  margin: 20px 0;
`

export const ProductNameText = styled.span`
  color: #555;
  font-size: 20px;
  font-weight: bold;
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const ProductPriceText = styled.span`
  width: 100%;
  color: #333;
  font-size: 22px;
  font-weight: bold;
`
