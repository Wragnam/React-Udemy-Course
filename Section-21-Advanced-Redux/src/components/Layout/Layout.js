import MainHeader from "./MainHeader";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import { useEffect } from "react";
import Notification from "../UI/Notification";
import { fetchCartData, sendCartData } from "../../store/cart-actions";

let isInitial = true;

const Layout = () => {
  const isShowCart = useSelector((state) => state.ui.isShowCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [dispatch, cart]);

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
