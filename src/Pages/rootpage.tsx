import React, { useEffect, useState } from "react";
import Categories from "../Components/Categories/Categories";
import Header from "../Components/Header/Header";
import HeroSection from "../Components/HeroSection/HeroSection";
import "./rootpage.scss";
import { config } from "../Configs/config";
import Footer from "../Components/Footer/Footer";
import News from "../Components/News/News";

const RootPage: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const baseClass = "RootPage";

  // const { loading, error }: any = useContentful();

  const log = window.innerWidth;

  useEffect(() => {
    if (log >= 700) {
      setIsDesktop(true);
    }
  }, [log]);

  return (
    <>
      {isDesktop ? (
        <section>
          Bitte wähle ein mobiles Endgerät oder nutze deinen Portrait-Modus!
        </section>
      ) : (
        <section className={baseClass}>
          <Header />
          <HeroSection />
          {config.options.locationHasNewsSlider && <News />}
          <Categories />
          <Footer />
        </section>
      )}
    </>
  );
};

export default RootPage;
