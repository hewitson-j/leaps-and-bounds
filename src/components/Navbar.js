import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul id="navbar-ul">
        <li className="navbar-li">
          <a href={"#home"}>Home</a>
        </li>
        <li className="navbar-li">
          <a href={"#my-program"}>My Program</a>
        </li>
        <li className="navbar-li">
          <a href={"#meet-me"}>Meet the Teacher</a>
        </li>
        <li className="navbar-li">
          <a href={"#contact"}>Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
