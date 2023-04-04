import React, { useEffect, useState } from "react";
import "./Category.scss";
import BeerIcon from "../../../Configs/icons/beer.svg";
import BurgerIcon from "../../../Configs/icons/burger.svg";
import DrinkIcon from "../../../Configs/icons/drink.svg";

function Category({ CategoryText, CategoryIcon }: any): JSX.Element {
  const baseClass = "Category";
  const [iconLink, setIconLink] = useState("default");

  useEffect(() => {
    if (CategoryIcon === "beer") {
      setIconLink(BeerIcon);
    }
    if (CategoryIcon === "burger") {
      setIconLink(BurgerIcon);
    }
    if (CategoryIcon === "drink") {
      setIconLink(DrinkIcon);
    }
  }, [CategoryIcon]);

  return (
    <>
      <div className={baseClass}>
        <img
          className={baseClass + "__Image"}
          src={iconLink}
          alt="Icon for Category"
        />
        <p className={baseClass + "__Text"}>{CategoryText}</p>
      </div>
    </>
  );
}

export default Category;
