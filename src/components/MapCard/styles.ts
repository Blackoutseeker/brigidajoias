import styled from 'styled-components'

export const MapCardContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadow};
`

export const GoogleMapContainer = styled.div`
  width: 100%;
  height: 350px;
  margin: 10px 0px;
`

export const ItemContent = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
`

export const ItemText = styled.span`
  color: #555;
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`

export const CustomerServiceText = styled.span`
  color: #777;
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
`
