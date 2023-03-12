import React from "react";
import { useContext } from "react";
import { TasksContext } from "./Context/TaskContext";

export interface test {
  name: string;
  description: string;
}

const App: React.FC = () => {
  const Test = useContext(TasksContext);
  return (
    <div className="App">
      <h2>{Test}</h2>
    </div>
  );
};

export default App;
