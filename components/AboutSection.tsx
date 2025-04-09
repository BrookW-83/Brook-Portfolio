"use client";
import { AboutSectionData, HeroSectionData } from "@/data/data";
import AnimatedCoder from "./Animated";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row items-center  justify-around pt-32 xl:pt-0"
    >
      {/* Left side: About text */}
      <motion.div
        className="flex flex-3 flex-col"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold">{AboutSectionData.hTag}</h2>
        <h3 className="text-xl text-gray-600">{AboutSectionData.h1Tag}</h3>
        <p className="max-w-xl mt-4">{AboutSectionData.pTag2}</p>

        <Link href="#contact" passHref>
          <Button className="bg-custom02 font-semibold w-36 px-9 py-6 mt-6 flex justify-center ease-in-out items-center group transition-all duration-300 hover:shadow-[0px_0_15px_rgba(255,255,255,0.4)] hover:scale-105">
            {HeroSectionData.button}
            <span className="ml-1 transition-all group-hover:-translate-x-1 duration-300">
              <FaArrowRightLong />
            </span>
          </Button>
        </Link>
      </motion.div>

      {/* Right side: Animated coder image with eyes following the mouse */}
      <motion.div
        className="flex flex-2 h-full w-full md:h-2/3 md:w-2/3"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <AnimatedCoder />
      </motion.div>
    </section>
  );
};

export default AboutSection;
