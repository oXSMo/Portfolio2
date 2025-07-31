import CursorHover from "../../components/common/CursorHover";
import { useRaiseUp } from "../../utils/hooks";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

function WisdomSection() {
  const target = useRef(null);
  const { lg } = useRaiseUp(target, 0, 1, 5);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target,
    offset: ["100px end", "end start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress((latest * 150 * TXT.length) / 100);
  });

  const TXT = "Turn Ideas Into Seamless Digital Experiences";

  return (
    <motion.section
      style={{ y: lg }}
      ref={target}
      className={`md:h-[700vh] h-[400vh]  w-full md:text-[10vw] text-[15vw] font-serif [&_span]:font-thin  md:leading-[11vw] leading-[17vw] px-4 py-6  [&_span]:relative [&_span]:inline-block [&_aside]:flex [&_aside]:flex-wrap [&_aside]:w-fit [&_span]:group-hover:[text-shadow:_0_0_10px_#fff,_0_0_20px_#fff,_0_0_30px_#fff]`}
    >
      <article className="sticky top-20  min-h-screen grid items-center">
        <div>
          <CursorHover Size={120}>
            {"Turn Ideas".split("").map((c, i) => {
              return c === " " ? (
                <>&nbsp;</>
              ) : (
                <>
                  {i == 10 ? <br /> : <></>}
                  <motion.span
                    style={{
                      opacity: i < progress ? "1" : "0",
                      y: i < progress ? "1px" : "90px",
                      transition: `${i * 10 + 300}ms`,
                      textShadow:
                        i + 0 < progress
                          ? "none"
                          : " 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff",
                    }}
                    className=""
                  >
                    {c}
                  </motion.span>
                </>
              );
            })}
          </CursorHover>

          <CursorHover Size={120}>
            {"Into Seamless".split("").map((c, i) => {
              return c === " " ? (
                <>&nbsp;</>
              ) : (
                <>
                  {i == 10 ? <br /> : <></>}
                  <motion.span
                    style={{
                      opacity: i + 10 < progress ? "1" : "0",
                      y: i + 10 < progress ? "1px" : "90px",
                      transition: `${(i + 10) * 10 + 300}ms`,
                      textShadow:
                        i + 10 < progress
                          ? "none"
                          : " 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff",
                    }}
                  >
                    {c}
                  </motion.span>
                </>
              );
            })}
          </CursorHover>
          <CursorHover Size={120}>
            {"Digital".split("").map((c, i) => {
              return c === " " ? (
                <>&nbsp;</>
              ) : (
                <>
                  {i == 10 ? <br /> : <></>}
                  <motion.span
                    style={{
                      opacity: i + 23 < progress ? "1" : "0",
                      y: i + 23 < progress ? "1px" : "90px",
                      transition: `${(i + 23) * 10 + 300}ms`,
                      textShadow:
                        i + 23 < progress
                          ? "none"
                          : " 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff",
                    }}
                  >
                    {c}
                  </motion.span>
                </>
              );
            })}
          </CursorHover>
          <CursorHover Size={120}>
            {"Experiences".split("").map((c, i) => {
              return c === " " ? (
                <>&nbsp;</>
              ) : (
                <>
                  {i == 10 ? <br /> : <></>}
                  <motion.span
                    style={{
                      opacity: i + 30 < progress ? "1" : "0",
                      textShadow:
                        i + 30 < progress
                          ? "none"
                          : " 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff",
                      y: i + 30 < progress ? "1px" : "90px",
                      transition: `${(i + 30) * 10 + 300}ms`,
                    }}
                  >
                    {c}
                  </motion.span>
                </>
              );
            })}
          </CursorHover>
        </div>
      </article>
    </motion.section>
  );
}

export default WisdomSection;
