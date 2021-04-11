import React from "react";
import "./App.css";
import {GlobalProvider} from "./contextState/globalState";
import Child from "./Child";
function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Child />
      </div>
    </GlobalProvider>
  );
}

export default App;
