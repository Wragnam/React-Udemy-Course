const redux = require("redux");

//create reducer function
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

//create store
const store = redux.createStore(counterReducer);

//create subscriber function
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

//Subscribe to store
store.subscribe(counterSubscriber);

//Create and dispatch an action
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });