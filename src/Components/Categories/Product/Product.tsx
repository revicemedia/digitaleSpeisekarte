import React from "react";
import "./Product.scss";

function Product({ content }: any): JSX.Element {
  const baseClass = "Product";

  console.log(content);

  return (
    <>
      <div className={baseClass}>
        <p className={baseClass + "__Text"}>{content.fields.name}</p>
        <p className={baseClass + "__Text"}>{content.fields.preis}</p>
        <p className={baseClass + "__Text"}>{content.fields.beschreibung}</p>
        {content.fields.allergene &&
          content.fields.allergene.map((item: any, index: number) => (
            <p key={index}>{item.fields.nummerierung}</p>
          ))}
      </div>
    </>
  );
}

export default Product;
