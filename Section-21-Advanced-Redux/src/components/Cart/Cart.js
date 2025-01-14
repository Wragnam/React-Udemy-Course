import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems &&
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={{ ...cartItem }} />
          ))}
        {cartItems.length === 0 && <p>No Items In Your Cart Yet!</p>}
      </ul>
    </Card>
  );
};

export default Cart;
