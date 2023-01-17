import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/integration">Integration</NavLink>
    </div>
  );
}

export default Navbar;
