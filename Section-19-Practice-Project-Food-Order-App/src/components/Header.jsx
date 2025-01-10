import { useContext } from "react";
import { useRef } from "react";
import { CartContext } from "../store/cart-context";
import Modal from "./CartModal";
import Cart from "./Cart";
import CheckoutModal from "./CheckoutModal";
import SuccessModal from "./SucessModal";

export default function Header({ title, logo, buttonText }) {
  const cartModal = useRef();
  const checkoutModal = useRef();
  const successfullModal = useRef();

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

  function handleOnSuccessfulCheckout() {
    successfullModal.current.open();
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
        handleSuccessfulCheckoutFn={handleOnSuccessfulCheckout}
      ></CheckoutModal>
      <SuccessModal ref={successfullModal}>
        <p>Your order was submitted successfull.</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes
        </p>
      </SuccessModal>
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
