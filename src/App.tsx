import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootPage from "./Pages/rootpage";
import ImpressumPage from "./Pages/impressum";
import AllergenePage from "./Pages/allergene";
import block from "./images/block.svg";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/*" element={<RootPage />} />
          <Route path="/allergene" element={<AllergenePage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
        </Routes>
      </BrowserRouter> */}
      <div className="blocked">
        <img src={block} alt="Acces blocked" className="blockimage" />
        <h2>Diese Seite wurde gesperrt</h2>
        <p className="blockedtext">
          Bitte wenden Sie sich zur Entsperrung an Ihren Ansprechpartner!
        </p>
      </div>
    </div>
  );
};

export default App;
