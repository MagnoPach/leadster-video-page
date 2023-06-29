import "../../styles/globals.css";
import { VideosProvider } from "../Context/VideosContext.jsx";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <VideosProvider>
        <Component {...pageProps} />;
      </VideosProvider>
    </>
  );
}

export default MyApp;
