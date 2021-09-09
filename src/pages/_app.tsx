import React, { FunctionComponent } from 'react';
import { AppProps } from 'next/app';
import './globals.css';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default App;
