import React, {createContext, useReducer} from "react";
import {reducer} from "./reducer";

const count = 10;
export const GlobalContext = createContext(count);

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, count);

  function increment() {
    console.log("this is increment")

    dispatch("INCREMENT");
  }
  function decrement() {
    dispatch("DECREMENT");
  }
  function multiply() {
    dispatch("MULTIPLY");
  }
  return (
    <GlobalContext.Provider
      value={{
        state,
        count,
        increment,
        decrement,
        multiply,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
