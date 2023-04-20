import React from "react";
import "./Category.scss";

function Category({ content, onTabClick, activeTab }: any): JSX.Element {
  const baseClass = "Category";

  return (
    <>
      <button
        className={
          activeTab === content.fields.sortierung
            ? "Category-Active"
            : baseClass
        }
        onClick={() => onTabClick(content.fields.sortierung)}
      >
        <img
          className={
            activeTab === content.fields.sortierung
              ? "Category-Active__Image"
              : baseClass + "__Image"
          }
          src={content.fields.icon.fields.file.url}
          alt={content.fields.icon.fields.description}
        />
        <p className={baseClass + "__Text"}>{content.fields.name}</p>
      </button>
    </>
  );
}

export default Category;
