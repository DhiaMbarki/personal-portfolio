import React from "react";

import './cars.css'






const Cards = () => {
 
    return (
      <div className="car">
      <div>
  <h1 className="h">React</h1>
  <p className="p">My passion for react stems from its virtual Dom system and using
              react hooks to contrtol state.
  </p>
  <h1 className="h">Angular</h1>
  <p className="p"> Angular  is another beast... Its comprehensive cli package and
              its declaritive data binding is a plus
  </p>
  <h1 className="h">React</h1>
  
  <h1 className="h">Other</h1>
  <p className="p">Ajax, Axios, jquery: These are all helper libraries to make
              requests and change what is rendered. I use jquery sparingly, due
              to its package size
  </p>
  
</div>
      </div>
    );
  
}
export default Cards