import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui";

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
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending cart data ... ",
      })
    );

    const sendRequest = async () => {
      const resp = await fetch(
        "https://react-course-backend-18911-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!resp.ok) {
        throw new Error("Sending Cart Data failed!");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Cart data sent successfully",
        })
      );
    } catch (e) {
      sendCartData().catch((error) => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error",
            message: "Sending cart data failed -> " + error,
          })
        );
      });
    }
  };
};

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
