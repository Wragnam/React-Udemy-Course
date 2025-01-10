import { useContext } from "react";
import { useRef } from "react";
import { CartContext } from "../store/cart-context";
import Modal from "./CartModal";
import Cart from "./Cart";
import CheckoutModal from "./CheckoutModal";

export default function Header({ title, logo, buttonText }) {
  const cartModal = useRef();
  const checkoutModal = useRef();

  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const cartQuantity = cartItems.length || 0;

  function handleOpenCartClick() {
    cartModal.current.open();
  }

  function handleOpenCheckoutClick() {
    checkoutModal.current.open();
  }

  return (
    <>
      <Modal
        ref={cartModal}
        title="Your Cart"
        checkOut={cartQuantity > 0}
        clickFn={handleOpenCheckoutClick}
        fnName="Checkout"
      >
        <Cart total={totalPrice} />
      </Modal>
      <CheckoutModal
        ref={checkoutModal}
        total={totalPrice}
        title="Checkout"
        cart={cartItems}
      ></CheckoutModal>
      <section id="main-header">
        <div id="title">
          <img src={logo} alt="Food in plate" />
          <h1>{title}</h1>
        </div>
        <button className="text-button" onClick={handleOpenCartClick}>
          {buttonText} ({cartQuantity})
        </button>
      </section>
    </>
  );
}
