export const reducer = (state, action) => {
  console.log(state, action);
  switch (action) {
    case "INCREMENT":
      return  state + 1;
    case "DECREMENT":
      return state - 1;
    case "MULTIPLY":
      return state * 4;
    default:
      return state;
  }
};


