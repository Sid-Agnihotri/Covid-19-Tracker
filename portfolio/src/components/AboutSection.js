import React from "react";
import home1 from "../img/home1.png";
//style
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles.js";
// framer motion
import { motion } from "framer-motion";
//Animation
import { titleAnim } from "../animation";

function AboutSection() {
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };
  const container = {
    hidden: { x: 100 },
    show: { x: 0, transition: { duration: 0.75, ease: "easeOut" } },
  };
  return (
    <About className="about">
      <Description>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
          <Hide className="hide">
            <motion.h2 variants={titleAnim} initial="hidden" animate="show">
              We work to make
            </motion.h2>
          </Hide>
          <Hide className="hide">
            <motion.h2>
              your <span> dreams</span> come
            </motion.h2>
          </Hide>
          <Hide className="hide">
            <motion.h2>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography and videography that you might have. I
          am a professional guy.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image className="image">
        <img src={home1} alt="guy with camera"></img>
      </Image>
    </About>
  );
}

export default AboutSection;
