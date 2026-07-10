import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootPage from "./Pages/rootpage";
import ImpressumPage from "./Pages/impressum";
import AllergenePage from "./Pages/allergene";
import MaintenancePage from "./Pages/maintenance";

const MAINTENANCE_MODE = true;

const App: React.FC = () => {
  if (MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<RootPage />} />
          <Route path="/allergene" element={<AllergenePage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
