import styled from 'styled-components'

const FlexWrapContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px 0;
  @media screen and (max-width: 740px) {
    padding-top: 0;
  }
  @media screen and (max-width: 780px) {
    width: 100%;
  }
`

export default FlexWrapContainer
