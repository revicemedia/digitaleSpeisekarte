import React from "react";
import { config } from "../../Configs/config";
import "./Categories.scss";
import Category from "./Category/Category";

function Categories(): JSX.Element {
  const baseClass = "Categories";

  return (
    <>
      <div className="Hidden-Wrapper">
        <div className={baseClass}>
          {config.locationCategories.map((item: any, index: any) => (
            <Category
              key={index}
              CategoryIcon={item.icon}
              CategoryText={item.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Categories;
