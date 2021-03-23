import React from "react";
import { render } from "react-dom";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";

const content = [
  {
    title: "Profesionel experience in creating and designing",
   
    image: "https://i.imgur.com/ZXBtVw7.jpg"
  },
  {
    title: "robust problem-solving skills ",
    
    image: "https://i.imgur.com/DCdBXcq.jpg"
  },
  {
    title: "The ability to work under pressure and multi-tasking.",
    
    image: "https://i.imgur.com/DvmN8Hx.jpg"
  }
];

const slide = () => (
  <div className="siz">
      <h1 className="cen">explore more about me </h1>
    <Slider className="slider-wrapper" autoplay="1500">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default slide