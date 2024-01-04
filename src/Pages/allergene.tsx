import React from "react";
import BackHeader from "../Components/Header-Back/Header";
import "./allergene.scss";
import { useContentful } from "../contentful/setup-rest";

const AllergenePage: React.FC = () => {
  const baseClass = "AllergenePage";

  const { allergene }: any = useContentful();

  return (
    <div className={baseClass}>
      <BackHeader />
      <div className={baseClass + "__Wrapper"}>
        <h3 className={baseClass + "__Wrapper__Headline"}>
          Allergene & Zusatzstoffe
        </h3>
        <div className={baseClass + "__Item-Wrapper"}>
          {allergene.map((item: any, index: any) => (
            <div className={baseClass + "__Item-Wrapper__Item"} key={index}>
              <div className={baseClass + "__Item-Wrapper__Item__grid"}>
                <p className={baseClass + "__Item-Wrapper__Item__Text"}>
                  {item.fields.nummerierung}
                </p>
                <h3
                  className={baseClass + "__Item-Wrapper__Item__Text__Headline"}
                >
                  {item.fields.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        {/* <p className={baseClass + "__Wrapper__Paragraph"}>
          {config.locationPLZ + " " + config.locationCity}
        </p> */}
      </div>
    </div>
  );
};

export default AllergenePage;
