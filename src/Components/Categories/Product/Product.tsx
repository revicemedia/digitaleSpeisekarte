import React from "react";
import "./Product.scss";
import { Link } from "react-router-dom";

function Product({ content }: any): JSX.Element {
  const baseClass = "Product";

  return (
    <>
      <div className={baseClass}>
        <div className={baseClass + "__Top-Wrapper"}>
          <div className={baseClass + "__Top-Wrapper__HeadlineSize"}>
            <p className={baseClass + "__Text__Headline"}>
              {content.fields.name}
            </p>
            <p className={baseClass + "__Text"}>{content.fields.size}</p>
          </div>
          <p className={baseClass + "__Text__Headline"}>
            {content.fields.preis + "€"}
          </p>
        </div>
        <p className={baseClass + "__Text__Description"}>
          {content.fields.beschreibung}
          {content.fields.allergene &&
            content.fields.allergene.map((item: any, index: number) => (
              <Link
                to="/allergene"
                key={index}
                className={baseClass + "__Text__Allergene"}
              >
                {item.fields.nummerierung}
              </Link>
            ))}
        </p>
      </div>
    </>
  );
}

export default Product;
