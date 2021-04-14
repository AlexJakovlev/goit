import { NavLink } from "react-router-dom";
import routers from "../../routes";

function NavBar() {
  return (
    <>
      <ul className="navBar">
        <li>
          <NavLink
            exact
            className="Navigation-link"
            activeClassName="Navigation-link-active"
            to={routers.Home}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="Navigation-link"
            activeClassName="Navigation-link-active"
            to={routers.Movies}
          >
            Movies
          </NavLink>
        </li>
      </ul>
      <hr className="header_hr" />
    </>
  );
}
export default NavBar;
