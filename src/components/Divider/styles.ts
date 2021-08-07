import styled from 'styled-components'

interface Styles {
  width?: string
  height?: number
  marginHorizontal?: number
  color?: string
}

export const DividerWrapper = styled.div`
  width: ${(styles: Styles) => styles.width};
  height: ${(styles: Styles) => styles.height}px;
  display: flex;
  align-items: center;
  margin: 0 ${(styles: Styles) => styles.marginHorizontal}px;
`

export const DividerLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(styles: Styles) => styles.color};
`
