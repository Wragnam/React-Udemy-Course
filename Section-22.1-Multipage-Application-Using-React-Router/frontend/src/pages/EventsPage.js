import { Link } from "react-router-dom";

const EVENTS = [
  {
    id: "e1",
    name: "Event 1",
  },
  {
    id: "e2",
    name: "Event 2",
  },
  {
    id: "e3",
    name: "Event 3",
  },
];

function EventsPage() {
  return (
    <>
    <h1>Events Page!</h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
