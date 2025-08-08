import React, { useRef } from "react";

import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { chat, ChatImg } from "../../../public/images/Chat/index";
import { MaskText } from "../../components/common/MaskText";
import { useScreenSize } from "../../utils/hooks";

export default function Chat() {
  return (
    <article className="relative z-30 mt-24 w-full overflow-clip">
      <aside className="mb-[-120px]">
        <MaskText
          phrases={["Chat-App"]}
          className="mx-auto text-6xl text-center w-full font-black mb-6 tracking-wider "
        />
        <MaskText
          phrases={[
            "chat-app is live chat application, user can make account",
            "make conversations send messages , see who's active ",
            "and search for other users , builded with MERN-Stack",
            "technologies , and Socket.io",
          ]}
          className="text-center my-1.5 text-2xl  mx-auto text-[#b7b7b7] "
        />
      </aside>
      <Hero />
    </article>
  );
}

const Hero = () => {
  const target = useRef(null);
  return (
    <section
      ref={target}
      style={{ height: `600vh` }}
      className="w-full realtive "
    >
      <CenterImage target={target} />
      <ParallaxImages />
    </section>
  );
};

const CenterImage = ({ target }) => {
  const { scrollYProgress } = useScroll({
    target,
    offset: ["100vh end", "end start"],
  });
  const screen = useScreenSize();

  const opacity = useTransform(scrollYProgress, [0.75, 0.9], [1, 0]);

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.6, 1.1]);
  const clip1 = useTransform(scrollYProgress, [0, 0.5], [15, -1]);
  const clipPath = useMotionTemplate`inset(${clip1}% ${clip1}%)`;
  const clip2 = useTransform(scrollYProgress, [0, 0.5], [75, 100]);
  // const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;
  const mask = useTransform(scrollYProgress, [0.65, 0.9], [0, 100]);
  const mask2 = useTransform(scrollYProgress, [0.65, 0.9], [0, 150]);
  const maskImage = useMotionTemplate`radial-gradient(circle, transparent ${mask}%, black ${mask2}%)`;
  return (
    <motion.aside
      style={{
        backgroundImage: `url("${ChatImg.src}")`,
        backgroundPosition: "center",
        clipPath,
        backgroundRepeat: "no-repeat",

        scale,
        maskImage,
      }}
      className="h-screen w-full sticky top-0 mx-auto "
    ></motion.aside>
  );
};

const ParallaxImages = () => {
  return (
    <aside className="mx-auto max-w-5xl px-4 pt-[200px]">
      {[
        { start: -200, end: 200, className: "w-1/3" },
        { start: 100, end: -100, className: "mx-auto w-2/3" },
        { start: -200, end: 200, className: "ml-auto w-1/3" },
        { start: 0, end: -500, className: "ml-24 w-5/12" },
      ].map(({ start, end, className }, i) => (
        <ParallaxImg
          src={Object.values(chat)[i]}
          start={start}
          end={end}
          className={className}
        />
      ))}
    </aside>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);
  console.log({ src });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.75, 1],
    [0, 1, 1, 0]
  );
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src.src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const H_SECTION = 1500;
