import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [] };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingCartItemIndex !== -1) {
        state.items[existingCartItemIndex].quantity += 1;
        state.items[existingCartItemIndex].total += action.payload.price;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          total: action.payload.price,
        });
      }
    },
    increase(state, action) {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      const item = state.items[existingCartItemIndex];
      state.items[existingCartItemIndex].total += item.price;
      state.items[existingCartItemIndex].quantity += 1;
    },
    decrease(state, action) {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      const item = state.items[existingCartItemIndex];

      if (item.quantity === 1) {
        state.items.splice(existingCartItemIndex, 1);
      } else {
        state.items[existingCartItemIndex].quantity -= 1;
        state.items[existingCartItemIndex].total -= item.price;
      }
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
