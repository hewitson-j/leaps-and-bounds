import React from "react";
import "./MobileNavbar.css";

function MobileNavbar() {
  return (
    <>
      <div id="mobile-navbar">≡</div>
      <div id="hidden-mobile-menu">
        <ul id="mobile-menu">
          <li className="navbar-li-mobile">
            <a href={"#home"}>Home</a>
          </li>
          <li className="navbar-li-mobile">
            <a href={"#my-program"}>My Program</a>
          </li>
          <li className="navbar-li-mobile">
            <a href={"#meet-me"}>Meet the Teacher</a>
          </li>
          <li className="navbar-li-mobile">
            <a href={"#contact"}>Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MobileNavbar;
