import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "./Navbar";

function Inner({ children }) {
  const animte = (variants, custom = null) => ({
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
    custom,
  });

  const expand = {
    initial: { top: 0 },
    enter: (i) => {
      return {
        top: "100vh",
        transition: {
          duration: 0.7,
          delay: 0.05 * i,
          ease: [0.215, 0.61, 0.355, 1],
        },
        transitionEnd: { height: "0", top: "0" },
      };
    },
    exit: (i) => ({
      height: "100vh",

      transition: {
        duration: 0.7,

        delay: 0.05 * i,

        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };
  return (
    <main>
      <Navbar />
      <section className=" transition   h-screen  z-[9999]  w-screen fixed flex top-0 left-0 pointer-events-none [&_div]:h-full [&_div]:w-full   [&_div]:relative">
        {[...Array(6)].map((_, i) => (
          <motion.div
            {...animte(expand, 6 - i)}
            key={i}
            className="bg-white "
          ></motion.div>
        ))}
      </section>
      {children}
      <nav className="h-screen  fixed z-0 pointer-events-none  top-0  inset-[-200%_-200%] scale-y-125 opacity-15 background" />
    </main>
  );
}

// function Inner({ children }) {
//   const anime = (variants) => ({
//     initial: "initial",
//     animate: "enter",
//     exit: "exit",
//     variants,
//   });

//   const opacity = {
//     initial: { opacity: 0 },
//     enter: {
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//     exit: { opacity: 1 },
//   };

//   const perspective = {
//     initial: {
//       scale: 1,

//       y: 0,
//     },

//     enter: {
//       scale: 1,

//       y: 0,
//     },

//     exit: {
//       scale: 0.9,

//       y: -150,

//       opacity: 0.5,

//       transition: {
//         duration: 1.2,

//         ease: [0.76, 0, 0.24, 1],
//       },
//     },
//   };

//   const slide = {
//     initial: { top: "100vh" },
//     enter: { top: "100vh" },
//     exit: {
//       top: "0",
//       transition: {
//         duration: 1,

//         ease: [0.76, 0, 0.24, 1],
//       },
//     },
//   };

//   return (
//     <main>
//       <motion.div
//         {...anime(slide)}
//         className="fixed z-50 top-0 left-0 bg-[#0A0A0A] w-screen h-screen"
//       />
//       <motion.section {...anime(perspective)}>
//         <motion.aside {...anime(opacity)}>
//           <header className="gap-4 flex justify-center [&_a]:border [&_a]:border-white [&_a]:rounded-md [&_a]:w-24 [&_a]:py-2 text-center font-bold py-8">
//             <Link href={"/"} className="">
//               Home
//             </Link>
//             <Link href={"/idk"} className="">
//               IDK
//             </Link>
//             <Link href={"/any"} className="">
//               Any
//             </Link>
//           </header>
//           {children}
//         </motion.aside>
//       </motion.section>
//     </main>
//   );
// }

export default Inner;
