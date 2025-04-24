import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navigation">
      <NavLink to={"/"} className="navlinks">
        <span>Profile</span>
      </NavLink>
      <NavLink to={"/interest"} className="navlinks">
        <span>Interest</span>
      </NavLink>
      <NavLink to={"/settings"} className="navlinks">
        <span>Settings</span>
      </NavLink>
    </div>
  );
};

export default Header;
