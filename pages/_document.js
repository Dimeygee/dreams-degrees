import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preload" href="/fonts/fellix.ttf"  as="font" crossOrigin="true"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
