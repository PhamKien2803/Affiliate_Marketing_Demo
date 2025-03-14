import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-container">
        <div className="nav-logo">
          <Link to="/">
            <img
              src="https://via.placeholder.com/150x50.png?text=Eva+Logo"
              alt="Eva Logo"
            />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Tin tức</Link>
          </li>
          <li>
            <Link to="/giai-tri">Giải trí</Link>
          </li>
          <li>
            <Link to="/lam-dep">Làm đẹp</Link>
          </li>
          <li>
            <Link to="/suc-khoe">Sức khỏe</Link>
          </li>
          <li>
            <Link to="/me-va-be">Mẹ và Bé</Link>
          </li>
          {/* etc. */}
        </ul>
        <div className="nav-search">
          <input type="text" placeholder="Tìm kiếm..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
