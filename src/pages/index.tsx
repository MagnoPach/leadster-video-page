import { useContext, useEffect, useState } from "react";
import CompareSection from "../components/Sections/CompareSection/CompareSection";
import Footer from "src/components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroSection from "../components/Sections/HeroSection/HeroSection";
import VideoModal from "src/components/VideoModal/VideoModal";
import VideosSection from "../components/Sections/VideosSection/VideosSection";

import { VideosContext } from "src/Context/VideosContext";
import { handleDelay } from "../utils/util-methods";

export default function Home() {
  const { seletedVideoData } = useContext(VideosContext);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    handleLoade();
  }, []);

  async function handleLoade() {
    await handleDelay(300);
    setLoaded(true);
  }
  if (!loaded) return null;

  return (
    <>
      <Header />
      <HeroSection />
      <VideosSection />
      <CompareSection />
      <Footer />
      {seletedVideoData !== null && <VideoModal />}
    </>
  );
}
