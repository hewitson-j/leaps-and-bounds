import React from "react";
import "./Header.css";
import Logo from "./images/Logo.jpg";
import { useEffect } from "react";

function Header() {
  return (
    <>
      <div id="section-1">
        <img src={Logo} alt="Leaps and Bounds Logo"></img>
        <h3 id="tagline">"Expanding young minds by leaps & bounds."</h3>
      </div>
    </>
  );
}

export default Header;
