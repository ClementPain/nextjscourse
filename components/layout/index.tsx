import Head from 'next/head';
import React, { Fragment } from 'react';
import Header from './header';

function Layout({ children }: { children: React.ReactNode }) {
  return (
  <Fragment>
    <Head>
      <title>Portfolio</title>
      <meta name='description' content="This is a portfolio" />
      <meta
        name='viewport'
        content='initial-scale=1.0, width=device-width'
      />
    </Head>

    <Header />
    <main>
      { children }
    </main>
  </Fragment>
  )
}

export default Layout