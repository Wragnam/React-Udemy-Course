import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [], total: 0, changed: false };
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
      state.changed = true;
    },
    increase(state, action) {
      const existingCartItem = state.items.find(
        (item) => item.id === action.payload
      );

      existingCartItem.total += existingCartItem.price;
      existingCartItem.quantity += 1;
      state.total += 1;
      state.changed = true;
    },
    decrease(state, action) {
      const existingCartItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (existingCartItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        existingCartItem.quantity -= 1;
        existingCartItem.total -= existingCartItem.price;
      }
      state.total -= 1;
      state.changed = true;
    },
    setCart(state, action) {
      state.items = action.payload.items;
      state.total = action.payload.total;
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
