import React from "react";
//style
//animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

//page components
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServiceSection from "../components/ServiceSection";

function Aboutus() {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServiceSection />
      <FaqSection />
    </motion.div>
  );
}

//styles Components

export default Aboutus;
