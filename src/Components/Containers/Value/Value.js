import React from "react";
import "./Value.css";

function Value() {
  return (
    <div className="ValueContainer">
      <div className="ValueArea">
        <div className="ValueImage">
          <img src="imgs/undraw-lightbulb-moment-re-ulyo.svg" alt="" />
        </div>
        <div className="ValuePara">
          <p>What we value</p>
          <p>
            Good Logo <br />
            design ensures a better customer response
          </p>
          <p>
            Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci
            nulla velit ut tortor pretium viverra suspendisse.
          </p>
          <button className="YellowButton">Live Chat</button>
        </div>
      </div>
    </div>
  );
}

export default Value;
