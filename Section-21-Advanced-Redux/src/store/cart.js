import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [], total: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const existingCartItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingCartItem) {
        existingCartItem.quantity += 1;
        existingCartItem.total += action.payload.price;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          total: action.payload.price,
        });
      }
      state.total += 1;
    },
    increase(state, action) {
      const existingCartItem = state.items.find(
        (item) => item.id === action.payload
      );

      existingCartItem.total += existingCartItem.price;
      existingCartItem.quantity += 1;
      state.total += 1;
    },
    decrease(state, action) {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      const item = state.items[existingCartItemIndex];

      if (item.quantity === 1) {
        state.items.splice(existingCartItemIndex, 1);
      } else {
        item.quantity -= 1;
        item.total -= item.price;
      }
      state.total -= 1;
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
