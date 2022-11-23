import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import React from 'react';

import store from '../redux'
import Modal from '../components/Modal';


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
      <Provider store={store}>
        <Component {...pageProps} />
        <Modal />
      </Provider>
  )
}

export default React.memo(MyApp);

