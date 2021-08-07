import styled from 'styled-components'

export const SloganContainer = styled.div`
  width: 100%;
  display: none;
  padding: 0 20px;
  padding-top: 10px;
  justify-content: flex-end;
  flex-direction: column;
  @media screen and (max-width: 740px) {
    display: flex;
  }
`

export const SloganText = styled.span`
  color: #333;
  font-size: 14px;
  font-weight: bold;
`
