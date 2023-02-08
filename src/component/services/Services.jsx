import React from "react";
import "./services.css";

import heartEmoji from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import resume from "./resume.pdf"
import Card from "../card/Card";

const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ispum is simplay dummy text of printing of printing lorem
          <br />
          ispum is simpley dummy text of printing
        </span>
        <a href={resume} download>
          <button className="btn s__btn">Downlod CV</button>
        </a>
        <div className="blur s__blur1" style={{ backround: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="cards">
        <div style={{ left: "23rem" }}>
          <Card
            emoji={heartEmoji}
            headding="Design"
            desc="Photoshop, Adobe, Figma, Sketch, Adobe xd"
          />
        </div>
        <div style={{ top: "12rem", left: "7rem" }}>
          <Card
            emoji={glasses}
            headding="Developer"
            desc="Html, Css, Javascript, React, PHP"
          />
        </div>
        <div style={{ top: "19rem", left: "21rem" }}>
          <Card
            emoji={humble}
            headding="UI/UX"
            desc="Lorem ispum dummy text are usually use in section"
          />
        </div>
        <div className="blur s__blur2" style={{background: "var(--purple)"}}></div>
      </div>
    </div>
  );
};

export default Services;
