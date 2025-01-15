import MainHeader from "./MainHeader";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import { useEffect } from "react";
import { uiActions } from "../../store/ui";
import Notification from "../UI/Notification";

let isInitial = true;

const Layout = () => {
  const isShowCart = useSelector((state) => state.ui.isShowCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  const dispatch = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending",
          message: "Sending cart data ... ",
        })
      );
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

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Cart data sent successfully",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed -> " + error,
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      <MainHeader />
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <main>{isShowCart && <Cart />}</main>
    </>
  );
};

export default Layout;
