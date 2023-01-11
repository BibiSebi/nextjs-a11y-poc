import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react';


// Determines if we are running on server or in client.
const isServerSideRendered = () => {
  return typeof window === 'undefined';
};

/**
 * Accessibility tool - outputs to devtools console on dev only and client-side only.
 * @see https://github.com/dequelabs/axe-core-npm
 */
if (process.env.NODE_ENV !== 'production' && !isServerSideRendered()) {
  import('react-dom').then((ReactDOM) => {
      import('@axe-core/react').then((axe) => {
          axe.default(React, ReactDOM, 1000, {});
      });
  });
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
