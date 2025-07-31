import { MaskText } from "../../components/common/MaskText";
import SkillsMarquee from "./SkillsMarquee";

function Skills() {
  return (
    <main className="w-full h-[200vh] bg-white">
      <nav className="min-h-screen sticky top-0 p-4 grid md:grid-rows-[auto_1fr]">
        <section className="grid md:grid-cols-[2fr_3fr] ">
          <article className="h-full mt-10">
            <MaskText
              phrases={["developer", "designer", "creator/"]}
              className="xl:text-7xl md:text-6xl text-5xl font-black uppercase"
            />
          </article>

          <article className="xl:w-10/12 mx-auto">
            <MaskText
              phrases={["Skills"]}
              className="xl:text-7xl md:text-6xl text-5xl font-black  mx-auto text-center mb-10"
            />
            <aside className=" grid-cols-3 flex  justify-around gap-12">
              <div className="space-y-1.5">
                <MaskText
                  phrases={["Languages & Tools"]}
                  className="font-bold mb-2 text-black"
                />
                <MaskText
                  phrases={[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "TypeScript",
                    "C#",
                    "MongoDb",
                    "Postman",
                    "Git",
                  ]}
                />
              </div>
              <div className="space-y-1.5">
                <MaskText
                  phrases={["Languages & Tools"]}
                  className="font-bold mb-2 text-black"
                />
                <MaskText
                  phrases={[
                    "React",
                    "Nodejs",
                    "ExpressJs",
                    "TailwindCss",
                    "MUI",
                    "Redux",
                    "FramerMotion",
                    "GSAP",
                    "Zustand",
                  ]}
                />
              </div>
              <div className="space-y-1.5">
                <MaskText
                  phrases={["Languages & Tools"]}
                  className="font-bold mb-2 text-black"
                />
                <MaskText phrases={["DSA", "OOP", "SystemDEsign"]} />
              </div>
            </aside>
          </article>
        </section>

        <SkillsMarquee />
      </nav>
    </main>
  );
}

export default Skills;
