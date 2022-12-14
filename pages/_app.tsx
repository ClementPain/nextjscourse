import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Layout>
    <Head>
      <meta name="viewport content="></meta>
    </Head>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
