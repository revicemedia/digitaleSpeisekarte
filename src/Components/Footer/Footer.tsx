import React from "react";
import "./Footer.scss";
import { config } from "../../Configs/config";

const Footer: React.FC = () => {
  const baseClass = "Footer";

  return (
    <footer className={baseClass}>
      <p className={baseClass + "__Paragraph"}>© 2023 {config.locationName}</p>
    </footer>
  );
};

export default Footer;
