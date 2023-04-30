import React from "react";
import BackHeader from "../Components/Header-Back/Header";
import "./impressum.scss";
import { config } from "../Configs/config";
import Footer from "../Components/Footer/Footer";

const ImpressumPage: React.FC = () => {
  const baseClass = "ImpressumPage";

  return (
    <div className={baseClass}>
      <BackHeader />
      <div className={baseClass + "__Wrapper"}>
        <h3 className={baseClass + "__Wrapper__Headline"}>Impressum</h3>
        <p className={baseClass + "__Wrapper__Paragraph"}>
          {config.locationName}
        </p>
        <p className={baseClass + "__Wrapper__Paragraph"}>
          {config.locationStreet}
        </p>
        <p className={baseClass + "__Wrapper__Paragraph"}>
          {config.locationPLZ + " " + config.locationCity}
        </p>
      </div>
      <div className={baseClass + "__Wrapper"}>
        <h3 className={baseClass + "__Wrapper__Headline"}>Dienstleister</h3>
        <p className={baseClass + "__Wrapper__Paragraph"}>Revice Media</p>
        <p className={baseClass + "__Wrapper__Paragraph"}>
          Vertreter: Fabian Hanso
        </p>
        <p className={baseClass + "__Wrapper__Paragraph"}>Im Born 7a</p>
        <p className={baseClass + "__Wrapper__Paragraph"}>53572 Bruchhausen</p>
      </div>
      <div className={baseClass + "__Wrapper"}>
        <h3 className={baseClass + "__Wrapper__Headline"}>Haftung</h3>
        <p className={baseClass + "__Wrapper__Paragraph"}>
          Es wird keine Gewähr für die Richtigkeit, Vollständigkeit und
          Aktualität der Angaben übernommen. Links, Bilder und Texte werden
          gründlich überprüft, bevor Sie eingebunden werden, jedoch übernehmen
          wir für Fremdinhalte keine Haftung. <br />
          <br />
        </p>

        <p className={baseClass + "__Wrapper__Paragraph"}>
          Sämtliche Inhalte werden von {config.locationName} gepflegt und
          lediglich durch Revice Media zur Verfügung gestellt. Revice Media
          übernimmt keine Gewähr für die Richtigkeit sämtlicher vom Betreiber
          zur Verfügung gestellten Daten.
        </p>
      </div>
      <div className={baseClass + "__Wrapper"}>
        <h3 className={baseClass + "__Wrapper__Headline"}>Datenschutz</h3>
        <p className={baseClass + "__Wrapper__Paragraph"}>
          Wir versichern, dass weder durch Revice Media, noch durch{" "}
          {config.locationName} Personenbezogene Daten erhoben, gespeichert oder
          verarbeitet werden. Es werden keine Cookies verwendet und es besteht
          keine Anbindung zu einer Datenbank, welche Daten erhebt.
        </p>
      </div>
      <div className={baseClass + "__Wrapper"}>
        <a
          href={config.adminLink}
          className={baseClass + "__Wrapper__AdminLink"}
          target="_blank"
          rel="noreferrer"
        >
          Dashboard
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default ImpressumPage;
