import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import React from 'react';

import store from '../redux'
import Modal from '../components/Modal';

import '../styles/index.scss'
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { CenterLogo } from '../components/CenterLogo';
import { useScreeTypeDetection } from '../hooks';
import { MainHead } from '../components/MainHead';


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
      <Provider store={store}>
        <MainHead />
        {/* <video 
            autoPlay 
            src={'assets/IMG_1720.mp4'} 
            muted 
            loop     
        /> */}
        <Header />
        <Component {...pageProps} />
        <CenterLogo />
        <Sidebar />
        <Modal />
      </Provider>
  )
}

export default React.memo(MyApp);

