import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import AboutSection from "@/components/AboutSection";
import Experience from "@/components/Experience";
import ProjectSection from "@/components/ProjectSection";
import FoodAppCard from "@/components/FoodApp";
import NavBar from "@/components/NavBar";
import SkillsSection from "@/components/SkillSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col font-mono gap-y-12 [&>*]:min-h-[90vh]">
      {/* <FoodAppCard /> */}
      <AboutSection />
      {/* <SkillsSection /> */}
      <Experience />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
