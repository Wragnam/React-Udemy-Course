import { useContext, useState } from "react";
import { CartContext } from "../store/cart-context";

export default function ConfirmAddToCart({ meal }) {
  const [confirm, setConfirm] = useState(false);

  const { addToCart } = useContext(CartContext);

  return (
    <>
      {!confirm && (
        <button
          className="button"
          onClick={() => {
            setConfirm(true);
          }}
        >
          Add to Cart
        </button>
      )}
      {confirm && (
        <button
          className="button-confirm"
          onClick={() => {
            addToCart(meal);
            setConfirm(false);
          }}
        >
          Confirm Add to Cart
        </button>
      )}
    </>
  );
}
