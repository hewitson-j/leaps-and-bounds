import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul id="navbar-ul">
        <li className="navbar-li">
          <a href="#section-1">Home</a>
        </li>
        <li className="navbar-li">
          <a href="#section-2">My Program</a>
        </li>
        <li className="navbar-li">
          <a href="#section-3">Meet the Teacher</a>
        </li>
        <li className="navbar-li">
          <a href="#section-4">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
