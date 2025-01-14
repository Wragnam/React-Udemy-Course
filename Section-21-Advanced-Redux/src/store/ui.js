import { createSlice } from "@reduxjs/toolkit";

const initialUIState = { isShowCart: false};
const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    toggleCart(state) {
      state.isShowCart = !state.isShowCart;
    }
  },
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
