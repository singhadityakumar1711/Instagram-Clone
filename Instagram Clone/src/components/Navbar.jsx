import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <img
        src="/assets/insta-logo.png"
        alt="insta-logo"
        onClick={() => navigate("/")}
      />
      <ul className="nav-menu">
        <li>
          <Link to="/sign-in" className="Links">
            Sign In
          </Link>
        </li>
        <li>
          <Link to="/sign-up" className="Links">
            Sign Up
          </Link>
        </li>
        <li>
          <Link to="/profile" className="Links">
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
