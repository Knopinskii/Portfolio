import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="">
      <ul className="flex justify-center items-center gap-12 text-white pt-5 text-lg">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/skills">Skills</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
