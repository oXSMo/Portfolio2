import { useMousePosition, useSleep } from "../utils/hooks";
import { Noto_Serif, Libertinus_Mono, Spline_Sans } from "next/font/google";
import Navbar from "../components/layouts/Navbar";
import TopSection from "./Home/TopSection";
import ReactLenis from "lenis/react";
import WisdomSection from "./Home/WisdomSection";
import BeltSection from "./Home/BeltSection";
import EnterSection from "./Home/EnterSection";
import Contact from "./Home/Contact";
import { useRef } from "react";
import Inner from "../components/layouts/Inner";

const davidLibre = Noto_Serif({
  subsets: ["latin"], // Preload Latin characters
  weight: "400",
  variable: "Noto",
  // Required: Choose from 400, 500, 700
});
const Libertinus = Libertinus_Mono({
  subsets: ["latin"], // Preload Latin characters
  weight: "400", // Required: Choose from 400, 500, 700
});
const SplineSans = Spline_Sans({
  subsets: ["latin"],
  display: "swap",

  variable: "Spline",
});

export default function Home() {
  const ref = useRef(null);

  // const { size: width, x, y } = useMousePosition(1);

  const isReady = useSleep(4000);
  return (
    <Inner>
      <ReactLenis root>
        <div
          className={` ${davidLibre.className} ${
            Libertinus.className
          }  w-full overflow-clip ${!isReady && "h-screen !cursor-auto"}`}
        >
          {/* <Navbar /> */}

          <TopSection />
          <WisdomSection />
          <BeltSection />

          <EnterSection />

          <Contact />
        </div>
      </ReactLenis>
    </Inner>
  );
}

export const SplineClass = SplineSans.className;
export const NotoClass = davidLibre.className;
