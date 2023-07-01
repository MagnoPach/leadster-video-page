import { useEffect, useState } from "react";
import CompareSection from "../components/Sections/CompareSection/CompareSection";
import Footer from "src/components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroSection from "../components/Sections/HeroSection/HeroSection";
import VideosSection from "../components/Sections/VideosSection/VideosSection";

import { handleDelay } from "../utils/util-methods";

export default function Home() {
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
    </>
  );
}
