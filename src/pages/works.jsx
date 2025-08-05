import React from "react";
import Inner from "../components/layouts/Inner";
import { motion } from "framer-motion";
import TopSection from "./Works/TopSection";
import Sarava from "./Works/Sarava";
import White from "./Works/White";

function works() {
  return (
    <Inner>
      <motion.div className="">
        <TopSection />
        <Sarava />
        <White /> <article className="h-screen"></article>
      </motion.div>
    </Inner>
  );
}

export default works;
