import React, { useEffect, useRef, useState } from "react";
import { MaskText } from "../../components/common/MaskText";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useVelocity,
} from "framer-motion";
import { medimg } from "../../../public/images/medcheck";
import Image from "next/image";
import { useScreenSize } from "../../utils/hooks";

function Medcheck() {
  const [v, setV] = useState(0);
  const [width, setWidth] = useState(0);

  const target = useRef(null);
  const screen = useScreenSize();
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target,
    offset: ["start -50vh", "end start"],
  });

  const velocity = useVelocity(scrollYProgress);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setWidth(latest);
    container?.current?.scrollTo({
      left: (latest * 100 * container.current.scrollWidth) / 100,
    });
  });

  useMotionValueEvent(velocity, "change", (latest) => setV(Math.abs(latest)));

  const multipliedVelocity = useTransform(velocity, (latest) => {
    console.log({ latest: Math.abs(Math.round(latest * 100)) });
    if (Math.abs(Math.round(latest * 42)) < 100)
      return Math.abs(Math.round(latest * 42));
  });

  const boxShadow = useMotionTemplate`0 0 10px 4px #155dfc, 0 0 30px #155dfc, 0 0 40px ${multipliedVelocity}px #155dfc`;

  return (
    <main className="w-full mt-[-250vh]">
      <section className="min-h-[250vh] ">
        <article className="h-screen sticky top-0 grid place-content-center ">
          <MaskText
            phrases={["Med-Check"]}
            className="mx-auto text-6xl text-center w-full font-black mb-6 tracking-wider "
          />
          <MaskText
            phrases={[
              "MEDCHECK is an QUIZ platform for Medical students",
              "student can make account to track his results and",
              "informations , make quizzes and ofc solve quizzes",
              "(Website not completed yet.) ",
            ]}
            className="text-center my-1.5 text-2xl  mx-auto text-[#b7b7b7] "
          />
        </article>
      </section>

      <aside ref={target} className="h-[1000vh]  max-w-full">
        <article className="h-screen grid grid-rows-[1fr_auto] sticky top-0">
          <section className="grid items-center w-full">
            <aside className="w-10/12 mx-auto bg-black/50  h-1 rounded-md  mt-10 relative">
              <div
                style={{
                  width: `${width * 110}%`,
                  boxShadow: `0 0 10px 1px #155dfc`,
                }}
                className="absolute h-1 rounded-md ease-linear bg-blue-600"
              />
              <motion.div
                style={{
                  left: `${width * 110}%`,
                  boxShadow,
                  transition: "box-shadow 0.5s linear",
                }}
                className="absolute w-3 h-3 rounded-full bg-blue-600  -translate-x-1 -translate-y-1"
              />
            </aside>
          </section>
          <section
            ref={container}
            className="Slider    overflow-x-scroll scrollnone"
          >
            <nav className="grid items-center h-full">
              <motion.article
                style={{ filter: `blur(${v * 10}px)` }}
                className="flex my-auto items-center  grid-rows-[12]"
              >
                {Object.values(medimg).map((img, i) => {
                  const [w, setW] = useState(0);
                  useEffect(() => {
                    setW(Math.floor(Math.random() * (7 - 5 + 1)) + 5);
                  }, []);
                  return (
                    <Image
                      src={img}
                      style={{
                        width: `${w}0%`,
                        scale: 1 - (v > 0.2 ? 0.2 : v),
                      }}
                      className="duration-100 ease-linear "
                    />
                  );
                })}
              </motion.article>
            </nav>
          </section>
        </article>
      </aside>
    </main>
  );
}

export default Medcheck;
