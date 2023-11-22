import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavigationEnquiry() {
  const [colorChange, setColorChange] = useState(false);

    const navigate = useNavigate();

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
        <button className="MenuIcon">
          <img src="./imgs/lines.png" alt="menuButton"></img>
        </button>
        <div className="Menubar">
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
          </ul>
          <div className="ButtonContainer">
            <button className="YellowButton" onClick={()=>navigate(-1)}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationEnquiry;
