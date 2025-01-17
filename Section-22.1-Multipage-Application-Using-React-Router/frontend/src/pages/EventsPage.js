import { Suspense } from "react";
import EventsList from "../components/EventsList";
import { useLoaderData, Await } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();

  // if (data.isError) {
  //   return <p>Error: {data.message}</p>;
  // }

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading ....</p>}>
      <Await resolve={data.events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch event." };
    throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
      status: 500,
    });
  } else {
    const respData = await response.json();
    return respData.events;
  }
}
export function loader() {
  return {
    events: loadEvents(),
  };
}
