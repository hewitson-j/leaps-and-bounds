import React from "react";
import "./ContactCard.css";

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
      <input
        type={"button"}
        value="Schedule a Tour"
        className="btn btn-primary"
        id="schedule-appointment"
      ></input>
      {/* 
      <script>
        const emailButton = document.querySelector("#schedule-appointment");
        emailButton.addEventListener("click", () => {window.open(
          "mailto:melonro143@yahoo.com?subject=Schedule%20an%20Appointment"
        )}

        )
      </script> */}
    </>
  );
}

export default ContactCard;
