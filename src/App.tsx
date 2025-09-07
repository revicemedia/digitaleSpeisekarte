import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootPage from "./Pages/rootpage";
import ImpressumPage from "./Pages/impressum";
import AllergenePage from "./Pages/allergene";
import "./index.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="maintenance-wrapper">
        <h2 className="maintenance-headline">
          Diese Seite ist vorübergehend offline!
        </h2>
        <p className="maintenance-text">
          Bitte wenden Sie sich <b>schnellstmöglich</b> an Ihren
          Ansprechpartner!
        </p>
      </div>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/*" element={<RootPage />} />
          <Route path="/allergene" element={<AllergenePage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default App;
