import React from "react";
import "./Video.css";

function Video() {
  return (
    <div className="VideoContainer">
      <div className="VideoArea">
        <img src="imgs/pexels-olya-kobruseva-7598019.jpeg" alt="" />
        <div className="VideoPlayButton">
          <img src="imgs/icons8-play-64.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Video;
