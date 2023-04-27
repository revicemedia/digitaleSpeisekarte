import { useEffect, useState } from "react";
import { config } from "../../Configs/config";
import { useContentful } from "../../contentful/setup-rest";
import "./Categories.scss";
import Category from "./Category/Category";
import Product from "./Product/Product";

function Categories(): JSX.Element {
  const baseClass = "Categories";

  const [activeTab, setActiveTab] = useState(1);
  const [filterList, setFilterList] = useState<any>([]);

  const { kategorien, produkte }: any = useContentful();

  const onTabClick = (tab: number) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    setFilterList(
      produkte.filter(
        (product: any) =>
          product.fields.kategorie.fields.sortierung === activeTab
      )
    );
  }, [activeTab, produkte]);

  return (
    <>
      <div className="Hidden-Wrapper">
        <>
          <h3 className={baseClass + "__Headline"}>
            {config.categoriesHeadline}
          </h3>
          {/* Kategorien */}
          <div className={baseClass}>
            {kategorien.map((item: any, index: any) => (
              <Category
                key={index}
                content={item}
                onTabClick={onTabClick}
                activeTab={activeTab}
              />
            ))}
          </div>
          <div className="Products">
            {filterList.map((item: any, index: any) => (
              <Product key={index} content={item} />
            ))}
          </div>
        </>
      </div>
    </>
  );
}

export default Categories;
