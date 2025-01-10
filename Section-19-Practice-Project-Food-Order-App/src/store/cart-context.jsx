import { useReducer } from "react";
import { createContext } from "react";

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.cartItems];

    const existingCartItemIdx = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload.id
    );

    const existingCartItem = updatedItems[existingCartItemIdx];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIdx] = updatedItem;
    } else {
      updatedItems.push({
        ...action.payload,
        quantity: 1,
      });
    }

    return {
      ...state,
      cartItems: updatedItems,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const updatedItems = [...state.cartItems];

    const existingCartItemIdx = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload.id
    );

    const existingCartItem = updatedItems[existingCartItemIdx];

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIdx, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIdx] = updatedItem;
    }

    return {
      ...state,
      cartItems: updatedItems,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cartItems: [],
    };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(cartReducer, {
    cartItems: [],
  });

  function handleAddItemToCart(item) {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: item,
    });
  }

  function handleRemoveFromCart(item) {
    shoppingCartDispatch({
      type: "REMOVE_ITEM",
      payload: item,
    });
  }

  function handleClearCart() {
    shoppingCartDispatch({
      type: "CLEAR_CART",
    });
  }

  const ctx = {
    cartItems: shoppingCartState.cartItems,
    addToCart: handleAddItemToCart,
    removeFromCart: handleRemoveFromCart,
    clearCart: handleClearCart,
  };

  return <CartContext value={ctx}>{children}</CartContext>;
}
