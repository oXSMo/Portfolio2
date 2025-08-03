import { motion } from "framer-motion";
import Gif from "../../../public/top.gif";
import CursorHover from "../../components/common/CursorHover";
import { EncryptButton } from "../../components/common/EncryptText";
import { useRef } from "react";
import { useRaiseUp, useScrollOpacity } from "../../utils/hooks";

function TopSection() {
  const target = useRef(null);

  const { sm, md, lg } = useRaiseUp(target, 0.5, 1, 5);

  const opacity = useScrollOpacity(target, 0.5, 0.75, 1, 0);

  const fadeIn = (duration = 0.7, delay = 0.2) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration, delay },
  });

  return (
    <main
      ref={target}
      className="h-screen  __className_2b7985 grid grid-rows-[70px_1fr_auto]"
    >
      <div />
      <section className="h-full relative w-96  mx-auto  grid place-content-center">
        <article className="space-y-6 scale-95 absolute pointer-events-none top-1/2 w-full [&_span]:text-[#9d9d9d] z-20 -translate-y-1/2">
          <aside className="grid grid-cols-3 w-full">
            <motion.h1 style={{ y: md }} {...fadeIn(0.5, 2)}>
              Sohaib.M
            </motion.h1>
            <motion.h2
              style={{ y: sm }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-center "
            >
              ( Full-Stack )
            </motion.h2>
            <motion.p
              style={{ y: md }}
              {...fadeIn(0.5, 2.2)}
              className="text-end"
            >
              Developer
            </motion.p>
          </aside>

          <aside className="flex justify-between">
            {["MERN", "( ALGERIA )", "NEXT", "Motion"].map((e, i) => (
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
            {["Original", "( Isabel Moranta )", "2025"].map((e, i) => (
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

      <motion.div
        style={{ opacity, y: lg }}
        className="flex gap-1 -space-x-2 items-center justify-center "
      >
        <span>(</span>{" "}
        <div className="w-24">
          <EncryptButton TxT="Scroll" symbols className="text-white/50" />{" "}
        </div>
        <span>)</span>
      </motion.div>
    </main>
  );
}

export default TopSection;
