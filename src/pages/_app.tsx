import { FC } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import GlobalStyle from '@styles/global'
import light from '@styles/themes/light'
import { ThemeProvider } from 'styled-components'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={light}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
