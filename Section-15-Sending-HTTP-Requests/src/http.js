export async function fecthAvailablePlaces() {
  const resp = await fetch("http://localhost:3000/places");
  const data = await resp.json();

  if (!resp.ok) {
    throw new Error(`Failed to fecth places`);
  }

  return data.places;
}

export async function updateUserPlaces(places) {
  try {
    const resp = await fetch("http://localhost:3000/user-places", {
      method: "PUT",
      body: JSON.stringify({places}),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    throw new Error("Failed to update places");
  }

  const resData = await response.json();

  if (!resp.ok) {
    throw new Error("Failed to update user places");
  }

  return resData.message;
}
