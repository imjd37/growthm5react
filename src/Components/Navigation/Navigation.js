import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navigation.css";

function Navigation() {
  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className="NavArea">
      <div className={colorChange ? "NavBarChange" : "NavBar"}>
        <div className="Logo">
          <h2>GrowthM5</h2>
        </div>
        <div className="Menubar">
          <ul>
            <li>
              <AnchorLink href="#ScrollAbout">About</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#ScrollWork">Work</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#ScrollBlog">Blog</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#ScrollCotactUs">Contact</AnchorLink>
            </li>
          </ul>
          <div className="ButtonContainer">
            <button className="YellowButton">We're hiring</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
