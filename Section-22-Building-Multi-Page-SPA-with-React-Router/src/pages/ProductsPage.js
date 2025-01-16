import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: "p1",
    name: "Product 1",
  },
  {
    id: "p2",
    name: "Product 2",
  },
  {
    id: "p3",
    name: "Product 3",
  },
];

function ProductsPage() {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={product.id} relative="">{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;
