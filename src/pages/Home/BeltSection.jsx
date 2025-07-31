import { EncryptButton } from "../../components/common/EncryptText";
import White from "../../../public/images/white.gif";
import Sarava from "../../../public/images/sarava.gif";
import Medcheck from "../../../public/images/medcheck.gif";
import Portfolio from "../../../public/images/portfolio.gif";
import Chat from "../../../public/images/chat.gif";
import Fix from "../../../public/images/fixiiit.gif";
import { useRaiseUp, useScreenSize } from "../../utils/hooks";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function BeltSection() {
  const target = useRef(null);
  const { md } = useRaiseUp(target, 0, 1, 5);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"],
  });

  const size = useScreenSize();

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    size.width > 760 ? ["-50%", "5%"] : ["0%", "-500%"]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.main
      ref={target}
      style={{ y: md }}
      className="overflow-clip  z-20 relative"
    >
      <motion.h1
        style={{ opacity }}
        className="mx-auto w-fit mb-8 text-5xl uppercase"
      >
        FEatured WorK
      </motion.h1>
      <motion.section
        style={{ x, opacity }}
        className="flex md:w-[200vw] w-[100vw] gap-8 duration-200 ease-linear [&_img]:object-fill  md:[&_img]:w-[15vw] md:[&_img]:h-[7vw] [&_img]:w-[60vw] [&_img]:h-[30vw]"
      >
        {[...Array(2)].map(() => (
          <>
            <img src={Portfolio.src} />
            <img src={Chat.src} />
            <img src={Medcheck.src} />
            <img src={White.src} />
            <img src={Sarava.src} />
            <img src={Fix.src} />
            <div className="grid place-content-center ">
              <div className="md:w-[12vw] w-[30vw] mx-auto text-center text-nowrap">
                <span>(</span>
                <div className="text-[#b8b8b8] inline-block">
                  <EncryptButton TxT="Projects" />
                </div>
                <span>)</span>
              </div>
            </div>
          </>
        ))}
      </motion.section>
    </motion.main>
  );
}

export default BeltSection;
