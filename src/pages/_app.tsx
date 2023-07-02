import GlobalStyle from "../../styles/globalStyle";
import { VideosProvider } from "../store/VideosContext";

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
