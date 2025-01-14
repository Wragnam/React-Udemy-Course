import MainHeader from "./MainHeader";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import { useEffect } from "react";

const Layout = () => {
  const isShowCart = useSelector((state) => state.ui.isShowCart);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch(
      "https://react-course-backend-18911-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
      }
    );
  }, [cart]);

  return (
    <>
      <MainHeader />
      <main>{isShowCart && <Cart />}</main>
    </>
  );
};

export default Layout;
