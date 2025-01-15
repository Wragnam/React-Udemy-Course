import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import cssClasses from "./Root.module.css";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className={cssClasses.content}>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
