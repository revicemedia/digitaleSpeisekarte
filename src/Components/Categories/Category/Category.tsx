import React from "react";
import "./Category.scss";

function Category({ content, onTabClick }: any): JSX.Element {
  const baseClass = "Category";

  return (
    <>
      <button
        className={baseClass}
        onClick={() => onTabClick(content.fields.sortierung)}
      >
        <img
          className={baseClass + "__Image"}
          src={content.fields.icon.fields.file.url}
          alt={content.fields.icon.fields.description}
        />
        <p className={baseClass + "__Text"}>{content.fields.name}</p>
      </button>
    </>
  );
}

export default Category;
