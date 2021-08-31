import './nav.css';
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
    <div className="menu-btn">
      <div className="menu-btn__burger"></div>
    </div>
    <NavLink to="/api/reviews">Home</NavLink>
    </>
  );
};

export default Nav;