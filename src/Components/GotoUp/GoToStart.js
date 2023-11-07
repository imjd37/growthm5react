import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./GoToStart.css";

function GoToStart() {
  const [arrow, setArrow] = useState(false);
  const changeArrow = () => {
    if (window.scrollY >= 80) {
      setArrow(true);
    } else {
      setArrow(false);
    }
  };

  window.addEventListener("scroll", changeArrow);

  return (
    <div className={arrow ? "Start" : "StartHidden"}>
      <AnchorLink href="#Head">
        <img src="imgs/icons8-up-67.png" alt="" />
      </AnchorLink>
    </div>
  );
}
export default GoToStart;
