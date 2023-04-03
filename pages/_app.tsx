import { AppProps } from 'next/app';
import GlobalStyle from '@src/theme/GlobalStyle';
import ThemeProvider from '@src/theme/ThemeProvider';
import '@src/styles/fineAdjust.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
