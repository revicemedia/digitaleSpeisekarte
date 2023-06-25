import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootPage from "./Pages/rootpage";
import ImpressumPage from "./Pages/impressum";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<RootPage />} />
          {/* <Route path="/allergene" element={<AllergenePage />} /> */}
          <Route path="/impressum" element={<ImpressumPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
