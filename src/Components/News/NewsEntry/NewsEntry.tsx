import React from "react";
import "./NewsEntry.scss";

function NewsEntry({ content }: any): JSX.Element {
  const baseClass = "NewsEntry";

  return (
    <div className={baseClass}>
      <img
        className={baseClass + "__Image"}
        src={content.fields.bild.fields.file.url}
        alt={content.fields.bild.fields.description}
      />
      <div className={baseClass + "__Data-Wrapper"}>
        <>
          <h4 className={baseClass + "__Data-Wrapper__Headline"}>
            {content.fields.name}
          </h4>
          <p className={baseClass + "__Data-Wrapper__Text"}>
            {content.fields.details}
          </p>
        </>
      </div>
    </div>
  );
}

export default NewsEntry;
