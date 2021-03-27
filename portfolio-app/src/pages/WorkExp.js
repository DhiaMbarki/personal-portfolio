import React, { useState, useEffect, useRef } from "react";
import classes from "./workExp.module.css";
import Typewriter from "typewriter-effect";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { textIntro } from "./animations/animate";
import Mouse from "./mouse/mouse";
import Skills from'./skills/Skills'
import Blogs from './Blogs/Blogs'
import Cards from './Shared/Cards'
import Card2 from './Shared/Card2'

const WorkExp = () => {
  let text = useRef(null);
  const [settings1, setSettings1] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  });
  const [settings2, setSettings2] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2500,
    cssEase: "linear",
    arrows: false,
  });
  const [settings3, setSettings3] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
  });

  useEffect(() => {
    // textworkExp(text);
  });
  return (
    <div className={classes.container}>
      <div className={classes.viewPage}>
        <div className={classes.imageToHide}>
          <img
            className={classes.circleImage}
            src="/images/developer.svg"
            alt=""
          />
        </div>
        <div className={classes.texts}>
          <p className={classes.hii}> Hi!!!</p>
          <p className={classes.name}>I m working on JavaScript</p>
          <p className={classes.list}>I do |</p>
          <div className={classes.typeWrite}>
            <Typewriter
              options={{
                strings: ["React", "Angular"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className={classes.line}></div>
          <div className={classes.flexContainer}>
            <Slider {...settings1}>
              <div className={classes.slick}>React</div>
              <div className={classes.slick}>Javascript</div>
              <div className={classes.slick}>Redux</div>
              <div className={classes.slick}>HTML</div>
              <div className={classes.slick}>CSS</div>
              <div className={classes.slick}>angular</div>

            </Slider>
            <Slider {...settings2}>
              <div className={classes.slick}>NodeJs</div>
              <div className={classes.slick}>Express</div>
              <div className={classes.slick}>mongodb</div>
              <div className={classes.slick}>mysql</div>
            </Slider>
            <Slider {...settings3}>
              <div className={classes.slick}>PhoneApp</div>
              <div className={classes.slick}>responsiveApp</div>
              <div className={classes.slick}>Front-End</div>
              <div className={classes.slick}>Back-end</div>
            </Slider>
          
          </div>
        </div>
        <div className={classes.image}>
          <img
            className={classes.circleImage}
            src="/images/developer.svg"
            alt=""
          />

                <Mouse />
            

<Skills/>

        </div>
      </div>
{/* <p className="p">Skills</p> */}
      {/* <Blogs/>  */}
      <Cards/>
      <Card2/>

    </div>
  );
};

export default WorkExp;
