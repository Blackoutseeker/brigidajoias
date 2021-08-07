import styled from 'styled-components'

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .opened {
    display: flex;
    z-index: 2;
  }
  .closed {
    display: none;
    z-index: -2;
  }
`

export default PageContainer
