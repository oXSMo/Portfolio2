import React, { useEffect, useRef, useState } from "react";
import { SplineClass } from "..";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useScreenSize } from "../../utils/hooks";
import { MaskText } from "../../components/common/MaskText";
import { EncryptButton } from "../../components/common/EncryptText";
import Skills from "./Skills";

function EnterSection() {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["100vh end", "end start"],
  });

  const [Scale, setScale] = useState(1);

  const screen = useScreenSize();
  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7],
    [0, 1, screen.width > 680 ? 20 : 50]
  );

  const txtScale = useTransform(scrollYProgress, [0.1, 0.5], [1, 3]);
  useMotionValueEvent(txtScale, "change", (latest) => setScale(latest));
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  const clip1 = useTransform(scrollYProgress, [0.6, 0.9], [50, -50]);
  const clipPath = useMotionTemplate`inset(0% ${clip1}%)`;

  const XY = (Scale - 1) * -(screen.width > 700 ? 15 : 30);

  return (
    <main className={`w-full ${SplineClass}`}>
      <nav
        ref={target}
        className="md:min-h-[600vh] min-h-[300vh] relative z-10"
      >
        <article
          className={`h-screen grid sticky top-0 grid-rows-3 p-4 font-sans md:text-[9vw] text-[16vw] tracking-[-0.2vw] uppercase font-black `}
        >
          <motion.h2
            initial={{ x: "-25vw" }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              scale: Scale,
              y: `${XY}vw`,
              x: `${XY}vw`,
            }}
            className=" grid place-content-start"
          >
            Who I'am &nbsp; I{" "}
          </motion.h2>
          <motion.h1
            style={{ scale, opacity }}
            className="grid place-content-center relative z-20"
          >
            <div className="grid grid-cols-[1fr_auto_1fr] text-white">
              <h1 className="justify-self-end">EN</h1>
              <h2 className="justify-self-center">T</h2>
              <h3 className="justify-self-start">ER</h3>
            </div>
          </motion.h1>
          <motion.h2
            initial={{ x: "25vw" }}
            whileInView={{ x: "0vw", transition: { duration: 0.5 } }}
            style={{
              scale: Scale,
              y: `${XY * -1}vw`,
              x: `${XY * -1}vw`,
            }}
            className="text-end grid place-content-end"
          >
            What i'm doing
          </motion.h2>
        </article>

        <motion.section
          style={{
            clipPath,
          }}
          className="sticky top-0 h-screen w-screen bg-white "
        ></motion.section>
      </nav>
      <WhiteSection />
    </main>
  );
}

////////!     WHITE SCTION     !////////

const WhiteSection = () => {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start start", "end start"],
  });

  const value = useTransform(scrollYProgress, [0, 0.5], [0, 50]);
  const clipPath = useMotionTemplate`inset(0 ${value}%  )`;

  return (
    <motion.nav className=" w-full mb-96   relative z-10  pt-0 text-[#1f1f1f] ">
      <section className="h-[200vh] bg-white px-4">
        <article className="h-screen sticky top-0 flex flex-col justify-center ">
          <MaskText
            phrases={["What I Do"]}
            className="font-bold md:text-[8vw] text-5xl"
          />

          <aside className="w-10/12 h-40 grid md:grid-cols-[1fr_1fr_2fr] mt-6">
            <div className="inline-block col-span-2 md:my-0 my-4 md:justify-self-end text-[#353535] pr-12 md:text-[1.8vw] text-lg">
              (
              <EncryptButton TxT="SERVICES" className=" " />)
            </div>

            <aside>
              <MaskText
                phrases={[
                  "I specialize in  building full-stack web applications",
                  "that are fast, reliable, anduser-friendly. With a",
                  "solid foundation in both frontend and backend",
                  "technologies ,I help bring ideas tolife whether",
                  "it's forabusiness, astartup, or a product team.",
                ]}
                className="font-bold md:text-[1.8vw] text-lg"
              />
            </aside>
          </aside>
        </article>
      </section>
      <article className="bg-white ">
        <section className="sticky top-0 ">
          {[
            {
              title: "Full-Stack Development",
              description:
                "From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.",
              skills: [
                "React, Node.js, Express.js",
                "REST APIs, MongoDb",
                "Git, GitHub, Postman",
              ],
            },
            {
              title: "UI/UX & Frontend",
              description:
                "Design is more than looks — it’s about clarity and connection. I design and develop clean, responsive interfaces that feel intuitive across devices. My focus is on clarity, accessibility, and seamless user experiences.",
              skills: [
                "NextJs, TailwindCSS, Framer-Motion",
                "Figma to Code",
                "HTML, CSS, JavaScript",
              ],
            },
            {
              title: "Optimization",
              description:
                "Beyond handling data, I’m driven by the challenge of turning complex raw inputs into reliable, usable systems. I enjoy designing pipelines that power insights and apply core CS principles to build for scale, speed, and stability.",
              skills: [
                "Data Structures & Algorithms",
                "DBMS, OOP, OS Fundamentals",
                "Data Pipelines, ETL, and Scalability",
              ],
            },
          ].map((e, i) => (
            <Card {...e} i={i} />
          ))}
        </section>
      </article>

      <Skills />

      <motion.section ref={target} className="h-[300vh]   w-full">
        <motion.article
          style={{ clipPath }}
          className="h-screen bg-white  sticky top-0"
        ></motion.article>
      </motion.section>
    </motion.nav>
  );
};

////////!     CARD     !////////

const Card = ({ i, title, description, skills }) => {
  const [h, setH] = useState(0);

  const ref = useRef(null);
  const size = useScreenSize();
  useEffect(() => {
    if (ref.current) {
      // Access the offsetHeight property from the element's 'current' value
      setH(ref.current.offsetHeight);
    }
  }, [ref, size.width]);

  return (
    <article
      style={{
        top: `${80 + i * h}px`,
      }}
      className="bg-white h-[120vh] px-4 sticky top-0 border-t border-black/80"
    >
      <header className="md:grid flex gap-2 grid-cols-5 xl:text-6xl lg:text-5xl md:text-4xl text-[26px]  font-bold tracking-wide">
        <div className="col-span-2 py-4">
          <MaskText phrases={[`(0${i + 1})`]} />
        </div>
        {/* <h1 className="">(0{i + 1})</h1> */}
        <aside className="col-span-3">
          <div ref={ref} className="py-5">
            {title}
          </div>

          <p className="text-[#202020e6] md:text-lg text-base md:w-7/12">
            {description}
          </p>

          <div className="">
            {skills.map((e, i) => (
              <aside
                className={`flex gap-5 items-center py-4 ${
                  i !== 2 && "border-black/80 border-b"
                }`}
              >
                <h1 className="text-lg">(0{i + 1})</h1>
                <p className="xl:text-3xl lg:text-2xl text-xl">{e}</p>
              </aside>
            ))}
          </div>
        </aside>
      </header>
    </article>
  );
};

export default EnterSection;
