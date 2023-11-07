import React from "react";
import "./Enquiry.css";

function Enquiry() {
  return (
    <>
      <span className="Anchor" id="ScrollCotactUs"></span>
      <div className="EnquiryContainer">
        <h1>Let's Talk?</h1>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Message" />
          <input type="tel" placeholder="Phone" />
          <input type="email" placeholder="Email" />
          <button className="YellowButton">Send</button>
        </form>
      </div>
    </>
  );
}

export default Enquiry;
