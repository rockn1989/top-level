import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import ym from 'react-yandex-metrika';
import { YMInitializer } from 'react-yandex-metrika';

Router.events.on('routeChangeComplete', (url: string) => {
  if (typeof window !== 'undefined') {
    ym('hit', url);
  }
});

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {

  return (
    <>
      <Head>
        <title>My-Top лучший Top</title>
        <link key={1} rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <meta property='og:url' content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
        <meta property='og:locale' content="ru_RU" />
      </Head>
      <YMInitializer
        accounts={[]}
        options={{ webvisor: true, defer: true }}
        version="2"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
