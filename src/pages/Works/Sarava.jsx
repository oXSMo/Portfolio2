import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import img1 from "../../../public/images/sarava1.png";
import img2 from "../../../public/images/sarava2.png";
import img3 from "../../../public/images/sarava3.png";
import img4 from "../../../public/images/sarava4.png";
import img5 from "../../../public/images/sarava5.png";
import img6 from "../../../public/images/sarava6.png";
import img7 from "../../../public/images/sarava7.png";
import ReactLenis from "lenis/react";
import { MaskText } from "../../components/common/MaskText";

function Sarava() {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 0.7], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 0.7], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 0.7], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 0.7], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 0.7], [1, 7]);

  const mask = useTransform(scrollYProgress, [0.85, 1], [0, 100]);
  const mask2 = useTransform(scrollYProgress, [0.85, 1], [0, 150]);
  const maskImage = useMotionTemplate`linear-gradient(to top, transparent ${mask}%, black ${mask2}%)`;

  useMotionValueEvent(maskImage, "change", (latest) => console.log({ latest }));

  const images = [
    {
      src: img2,
      scale: scale5,
      position: {
        top: "-30vh",
        left: "5vw",
        width: "30vw",
        height: "30vh",
      },
    },
    {
      src: img3,
      scale: scale5,
      position: { top: "-10vh", left: "-25vw", width: "20vw", height: "45vh" },
    },
    {
      src: img4,
      scale: scale6,
      position: { top: "27.5vh", left: "5vw", width: "23vw", height: "20vh" },
    },
    {
      src: img5,
      scale: scale8,
      position: {
        top: "27.5vh",
        left: "-22.5vw",
        width: "30vw",
        height: "25vh",
      },
    },
    {
      src: img6,
      scale: scale9,
      position: {
        top: "22.5vh",
        left: "25vw",
        width: "15vw",
        height: "15vh",
      },
    },
    {
      src: img7,
      scale: scale5,
      position: {
        top: "0vh",
        left: "22.5vw",
        width: "15vw",
        height: "25vh",
      },
    },
  ];

  return (
    <ReactLenis root>
      <MaskText
        phrases={["Sarava"]}
        className="mx-auto text-6xl mb-6 text-center w-full font to-black tracking-wider "
      />
      <MaskText
        phrases={[
          "SARAVA is landing page application and dashboard for crypto trading bot",
          "on telegram, user can make account, and check latest informations about",
          "his account and crypto market ( Website not completed yet. )",
        ]}
        className="text-center my-1.5 text-2xl  mx-auto text-[#b7b7b7] "
      />

      <main ref={target} className="h-[750vh] overflow-clip relative z-40 mt-8">
        <section className="sticky top-0 h-[100vh] ">
          {images.map(
            ({ src, scale, position: { top, left, width, height } }, i) => (
              <motion.aside
                style={{ scale }}
                key={i}
                className="w-full flex justify-center items-center h-full absolute top-0"
              >
                <div
                  style={{ top, left, width, height }}
                  className="w-[25vw] h-[25vh] relative "
                >
                  <Image
                    src={src}
                    fill
                    placeholder="blur"
                    alt="image0"
                    className="object-cover overflow-hidden"
                  />
                </div>
              </motion.aside>
            )
          )}

          <motion.aside
            style={{
              maskImage,
            }}
            className="w-full flex justify-center items-center h-full absolute top-0"
          >
            <motion.div
              style={{ scale: scale4 }}
              className="w-[25vw] h-[25vh] relative"
            >
              <Image
                src={img1}
                fill
                placeholder="blur"
                alt="image0"
                className="object-cover  relative z-40"
              />
            </motion.div>
          </motion.aside>
        </section>
      </main>
    </ReactLenis>
  );
}

export default Sarava;
