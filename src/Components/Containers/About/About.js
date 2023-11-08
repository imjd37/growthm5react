import React from "react";
import "./About.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
function About() {
  return (
    <div className="AboutContainer" id="Head">
      <div className="AboutArea">
        <h5>About GrowthM5</h5>
        <p>Scelerisque varius morbi enim nunc faucibus a pellentesque.</p>
        <AnchorLink href="#ScrollCotactUs">
          <button className="YellowButton">Contact Us </button>
        </AnchorLink>
      </div>
    </div>
  );
}

export default About;
