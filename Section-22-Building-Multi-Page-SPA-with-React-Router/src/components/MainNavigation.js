import { NavLink } from "react-router-dom";
import cssClasses from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={cssClasses.header}>
      <nav>
        <ul className={cssClasses.list}>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? cssClasses.active : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({ isActive }) => isActive ? cssClasses.active : undefined}>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
