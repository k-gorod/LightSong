import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import React from 'react';

import store from '../redux'
import Modal from '../components/Modal';

import '../styles/index.scss'
import MenuButton from '../components/MenuButton';
import LoginButton from '../components/LoginButton';
import Sidebar from '../components/Sidebar';
import Head from 'next/head';


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
      <Provider store={store}>
        <Head>
          <title>Light Song</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/a pple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="icon" href="/favicon.ico"/>
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <Component {...pageProps} />
        <LoginButton />
        <MenuButton />
        <Sidebar />
        <Modal />
          
      </Provider>
  )
}

export default React.memo(MyApp);

