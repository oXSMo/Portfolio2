import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiPostman } from "react-icons/si";
import CoolMarquee from "../../components/common/CoolMarquee";

function SkillsMarquee() {
  return (
    <CoolMarquee
      duration={20}
      containerClassName="text-4xl  md:my-0 my-4 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
    >
      {[
        <>
          <FaHtml5 /> HTML
        </>,
        <>
          <FaCss3Alt /> CSS
        </>,
        <>
          <FaJs /> JavaScript
        </>,
        <>
          <BiLogoTypescript /> TypeScript
        </>,
        <>
          <FaReact /> React
        </>,
        <>
          <BiLogoMongodb /> MongoDb
        </>,
        <>
          <SiPostman /> Postman
        </>,
        <>
          <SiNextdotjs /> Next
        </>,
      ].map((e) => (
        <div className="flex gap-2 items-center font-black mx-6 [&_svg]:text-[45px] text-3xl">
          {e}
        </div>
      ))}
    </CoolMarquee>
  );
}

export default SkillsMarquee;
