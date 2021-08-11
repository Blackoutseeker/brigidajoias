import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { AppProps } from 'next/app'
import GlobalStyle from '@styles/global'
import light from '@styles/themes/light'
import { ThemeProvider } from 'styled-components'
import * as gtag from 'lib/gtag'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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
