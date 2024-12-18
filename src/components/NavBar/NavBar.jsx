import { NavLink } from "react-router";

function NavBar() {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink> |<NavLink to="/blog"> Blogs</NavLink>
      </nav>
    </header>
  );
}

export default NavBar;
