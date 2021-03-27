import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./skills.css";
import Html from "../images/skills/html.png";
import Css from "../images/skills/css.png";
import Js from "../images/skills/js.png";
import Mongodb from "../images/skills/mongodb.png";
import Node from "../images/skills/node.png";
import ReactImg from "../images/skills/react.png";
import BootstrapImg from "../images/skills/bootstrap.png";
import GitImg from "../images/skills/git.png";
import AngularImg from "../images/skills/angular.png";
import ExpressImg from "../images/skills/express.png";
import mysql from "../images/skills/mysql.png";


const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="profile" >
      {/* ----------Skills Section----------- */}
      <div className="skill-title" data-aos="fade-up">
        <h2 className="cen">𝐅𝐫𝐨𝐧𝐭-𝐞𝐧𝐝
</h2>
        <hr />
      </div>
      <div className="skills">
        <Container>
          <Row>
            {/* <Col xs={6} md={3} data-aos="fade-up">
             
              <Image className="skill-image" src={Html} rounded />
              <h1 className="bl">gyfygf</h1>
              <div>HTML 5</div>
            </Col>
            <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={Css} rounded />
              <div>CSS 3</div>
            </Col> */}
            <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={Js} rounded />
              <div>Javascript</div>
            </Col>
            {/* <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={Mongodb} rounded />
              <div>MongoDB</div>
            </Col>
            <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={Node} rounded />
              <div>NodeJs</div>
            </Col> */}
            
            <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={ReactImg} rounded />
              <div>React</div>
            </Col>
            
            {/* <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={BootstrapImg} rounded />
              <div>Bootstrap</div>
            </Col>
            <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={ExpressImg} rounded />
              <div>Express</div>
            </Col> */}
            <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={AngularImg} rounded />
              <div>Angular</div>
            </Col>
            {/* <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={GitImg} rounded />
              <div>Git</div>
            </Col> */}
          </Row>
        </Container>
      </div>
      

      {/* ----------------BackEnd Section----------------- */}
      
      <div className="skill-title" data-aos="fade-up">
        <h2 className="cen2">𝗕𝗮𝗰𝗸-𝗲𝗻𝗱
</h2>
        <hr />
      </div>
      <div className="skills">
        <Container>
          <Row>
            {/* <Col xs={6} md={3} data-aos="fade-up">
             
              <Image className="skill-image" src={Html} rounded />
              <h1 className="bl">gyfygf</h1>
              <div>HTML 5</div>
            </Col>
            <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={Css} rounded />
              <div>CSS 3</div>
            </Col> */}
            <Col xs={6} md={3} data-aos="fade-up">
            <Image className="skill-image" src={Node} rounded />
              <div></div>
            </Col>
            <Col xs={6} md={3} data-aos="fade-up">
            <Image className="skill-image" src={Mongodb} rounded />
            </Col>
            {/* <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={Mongodb} rounded />
              <div>MongoDB</div>
            </Col>
            <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={Node} rounded />
              <div>NodeJs</div>
            </Col> */}
            
            
            
            {/* <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={BootstrapImg} rounded />
              <div>Bootstrap</div>
            </Col>
            <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={ExpressImg} rounded />
              <div>Express</div>
            </Col> */}
            <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={mysql} rounded />
            </Col>
            {/* <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={GitImg} rounded />
              <div>Git</div>
            </Col> */}
          </Row>
        </Container>
      </div>
      
    
    </div>
  );
};

export default Skills;
