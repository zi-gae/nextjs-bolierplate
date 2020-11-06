import React from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const {
      __NEXT_DATA__: { buildId },
    } = this.props
    return (
      <Html>
        <Head>
          <script src={`/_next/static/${buildId}/libs.js`} />
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
