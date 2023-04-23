import React from "react";
import Categories from "../Components/Categories/Categories";
import Header from "../Components/Header/Header";
import HeroSection from "../Components/HeroSection/HeroSection";
// import { useContentful } from "../contentful/setup-rest";
import "./rootpage.scss";
import Events from "../Components/Events/Events";
import { config } from "../Configs/config";

const RootPage: React.FC = () => {
  const baseClass = "RootPage";

  // const { loading, error }: any = useContentful();

  return (
    <section className={baseClass}>
      <Header />
      <HeroSection />
      {config.options.locationHasEventSlider && <Events />}
      <Categories />
    </section>
  );
};

export default RootPage;
