import { useEffect } from "react";
import { useState } from "react";
import { getMeals } from "../http";
import ConfirmAddToCart from "./ConfirmAddToCart";

export default function Meals() {
  const [meals, setMeals] = useState(null);

  useEffect(() => {
    async function getAllMeals() {
      try {
        const mealData = await getMeals();
        setMeals(mealData);
      } catch (error) {
        return <p>Failed to load meals</p>;
      }
    }

    getAllMeals();
  }, []);

  return (
    <section>
      {!meals && <p>Loading Food Items</p>}
      {meals && (
        <ul id="meals">
          {meals.map((meal) => (
            <li key={meal.id} className="meal-item">
              <article>
                <img src={`http://localhost:3000/${meal.image}`} />
                <h3>{meal.name}</h3>
                <h1 className="meal-item-price">${meal.price}</h1>
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
