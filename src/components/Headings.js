import React from "react";
import "./Headings.css";

function Headings({ text = "Not available" }) {
  return (
    <>
      <h2>{text}</h2>
    </>
  );
}

export default Headings;
