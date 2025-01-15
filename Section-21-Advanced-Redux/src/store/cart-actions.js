import { cartActions } from "./cart";
import { uiActions } from "./ui";

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
          body: JSON.stringify({ items: cart.items, total: cart.total }),
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

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const resp = await fetch(
        "https://react-course-backend-18911-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      if (!resp.ok) {
        throw new Error("Failed to fetch cart data!");
      }

      const cartData = await resp.json();

      return cartData;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.setCart({
          items: cartData.items || [],
          total: cartData.total,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching cart data failed -> " + error,
        })
      );
      return;
    }
  };
};
