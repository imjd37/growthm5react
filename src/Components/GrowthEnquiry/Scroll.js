import React from "react";

const Scroll = (props) => {
  return (
    <div style={{ display: "flex", margin: "30px", justifyContent: "center" }}>
      <div
        style={{
          overflowY: "scroll",
          border: "5px solid rgba(158, 158, 158, 0.603)",
          padding: "10px",
          borderRadius: "30px",
          height: "75vh",
          width: "80vw",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Scroll;
