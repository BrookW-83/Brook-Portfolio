import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import AboutSection from "@/components/AboutSection";
import Experience from "@/components/Experience";
import ProjectSection from "@/components/ProjectSection";
import FoodAppCard from "@/components/FoodApp";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col font-mono gap-y-12 [&>*]:min-h-[90vh]">
      <HeroSection />
      {/* <FoodAppCard /> */}
      <AboutSection />
      <Experience />
      <ProjectSection />
    </div>
  );
}
