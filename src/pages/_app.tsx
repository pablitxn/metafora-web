import React, { FunctionComponent } from 'react';
import { AppProps } from 'next/app';
import './globals.css';

const SafeHydrate: FunctionComponent = ({ children }) => {
  return <div suppressHydrationWarning>{typeof window === 'undefined' ? null : children}</div>;
};

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <SafeHydrate>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </SafeHydrate>
  );
};

export default App;
