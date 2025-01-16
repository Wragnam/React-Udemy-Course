import { useParams } from "react-router-dom";

function EventDetailsPage() {
  const params = useParams();


  return <h1>Event Details Page for event: {params.eventId}!</h1>;
}

export default EventDetailsPage;
