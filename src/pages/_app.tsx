import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [authUser, setAuth] = useState<boolean>(false);

  return <Component {...pageProps} />

}
