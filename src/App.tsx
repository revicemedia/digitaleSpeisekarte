import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Elements from "./Components/Elements/Elements";
import { MainProvider } from "./Context/AllContext";
import RootPage from "./Pages/rootpage";

const App: React.FC = () => {
  return (
    <div className="App">
      <MainProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<RootPage />} />
            <Route path="/allergene" element={<Elements />} />
          </Routes>
        </BrowserRouter>
      </MainProvider>
    </div>
  );
};

export default App;
