import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import React from 'react';

import store from '../redux'
import Modal from '../components/Modal';

import '../styles/index.scss'
import Sidebar from '../components/Sidebar';
import Head from 'next/head';
import Header from '../components/Header';
import { LightSongLogoIcon } from '../icons';
import { CenterLogo } from '../components/CenterLogo';


const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
      <Provider store={store}>
        <Head>
          <title>Light Song</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png"/>
          <link rel="icon" href="/assets/favicon.ico"/>
          <link rel="manifest" href="/assets/site.webmanifest" />
          <link rel="mask-icon" href="/assets/safari-pinned-tab.svg" color="#000000" />
          <meta name="msapplication-TileColor" content="#000" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <Header />
        <Component {...pageProps} />
        <CenterLogo />
        {/* <LightSongLogoIcon /> */}
        <Sidebar />
        <Modal />
      </Provider>
  )
}

export default React.memo(MyApp);

