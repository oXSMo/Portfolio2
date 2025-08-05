import React, { useRef } from "react";
import Gif from "../../../public/top.gif";
import { motion } from "framer-motion";
import { useRaiseUp } from "../../utils/hooks";
import CursorHover from "../../components/common/CursorHover";

function TopSection() {
  const target = useRef(null);

  const { sm, md, lg } = useRaiseUp(target, 0.5, 1, 5);

  //   const opacity = useScrollOpacity(target, 0.5, 0.75, 1, 0);

  const fadeIn = (duration = 0.7, delay = 0.2) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration, delay },
  });

  return (
    <main
      ref={target}
      className={`h-screen  __className_2b7985 grid grid-rows-[70px_1fr_auto] font-["Noto"]`}
    >
      <div />
      <section className="h-full relative w-96  mx-auto  grid place-content-center">
        <article className="space-y-6 scale-95 absolute pointer-events-none top-1/2 w-full [&_span]:text-[#9d9d9d] z-20 -translate-y-1/2">
          <aside className="flex justify-between">
            {["Work", "( A Selection )", "2024"].map((e, i) => (
              <motion.p
                style={{ y: i % 2 === 0 ? sm : md }}
                className={i === 1 ? "text-[#9d9d9d]" : ""}
                {...fadeIn(0.5, 2.2 + Math.random() * (0.9 - 0.1) + 0.1)}
              >
                {e}
              </motion.p>
            ))}
          </aside>
          <aside className="flex justify-around">
            {["( 5 )", "( Projects )", "Front", "&", "Back"].map((e, i) => (
              <motion.p
                style={{ y: i === 1 ? sm : md }}
                className={i === 1 ? "text-[#9d9d9d]" : ""}
                {...fadeIn(0.5, 3 + Math.random() * (0.9 - 0.1) + 0.1)}
              >
                {e}
              </motion.p>
            ))}
          </aside>
        </article>
        <motion.div
          initial={{ clipPath: "inset(0% 100%)" }}
          animate={{
            clipPath: "inset(0% 0%)",
            transition: {
              delay: 0.3,
              duration: 1.5,
              ease: "easeInOut",
              type: "tween",
            },
          }}
          style={{ y: lg }}
          viewport={{ once: true }}
        >
          <CursorHover Size={60}>
            <img
              src={Gif.src}
              className="w-48 h-64 max-h-fit opacity-70  object-cover"
            />
          </CursorHover>
        </motion.div>
      </section>
      <div />
    </main>
  );
}

export default TopSection;
