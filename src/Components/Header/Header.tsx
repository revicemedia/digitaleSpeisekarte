import React from "react";
import logo from "../../Configs/logo.svg";
import "./Header.scss";
import help from "../../images/help.svg";
import info from "../../images/info.svg";

const Header: React.FC = () => {
  const baseClass: string = "Header";

  return (
    <div className={baseClass}>
      <img src={logo} alt="Logo" className={baseClass + "__logo"} />
      <div className={baseClass + "__InfoSection"}>
        <div className={baseClass + "__InfoSection__InfoBadge"}>
          <img
            src={help}
            alt="Hilfe"
            className={baseClass + "__InfoSection__InfoBadge__Image"}
          />
        </div>
        <div className={baseClass + "__InfoSection__InfoBadge"}>
          <img
            src={info}
            alt="Informationen"
            className={baseClass + "__InfoSection__InfoBadge__Image"}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
