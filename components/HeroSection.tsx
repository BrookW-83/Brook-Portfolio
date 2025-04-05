import { Hero } from "@/data/data";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center">
      <p className="text-lg">{Hero.pTag}</p>
      <h1 className="text-3xl font-bold">{Hero.hTag}</h1>
      <h2 className="text-xl text-gray-600">{Hero.hTag2}</h2>
      <p className="max-w-xl mt-4">{Hero.pTag2}</p>
      <Button className="font-semibold w-36 px-9 py-6 mt-6 flex justify-center ease-in-out items-center group transition-all duration-300 hover:shadow-[0px_0_15px_rgba(255,255,255,0.4)] hover:scale-105">
        {Hero.button}
        <span className="ml-1 transition-all group-hover:-translate-x-1 duration-300">
          <FaArrowRightLong />
        </span>
      </Button>
    </div>
  );
};

export default HeroSection;
