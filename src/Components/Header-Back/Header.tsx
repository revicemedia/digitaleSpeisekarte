import React from "react";
import logo from "../../Configs/logo.svg";
import "./Header.scss";
import { Link } from "react-router-dom";

const BackHeader: React.FC = () => {
  const baseClass: string = "BackHeader";

  return (
    <div className={baseClass}>
      <img src={logo} alt="Logo" className={baseClass + "__logo"} />
      <div className={baseClass + "__InfoSection"}>
        <Link to="/" className={baseClass + "__InfoSection__InfoBadge"}>
          Zurück
        </Link>
      </div>
    </div>
  );
};

export default BackHeader;
