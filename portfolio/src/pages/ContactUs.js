import React from "react";

//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function ContactUs() {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      Our Contact
    </motion.div>
  );
}

export default ContactUs;
