import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootPage from "./Pages/rootpage";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<RootPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
