//global.css
import '../styles/globals.css';
//global.css

//redux
import { Provider } from 'react-redux';
import store from '../store';
//redux

//next/app
import type { AppProps } from 'next/app';
//next/app

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
