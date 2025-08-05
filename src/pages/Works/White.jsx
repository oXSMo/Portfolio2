import React, { useRef, useState } from "react";
import { MaskText } from "../../components/common/MaskText";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { white } from "../../../public/images/White";
import Image from "next/image";

function White() {
  return (
    <main className='mt-[-225vh]  w-full font-["Spline"]'>
      <section className="h-[225vh]">
        <article className="mt-32 sticky top-32 mb-20 md:px-16 px-4">
          <MaskText
            className={
              "lg:text-8xl md:text-6xl text-4xl font-black tracking-wider mb-10"
            }
            phrases={["White-Shop /"]}
          />

          <div className="mx-auto md:w-1/2">
            <p className="md:ml-auto w-fit lg:text-2xl md:text-xl text-lg text-[#cbcbcb]">
              WHITE is an account shop where you can pay with <br />
              crypto to buy premium accounts for cheap price, you <br /> can
              make account , check for products , add to cart and <br />
              many more ( Website not completed yet. )
            </p>
          </div>
        </article>
      </section>
      <Shop />
    </main>
  );
}

const Shop = () => {
  const [reach, setReach] = useState(1);

  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start start", "end start"],
  });

  const scroll = useTransform(
    scrollYProgress,
    [0, 1],
    [0, Object.keys(white).length]
  );
  useMotionValueEvent(scroll, "change", (latest) =>
    setReach(latest < 8 ? latest : 8)
  );

  console.log(reach);

  return (
    <section className="min-h-screen grid grid-cols-[1fr_4fr] gap-8 w-full px-10">
      <article className="overflow-y-hidden h-[15vw] sticky top-20 grid items-center mx-auto w-fit">
        <aside className="flex gap-2 text-[15vw] font-black [line-height:1]">
          <h1>0</h1>{" "}
          <div
            style={{ transform: `translateY(-${reach * 15}vw)` }}
            className="flex flex-col"
          >
            {Object.keys(white).map((_, i) => (
              <h1>{i + 1}</h1>
            ))}
          </div>
        </aside>
      </article>
      <article
        style={{ height: `${Object.keys(white).length}00vh` }}
        ref={target}
        className=" relative z-10"
      >
        {[
          "Home Page",
          "Login",
          "SignUp",
          "FAQ",
          "Cart Page",
          "Sequrity/Info",
          "Sequrity/Notification",
          "Support Attention",
          "Support",
        ].map((title, i) => (
          <IMG
            img={Object.values(white)[i]}
            title={title}
            i={i}
            reach={reach}
          />
        ))}
      </article>
    </section>
  );
};

const IMG = ({ title, i, reach, img }) => {
  return (
    <article className="h-screen sticky top-0 flex flex-col justify-center duration-300">
      <Image src={img} />
      <h1
        style={{ opacity: reach > i + .3 ? 0 : 1 }}
        className="text-4xl font-bold tracking-wide mt-4"
      >
        {title}
      </h1>
    </article>
  );
};

export default White;
