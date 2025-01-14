import { useDispatch } from "react-redux";
import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { uiActions } from "../../store/ui.js";

const MainHeader = (props) => {
  const dispatch = useDispatch();

  const handleCartButtonClick = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={handleCartButtonClick} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
