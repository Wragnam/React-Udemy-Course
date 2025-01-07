export async function fecthAvailablePlaces() {
  const resp = await fetch("http://localhost:3000/places");
  const data = await resp.json();

  if (!resp.ok) {
    throw new Error(`Failed to fecth places`);
  }

  return data.places;
}
