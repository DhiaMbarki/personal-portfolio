import React from "react";
import "./styles.css";


const Common = (props) =>{
return(
 <div className="move">
    <section id="header" className="section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
      <div className="row">
         
          <div className="mov">
            <img src={props.imgscr} alt="pic" className="img-fluid animated"/>
          </div>
          </div>
        </div>
      </div>
    </div>
    
    </section>

    </div>
)
}
export default Common;