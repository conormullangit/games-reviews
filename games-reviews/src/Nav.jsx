import './nav.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavSide } from './NavSide';
import { IconContext } from 'react-icons/lib';

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <div className="navbar">
          <Link to="#" className="menu-bar">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu__active" : "nav-menu"}>
          <ul className="nav-manu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {NavSide.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Nav;

// const Nav = () => {

//   return (
//     <>
//       <div className="menu-btn">
//         <div className="menu-btn__burger"></div>
//       </div>

//       <NavLink to="/api/reviews">Home</NavLink>
//     </>
//   );
// };