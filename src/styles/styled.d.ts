import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secundary: string
      accent: string
      background: string
    }
    shadow: string
  }
}
