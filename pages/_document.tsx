import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
    <Html lang='fr'>
      <Head />
      <body>
        <Main />
        <div id="notification">
          
        </div>
        <NextScript />
      </body>
    </Html>
    )
  }
}
