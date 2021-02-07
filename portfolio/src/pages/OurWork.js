import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
function OurWork() {
  return (
    <Work
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link>
          <img src={athlete} alt="athelete" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link>
          <img src={theracer} alt="racer" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good times</h2>
        <div className="line"></div>
        <Link>
          <img src={goodtimes} alt="good times" />
        </Link>
      </Movie>
    </Work>
  );
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;

  padding: 5rem 10 rem;
  h2 {
    padding: 1rem 0rem;
    color: white;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
export default OurWork;
