import { useContext, useState } from "react";
import { CartContext } from "../store/cart-context";
import Button from "./UI/Button";

export default function ConfirmAddToCart({ meal }) {
  const [confirm, setConfirm] = useState(false);

  const { addToCart } = useContext(CartContext);

  return (
    <>
      {!confirm && (
        <Button
        onClick={() => {
            setConfirm(true);
          }}
        >
          Add to Cart
        </Button>
      )}
      {confirm && (
        <Button
          className="confirm"
          onClick={() => {
            addToCart(meal);
            setConfirm(false);
          }}
          onMouseLeave={() => setConfirm(false)}
        >
          Confirm Add to Cart
        </Button>
      )}
    </>
  );
}
