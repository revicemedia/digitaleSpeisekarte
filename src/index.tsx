import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TasksContext } from "./Context/TaskContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <TasksContext.Provider value="Hallo TypeScript Welt!">
    <App />
  </TasksContext.Provider>
);
