export async function getMeals() {
  const resp = await fetch("http://localhost:3000/meals");

  if (!resp.ok) {
    //...
  }

  const meals = await resp.json();

  return meals;
}

export async function addOrder(checkOutInformation) {
  const resp = await fetch("http://localhost:3000/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(checkOutInformation),
  });

  const data = await resp.json();

  if (data.message !== "Order created!") {
    return new Error("Order Not Created. Please try again later.");
  }

  return null;
}
