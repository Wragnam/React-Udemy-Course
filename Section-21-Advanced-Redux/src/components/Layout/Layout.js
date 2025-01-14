import MainHeader from "./MainHeader";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";

const Layout = () => {
  const isShowCart = useSelector((state) => state.cart.isShowCart);

  return (
    <>
      <MainHeader />
      <main>{isShowCart && <Cart />}</main>
    </>
  );
};

export default Layout;
