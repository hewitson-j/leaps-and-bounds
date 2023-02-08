import React from "react";
import "./Copyright.css";

function Copyright() {
  return (
    <div id="copyright">
      <hr></hr>
      <div>Website Copyright Jacob Hewitson 2023</div>
      <div>
        <a id="TaC" href="./TaC.html">
          Terms and Conditions
        </a>{" "}
        and{" "}
        <a id="PrivacyPolicy" href="./PrivacyPolicy.html">
          Privacy Policy
        </a>{" "}
        - Updated 2/8/2023
      </div>
    </div>
  );
}

export default Copyright;
