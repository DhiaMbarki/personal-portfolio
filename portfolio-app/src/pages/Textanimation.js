import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function Textanimation() {
  return (
    <div className="one">
      <h1>
        explore more <div id="fragment1">personal skills ...</div>
        <div id="fragment2"> Work experience ...</div>
      </h1>
      <Link to ="/workExp" >click</Link >
    </div>
  );
}
export default Textanimation;
