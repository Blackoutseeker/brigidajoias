import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { GA_TRACKING_ID } from 'lib/gtag'

export default class MyDocument extends Document {
  static async getInitialProps(
    context: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = context.renderPage

    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(context)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link
            rel="stylesheet prefetch"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            type="text/css"
            as="style"
          />
          <link rel="icon" href="/Logo.png" />
          <meta name="author" content="Felipe Pereira de Souza Silva" />
          <meta name="theme-color" content="#000" />
          <meta
            property="og:image"
            content="https://raw.githubusercontent.com/Blackoutseeker/brigidajoias/main/src/assets/images/Logo.png"
          />
          <meta
            property="og:image:secure_url"
            content="https://raw.githubusercontent.com/Blackoutseeker/brigidajoias/main/src/assets/images/Logo.png"
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="80" />
          <meta property="og:image:height" content="80" />
          <meta property="og:image:alt" content="Brígida Joias" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
