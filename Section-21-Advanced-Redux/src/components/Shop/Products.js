import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My first book",
    description: "My first book! Amazing!",
  },
  {
    id: "p2",
    price: 10,
    title: "My second book",
    description: "My second book! Amazing!",
  },
  {
    id: "p3",
    price: 15,
    title: "My third book",
    description: "My third book! Amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
