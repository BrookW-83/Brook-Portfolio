import { About } from "@/data/data";
import AnimatedCoder from "./Animated";

const AboutSection = () => {
  return (
    <section className="flex flex-row items-center justify-between">
      {/* Left side: About text */}
      <div className="flex flex-1 flex-col">
        <h2 className="text-2xl font-bold">{About.hTag}</h2>
        <h3 className="text-xl text-gray-600">{About.h1Tag}</h3>
        <p className="max-w-xl mt-4">{About.pTag2}</p>
      </div>

      {/* Right side: Animated coder image with eyes following the mouse */}
      <div className="flex flex-1">
        <AnimatedCoder />
      </div>
    </section>
  );
};

export default AboutSection;
