import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui.js";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const handleCartButtonClick = () => {
    dispatch(uiActions.toggleCart());
  };

  const total = useSelector((state) => state.cart.total);


  return (
    <button className={classes.button} onClick={handleCartButtonClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
