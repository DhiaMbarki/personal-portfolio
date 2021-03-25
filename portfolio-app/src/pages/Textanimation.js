import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'

function Textanimation() {
  return (
    <div className="one">
      <h1>
        Just Stay in Touch And explore more of my  <div id="fragment1">personal skills ...</div>
        <div id="fragment2"> Work experience ...</div>
      </h1>
      <div className="two">
      <Link to ="/workExp" ><Button ><p>Go</p> </Button>
      </Link >
      
      </div>
    </div>
  );
}
export default Textanimation;
