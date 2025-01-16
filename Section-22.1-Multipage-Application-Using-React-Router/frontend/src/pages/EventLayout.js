import { Outlet } from "react-router-dom";
import EventNavigation from "../components/EventsNavigation";

function EventLayout() {
  return (
    <>
      <EventNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default EventLayout;
