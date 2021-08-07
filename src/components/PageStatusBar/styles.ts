import styled from 'styled-components'

export const StatusContainer = styled.div`
  width: calc(100% - 40px);
  height: 30px;
  padding: 0 20px;
  margin: 10px;
  display: none;
  align-items: center;
  background-color: #d9d9d9;
  border-radius: 4px;
  @media screen and (max-width: 740px) {
    display: flex;
  }
`

export const StatusText = styled.span`
  color: #555;
  font-size: 14px;
  font-weight: bold;
`
