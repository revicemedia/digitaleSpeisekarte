import React from "react";
import Categories from "../Components/Categories/Categories";
import Elements from "../Components/Elements/Elements";
import Header from "../Components/Header/Header";
import HeroSection from "../Components/HeroSection/HeroSection";
import "./rootpage.scss";

const RootPage: React.FC = () => {
  const baseClass = "RootPage";

  return (
    <section className={baseClass}>
      <Header />
      <HeroSection />
      <Categories />
      <Elements />
    </section>
  );
};

export default RootPage;
