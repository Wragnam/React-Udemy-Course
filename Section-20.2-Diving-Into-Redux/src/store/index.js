import { createSlice, configureStore } from "@reduxjs/toolkit";


//Counter State
const initialCounterState = { counter: 0, showCounter: true};
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload.value;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//Authentication State
const initialAuthenticationSlice = {isAuthenticated: false}
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthenticationSlice,
  reducers: {
    authenticate(state) {
      state.isAuthenticated = true;
    },
    unAuthenticate(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
