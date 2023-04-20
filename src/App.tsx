import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootPage from "./Pages/rootpage";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <MainProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<RootPage />} />
        </Routes>
      </BrowserRouter>
      {/* </MainProvider> */}
    </div>
  );
};

export default App;
