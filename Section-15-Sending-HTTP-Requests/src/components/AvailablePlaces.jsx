import { useState, useEffect } from "react";
import Places from "./Places.jsx";
import ErrorPage from "./Error.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      try {
        const resp = await fetch("http://localhost:3000/places");
        const data = await resp.json();

        if (!resp.ok) {
          throw new Error(`Failed to fecth places`);
        }
        setAvailablePlaces(data.places);
      } catch (error) {
        setError({message: error.message || "Could not fetch places, please try again later"});
      }
    }

    fetchPlaces();
  }, []);

  if(error){
    return <ErrorPage title="Error Occurred" message={error.message}/>;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={availablePlaces.length === 0}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
