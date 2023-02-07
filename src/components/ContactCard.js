import React from "react";
import "./ContactCard.css";
// import { useEffect } from "react";

function ContactCard() {
  return (
    <>
      <ul id="contact-card-ul">
        <div className="row">
          <li className="col-sm-3">
            <b>Email</b>
            <br></br>
            melonro143@yahoo.com
          </li>
          <li className="col-sm">
            <b>Phone</b>
            <br></br>
            +1 719-439-0566
          </li>
          <li className="col-sm-3">
            <b>Facebook</b>
            <br></br>
            <a href="https://www.facebook.com/MsMelanieTrujillo">Click Here!</a>
          </li>
        </div>
      </ul>
      {/* <input
        type={"button"}
        // onClick={"mailto:melonro143@yahoo.com"}
        className="btn btn-primary"
        value={"Schedule a Tour!"}
        id="schedule-appointment"
        // onClick={(location.href = "mailto:melonro143@yahoo.com")}
        // href={"mailto:melonro143@yahoo.com"}
      ></input> */}
      <a
        href="mailto:melonro143@yahoo.com?subject=Schedule%20Preschool%20Tour&body=Hi%20Mrs.%20Melanie,%0D%0A%0D%0A"
        className="btn btn-primary"
        id="schedule-appointment"
      >
        Schedule a Tour!
      </a>
    </>
  );
}

export default ContactCard;
