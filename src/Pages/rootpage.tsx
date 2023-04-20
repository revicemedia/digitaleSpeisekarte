import React from "react";
import Categories from "../Components/Categories/Categories";
import Header from "../Components/Header/Header";
// import HeroSection from "../Components/HeroSection/HeroSection";
import { useContentful } from "../contentful/setup-rest";
import "./rootpage.scss";

const RootPage: React.FC = () => {
  const baseClass = "RootPage";

  useContentful();

  return (
    <section className={baseClass}>
      <Header />
      {/* <HeroSection /> */}
      <Categories />
    </section>
  );
};

export default RootPage;
