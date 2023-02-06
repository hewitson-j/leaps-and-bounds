import React from "react";
import "./Header.css";
import Logo from "./images/Logo.jpg";

function Header() {
  return (
    <>
      <img src={Logo} alt="Leaps and Bounds Logo"></img>
      <h3 id="tagline">"Expanding young minds by leaps & bounds."</h3>
    </>
  );
}

export default Header;
