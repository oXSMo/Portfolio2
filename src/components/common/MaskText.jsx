import { useRef } from "react";
import { motion } from "framer-motion";

export function MaskText({ phrases, className, up = false }) {
  const body = useRef(null);

  return phrases.map((phrase, index) => {
    return (
      <div key={index} className={`overflow-hidden h-fit ${className}`}>
        <motion.p
          className="m-0"
          custom={index}
          //   variants={animation}
          initial={{ y: up ? "100%" : "-100%" }}
          whileInView={{
            y: "0",
            transition: {
              duration: 1,
              ease: [0.33, 1, 0.68, 1],
              delay: 0.1 * index,
            },
          }}
        >
          {phrase}
        </motion.p>
      </div>
    );
  });
}
