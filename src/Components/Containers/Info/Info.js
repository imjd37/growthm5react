import React from "react";
import "./Info.css";

function Info() {
  return (
    <>
      <span className="Anchor" id="ScrollAbout"></span>
      <div className="InfoContainer">
        <div className="InfoArea">
          <div className="InfoContant">
            <h1>Customize Your Logo with 'Creative Logo Studio'</h1>
            <p>
              Auctor urna nunc id cursus metus aliquam eleifend. Dolor sit amet
              consectetur adipiscing elit pellentesque habitant morbi tristique.
              Nunc faucibus a pellentesque sit amet. Morbi blandit cursus risus
              at ultrices mi. Consequat mauris nunc congue nisi vitae suscipit
              tellus mauris. Pharetra diam sit amet nisl suscipit adipiscing
              bibendum est ultricies. Malesuada proin libero nunc consequat
              interdum.
            </p>
          </div>
          <div className="InfoImage">
            <img src="imgs/1.jpg" alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
