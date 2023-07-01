import GlobalStyle from '../../styles/globalStyle';
import { VideosProvider } from '../Context/VideosContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <VideosProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </VideosProvider>
    </>
  );
}

export default MyApp;
