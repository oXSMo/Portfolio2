import { useMousePosition, useSleep } from "../utils/hooks";
import { Noto_Serif, Libertinus_Mono, Spline_Sans } from "next/font/google";
import Navbar from "../components/layouts/Navbar";
import TopSection from "./Home/TopSection";
import ReactLenis from "lenis/react";
import WisdomSection from "./Home/WisdomSection";
import BeltSection from "./Home/BeltSection";
import EnterSection from "./Home/EnterSection";
import Contact from "./Home/Contact";

const davidLibre = Noto_Serif({
  subsets: ["latin"], // Preload Latin characters
  weight: "400", // Required: Choose from 400, 500, 700
});
const Libertinus = Libertinus_Mono({
  subsets: ["latin"], // Preload Latin characters
  weight: "400", // Required: Choose from 400, 500, 700
});
const SplineSans = Spline_Sans({
  subsets: ["latin"],
  display: "swap",

  variable: "--font-spline-sans",
});

export default function Home() {
  const { size: width, x, y } = useMousePosition(1);

  const isReady = useSleep(4000);
  return (
    <ReactLenis root>
      <div
        className={` ${davidLibre.className} ${
          Libertinus.className
        }  w-full overflow-clip ${!isReady && "h-screen !cursor-auto"}`}
      >
        <Navbar />

        <TopSection />
        <WisdomSection />
        <BeltSection />

        <EnterSection />

        <Contact />
      </div>
      <nav className="h-screen  fixed z-0 pointer-events-none  top-0  inset-[-200%_-200%] scale-y-125 opacity-15 background" />
    </ReactLenis>
  );
}

export const SplineClass = SplineSans.className;
