import React from "react";
import Inner from "../components/layouts/Inner";
import { motion } from "framer-motion";
import TopSection from "./Works/TopSection";
import Sarava from "./Works/Sarava";
import White from "./Works/White";
import Chat from "./Works/Chat";
import Medcheck from "./Works/Medcheck";
import Fixit from "./Works/Fixit";

function works() {
  return (
    <Inner>
      <motion.div className="w-full overflow-clip">
        <TopSection />
        <Sarava />
        <White />
        <Chat />
        <Medcheck />
        <Fixit />
      </motion.div>
    </Inner>
  );
}

export default works;
