import { redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailsPage() {
  const data = useRouteLoaderData("event-detail");

  return <EventItem event={data.event} />;
}

export default EventDetailsPage;

export async function loader({ request, params }) {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Failed to fetch event details" }),
      { status: 500 }
    );
  } else {
    return response;
  }
}

export async function action({ request, params }) {
  const eventId = params.eventId;

  console.log("Running");

  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Failed to delete event" }), {
      status: 500,
    });
  }

  console.log("/hi");

  return redirect("/events");
}
