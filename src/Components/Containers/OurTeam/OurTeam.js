import React from "react";
import "./OurTeam.css";

function OurTeam() {
  return (
    <div className="OurTeamContainer">
      <h1>Our team</h1>
      <div className="OurTeamArea">
        <div className="OurTeam">
          <img src="imgs/team5.jpg" alt="" />
          <h2>
            <strong>Adrian Walker</strong>
          </h2>
          <p>CEO</p>
        </div>
        <div className="OurTeam">
          <img src="imgs/team6.jpg" alt="" />
          <h2>
            <strong>Adrian Walker</strong>
          </h2>
          <p>CEO</p>
        </div>
        <div className="OurTeam">
          <img src="imgs/team7.jpg" alt="" />
          <h2>
            <strong>Adrian Walker</strong>
          </h2>
          <p>CEO</p>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
