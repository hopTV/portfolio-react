import React from "react";
import "./Intro.css";

import github from "../../img/github.png";
import linkIcon from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import vector1 from "../../img/Vector1.png";
import vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import Floating from "../floating/Floating";

import { motion } from "framer-motion";

const Intro = () => {

  const transition = {duration: 2, type: "spring"}

  return (
    <div className="intro">
      <div className="i__left">
        <div className="i__name">
          <span>Hy | I Am </span>
          <span>Hop Tran</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the quality work
          </span>
        </div>
        <button className="btn i__btn">Hire me</button>

        <div className="i__icon">
          <img src={github} alt="/" />
          <img src={linkIcon} alt="/" />
          <img src={instagram} alt="/" />
        </div>
      </div>
      <div className="i__right">
        <img src={vector1} alt="/" />
        <img src={vector2} alt="/" />
        <img src={boy} alt="/" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt="/"
        />
        <motion.div
          initial={{ left: "74%", top: "-4%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-5%", left: "65%" }}
        >
          <Floating image={crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div style={{ top: "18rem" }}>
          <Floating image={thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>
        {/* blur divs */}
        <div className="blur" style={{ background: "rba(236 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
