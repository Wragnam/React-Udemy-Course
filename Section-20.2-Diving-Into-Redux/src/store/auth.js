import { createSlice } from "@reduxjs/toolkit";

//Authentication State
const initialAuthenticationSlice = { isAuthenticated: false };
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
export default authSlice.reducer;
export const authActions = authSlice.actions;

