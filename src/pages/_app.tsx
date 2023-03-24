import '@/styles/globals.css'
import { BrowserRouter } from "react-router-dom";
import type { AppProps } from 'next/app'
import MainHeader from '@/Header/MainHeader';

export default function App({ Component, pageProps }: AppProps) {
  return <div>
    {/* <MainHeader /> */}
    <Component {...pageProps} />
    </div>
}
