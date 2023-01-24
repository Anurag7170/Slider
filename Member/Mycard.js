import React from "react";
import "./Mycard.css";
const Mycard = (props) => {
  return (
    <div className="body">
      <div className="mycard">
        <div className="ima">
          <img src="../images/logo.jpg" alt="" />
        </div>
        <p>name{props.name}</p>
        <p>post{props.post}</p>
      </div>
    </div>
  );
};

export default Mycard;
