import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";

import CoolMarquee from "../../components/common/CoolMarquee";
import { fadeIn } from "../../utils/motion";
import { MaskText } from "../../components/common/MaskText";
import { FaTelegram } from "react-icons/fa";
import { useRaiseUp } from "../../utils/hooks";

function Contact() {
  const [Scale, setScale] = useState(0);

  const target = useRef(null);

  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);

  const scale = useTransform(scrollYProgress, [0, 0.8, 1], [100, 2, 0]);
  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  const txtScale = useTransform(scrollYProgress, [0.75, 1], [3, 1]);
  useMotionValueEvent(txtScale, "change", (latest) => setScale(latest));
  useMotionValueEvent(y, "change", (latest) => console.log({ latest }));

  return (
    <>
      <main ref={target} className="h-[400vh] mt-[-300vh] w-full">
        <section
          className={`w-full grid  h-screen overflow-clip items-center  sticky top-0 z-10   text-white p-6  font-["Spline"]`}
        >
          {/* <div className="w-full h-full">
          <motion.h1
            style={{
              scale: Scale,
              y: (Scale - 1) * -150,
              x: (Scale - 1) * -150,
            }}
            className="md:text-[9vw] text-[16vw] tracking-[-0.2vw] uppercase font-black"
          >
            EMAIL
          </motion.h1>
        </div> */}
          <motion.div
            style={{ scale, opacity }}
            className={`grid grid-cols-[1fr_auto_1fr] text-5xl font-black font-sans `}
          >
            <h1 className="justify-self-end">CON</h1>
            <h1 className="w-fit">T</h1>
            <h1 className="justify-self-start">ACT</h1>
          </motion.div>
        </section>
      </main>

      {/* CONTACT  */}
      <FooterContact />
    </>
  );
}

const FooterContact = () => {
  const target2 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: target2,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  return (
    <motion.nav ref={target2} className="min-h-[200vh] ">
      <motion.main style={{ y }} className="min-h-screen w-full sticky top-5">
        <section className=" flex flex-col  top-0 ">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.8 }}
          >
            <CoolMarquee
              duration={17}
              containerClassName="[mask-image:linear-gradient(to_right,transparent,black_30%,black_70%,transparent)]"
            >
              <div className="h-24 border-b border-t flex gap-14 items-center px-6 border-white">
                <h1 className="text-5xl font-bold">Open To Work</h1>{" "}
                <div className="w-6 aspect-square rounded-full bg-white" />
              </div>
            </CoolMarquee>
          </motion.div>

          <motion.aside
            // {...fadeIn({ delay: 0.4 })}
            className="h-full flex-1 w-full my-32 font-bold tracking-wide px-10"
          >
            <MaskText
              className="text-2xl uppercase  mb-6"
              phrases={["Contact"]}
            />
            <MaskText
              className="text-6xl"
              phrases={[
                "Interested in collaboration? Let's connect and create togather!",
              ]}
            />
          </motion.aside>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.8 }}
          >
            <CoolMarquee
              direction="right"
              containerClassName="[mask-image:linear-gradient(to_right,transparent,black_30%,black_70%,transparent)]"
            >
              <div className="h-24 border-b border-t flex gap-14 items-center px-6 border-white">
                <h1 className="text-5xl font-bold">Contact Me</h1>{" "}
                <div className="w-6 aspect-square rounded-full bg-white" />
              </div>
            </CoolMarquee>
          </motion.div>
        </section>
        <section className="min-h-[50vh] w-full my-20 px-12">
          <article className="flex gap-16 text-3xl font-semibold flex-wrap">
            <LINK
              icon={<MdOutlineMailOutline />}
              title="Email"
              text="soso9512368740@gmail.com"
            />
            <LINK
              icon={<MdOutlinePhone />}
              title="Phone"
              text="+213562133724"
            />
            <LINK
              icon={<FaTelegram />}
              title="Telegram"
              text="Username: oXSMo"
              link="https://t.me/ooXSMoo"
            />
          </article>
        </section>
      </motion.main>
    </motion.nav>
  );
};

const LINK = ({ icon, title, text, link }) => {
  return (
    <div
      onClick={() => {
        link && window.open(link, "_blank");
      }}
      className="cursor-pointer"
    >
      <div className="flex gap-3 text-shadow">
        {React.cloneElement(icon, { className: "translate-y-1" })} {title}
      </div>
      <p className="text-base mt-2 text-shadow">{text}</p>
    </div>
  );
};

export default Contact;
