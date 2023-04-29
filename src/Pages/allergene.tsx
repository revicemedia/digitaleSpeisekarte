import React from "react";
import BackHeader from "../Components/Header-Back/Header";
import "./allergene.scss";

const AllergenePage: React.FC = () => {
  const baseClass = "AllergenePage";

  return (
    <div className={baseClass}>
      <BackHeader />
    </div>
  );
};

export default AllergenePage;
