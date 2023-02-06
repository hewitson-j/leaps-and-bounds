import React from "react";
import "./ContactInfo.css";

function ContactInfo() {
  return (
    <>
      <div id="mobile-contact-info">
        <div id="mobile-contact-info-button">≡</div>
        <div className="mobile-contact-info-header">
          <h4 id="x-closer">X</h4>
          <h4>melonro143@yahoo.com</h4>
          <h4>719-439-0566</h4>
        </div>
      </div>
      <div className="contact-info-header">
        <h4>melonro143@yahoo.com</h4>
        <h4>719-439-0566</h4>
      </div>
    </>
  );
}

export default ContactInfo;
