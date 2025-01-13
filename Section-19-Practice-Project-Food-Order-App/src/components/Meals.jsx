import ConfirmAddToCart from "./ConfirmAddToCart";
import { currencyFormatter } from "../util/formatting";
import useHttp from "../hooks/useHttp";

const requestConfig = {}


export default function Meals() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p>Loading Food Items...</p>;
  }

  return (
    <section>
      {error && <p>Error loading items: {error}</p>}
      {meals && (
        <ul id="meals">
          {meals.map((meal) => (
            <li key={meal.id} className="meal-item">
              <article>
                <img src={`http://localhost:3000/${meal.image}`} />
                <h3>{meal.name}</h3>
                <h1 className="meal-item-price">
                  {currencyFormatter.format(meal.price)}
                </h1>
                <p className="meal-item-description">{meal.description}</p>
                <ConfirmAddToCart meal={meal} />
              </article>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
