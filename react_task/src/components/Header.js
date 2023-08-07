import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navLinkStyles = {
    textDecoration: "underline",
    color: "white",
    padding: "20px",
    fontSize: "20px",
  };

  const activeNavLinkStyles = {
    textDecoration: "none",
    color: "red",
    padding: "20px",
    fontSize: "20px",
  };

  return (
    <div className="header">
      <div>
        <NavLink
          exact
          to="/"
          style={location.pathname === "/" ? activeNavLinkStyles : navLinkStyles}
        >
          Home
        </NavLink>
        <NavLink
          to="/counter"
          style={
            location.pathname === "/counter"
              ? activeNavLinkStyles
              : navLinkStyles
          }
        >
          Counter
        </NavLink>
        <NavLink
          to="/form"
          style={
            location.pathname === "/form" ? activeNavLinkStyles : navLinkStyles
          }
        >
          Form
        </NavLink>
        <NavLink
          to="/List"
          style={
            location.pathname === "/List" ? activeNavLinkStyles : navLinkStyles
          }
        >
          List
        </NavLink>
        <NavLink
          to="/API"
          style={
            location.pathname === "/api" ? activeNavLinkStyles : navLinkStyles
          }
        >
          API
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
