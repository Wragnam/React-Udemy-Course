import { useContext } from "react";
import { CartContext } from "../store/cart-context";
import { currencyFormatter } from "../util/formatting";

export default function Cart({ total }) {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <section className="cart">
      {cartItems && (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <p>
                {item.name} - {item.quantity} x{" "}
                {currencyFormatter.format(item.price)}
              </p>
              <div className="cart-item-actions" id="cart-item-actions">
                <button onClick={() => removeFromCart(item)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <p className="cart-total">{currencyFormatter.format(total)}</p>
    </section>
  );
}
