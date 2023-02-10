import React from "react";
import "./MobileNavbar.css";

let open = false;

function openNavbar() {
  const hiddenMenu = document.querySelector("#mobile-menu");
  const ul = document.querySelector("#hidden-mobile-menu");
  if (open === false) {
    hiddenMenu.style.display = "block";
    ul.style.padding = "1rem";
    ul.style.padding = "1px solid black";
    open = true;
  } else {
    hiddenMenu.style.display = "none";
    ul.style.padding = "0";
    ul.style.padding = "1px solid white";
    open = false;
  }
}

function MobileNavbar() {
  return (
    <>
      <div onClick={() => openNavbar()} id="mobile-navbar">
        ≡
      </div>
      <div id="hidden-mobile-menu">
        <ul id="mobile-menu">
          <li className="navbar-li-mobile">
            <a href={"#section-1"}>Home</a>
          </li>
          <li className="navbar-li-mobile">
            <a href={"#section-2"}>My Program</a>
          </li>
          <li className="navbar-li-mobile">
            <a href={"#section-3"}>Meet the Teacher</a>
          </li>
          <li className="navbar-li-mobile">
            <a href={"#section-4"}>Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MobileNavbar;
