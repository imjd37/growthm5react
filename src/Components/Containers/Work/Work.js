import React from "react";
import "./Work.css";
function Work() {
  return (
    <>
      <span className="Anchor" id="ScrollWork"></span>
      <div className="WorkContainer">
        <div>
          <h1>Our Recent awesome work</h1>
        </div>
        <div className="WorkArea">
          <div className="Work">
            <img src="imgs/1.png" alt="" />
          </div>
          <div className="Work">
            <img src="imgs/2.png" alt="" />
          </div>
          <div className="Work">
            <img src="imgs/3.png" alt="" />
          </div>
          <div className="Work">
            <img src="imgs/4.png" alt="" />
          </div>
          <div className="Work">
            <img src="imgs/5.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
