import React, {useContext} from "react";
import "./App.css";
import {reducer} from "./contextState/reducer";
import {GlobalContext} from "./contextState/globalState";

function Child() {
  // cont [count , setCount] = useState(0);
  const {state, increment, decrement, multiply} = useContext(GlobalContext);

  return (
    <div className="App">
      This is Count : {state}
      <button
        onClick={() => {
          increment();
          console.log("Click Function");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          decrement();
          console.log("Click Function");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          multiply();
          console.log("Click Function");
        }}
      >
        *
      </button>
    </div>
  );
}

export default Child;
