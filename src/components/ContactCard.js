import React from "react";
import "./ContactCard.css";

function ContactCard() {
  return (
    <>
      <ul id="contact-card-ul">
        <div className="row">
          <li className="col-sm-3">
            Email
            <br></br>
            melonro143@yahoo.com
          </li>
          <li className="col-sm">
            Phone
            <br></br>
            +1 719-439-0566
          </li>
          <li className="col-sm-3">
            Facebook
            <br></br>
            <a href="https://www.facebook.com/MsMelanieTrujillo">Click Here!</a>
          </li>
        </div>
      </ul>
      <input
        type={"button"}
        value="Schedule a Tour"
        className="btn btn-primary"
        id="schedule-appointment"
      ></input>
    </>
  );
}

export default ContactCard;
