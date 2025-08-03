import React from "react";
import Inner from "../components/layouts/Inner";
import { motion } from "framer-motion";

function works() {
  return (
    <Inner>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full h-screen grid place-content-center text-7xl font-black"
      >
        Sohaib
      </motion.div>
    </Inner>
  );
}

export default works;
