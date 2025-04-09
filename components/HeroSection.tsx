import { Button } from "@/components/ui/button";
import { HeroSectionData } from "@/data/data";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col justify-center">
      <p className="text-lg">{HeroSectionData.pTag}</p>
      <h1 className="text-3xl font-bold">{HeroSectionData.hTag}</h1>
      <h2 className="text-xl text-gray-600">{HeroSectionData.hTag2}</h2>
      <p className="max-w-xl mt-4">{HeroSectionData.pTag2}</p>
      <Button className="font-semibold w-36 px-9 py-6 mt-6 flex justify-center ease-in-out items-center group transition-all duration-300 hover:shadow-[0px_0_15px_rgba(255,255,255,0.4)] hover:scale-105">
        {HeroSectionData.button}
        <span className="ml-1 transition-all group-hover:-translate-x-1 duration-300">
          <FaArrowRightLong />
        </span>
      </Button>
    </section>
  );
};

export default Hero;
