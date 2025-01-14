import { useDispatch } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { cartActions } from "../../store/cart";

const Products = (props) => {
  const dispatch = useDispatch();

  const handleAddToCart = (payload) => {
    dispatch(cartActions.addToCart(payload));
  };

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          key={1}
          id={Math.random() * 1000}
          title="Test"
          price={6}
          description="This is a first product - amazing!"
          addToCartFn={handleAddToCart}
        />
        <ProductItem
          key={2}
          id={Math.random() * 1000}
          title="Second Test"
          price={10}
          description="This is a second product - amazing!"
          addToCartFn={handleAddToCart}
        />
      </ul>
    </section>
  );
};

export default Products;
