import React from "react";
import { motion } from "framer-motion";

// --- Reusable Marquee Component ---
// It takes children (the content to scroll), a speed (duration of one loop),
// and a direction ('left' or 'right') as props.
export const Marquee = ({ children, duration = 30, direction = "left" }) => {
  // The core of the marquee is a motion.div that contains two copies of the children.
  // We animate the 'x' position from 0% to -50% (for a left scroll).
  // When it reaches -50%, it means the first copy is completely off-screen,
  // and the second copy is exactly where the first one started.
  // The 'loop' repeatType instantly resets the position to 0%, creating a seamless loop.

  return (
    <div className="w-full overflow-hidden py-4 bg-gray-100 dark:bg-gray-800">
      <motion.div
        className="flex"
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          ease: "linear",
          duration: duration,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {/* First copy of the content */}
        <div className="flex-shrink-0 flex items-center justify-around mx-4">
          {children}
        </div>
        {/* Second copy of the content (for the seamless loop) */}
        <div className="flex-shrink-0 flex items-center justify-around mx-4">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

// --- Helper Component for Demo Items ---
export const MarqueeItem = ({ icon, text }) => (
  <div
    className={`flex items-center space-x-2 mx-4 px-4 py-2 rounded-full border `}
  >
    {icon}
    <span className="font-semibold text-sm">{text}</span>
  </div>
);
