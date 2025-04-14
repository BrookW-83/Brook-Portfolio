"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Skills,
  TechStacks,
  SkillSectionContent,
  FeaturedSkillTitle,
} from "@/data/data";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const SkillSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  // Get skills by category
  const getSkillsByCategory = (category: string) => {
    return Skills.filter(
      (skill) => skill.category.toLowerCase() === category.toLowerCase()
    );
  };

  // Get skills by tech stack
  const getSkillsByTechStack = (category: string) => {
    let skills: string[] = [];

    if (category === "frontend") {
      skills = TechStacks.frontEnd;
    } else if (category === "backend") {
      skills = TechStacks.BackEnd;
    } else if (category === "mobile") {
      skills = TechStacks.Mobile;
    }

    return skills.map((skillName) => {
      const skillData = Skills.find((s) => s.name === skillName);
      return (
        skillData || {
          id: 0,
          name: skillName,
          icon: "/placeholder.svg",
          proficiency: 70,
          description: `Expertise in ${skillName}`,
          category: category,
        }
      );
    });
  };

  const tabVariants = {
    active: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color: "rgb(var(--color-tertiary))",
      borderColor: "rgb(var(--color-tertiary))",
      transition: { duration: 0.3 },
    },
    inactive: {
      backgroundColor: "transparent",
      color: "rgb(209, 213, 219)",
      borderColor: "rgba(255, 255, 255, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const renderSkillList = (category: string) => {
    const skills = getSkillsByTechStack(category);

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={category}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id || index}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.7)",
              }}
              className="bg-black/20  backdrop-blur-sm border border-white/10 rounded-xl p-6 relative overflow-hidden group"
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-12 h-12 rounded-lg bg-black/30 flex items-center justify-center p-2 border border-white/10">
                  <Image
                    src={skill.icon || "/placeholder.svg"}
                    alt={skill.name}
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {skill.name}
                </h3>
              </div>

              <div className="relative z-10">
                <div className="flex justify-between mb-1">
                  <span className="text-xs text-gray-400">Proficiency</span>
                  <span className="text-xs font-medium text-tertiary">
                    {skill.proficiency}%
                  </span>
                </div>
                <div className="w-full bg-gray-800/50 rounded-full h-1.5">
                  <motion.div
                    className="bg-tertiary h-1.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  ></motion.div>
                </div>
              </div>

              {skill.description && (
                <p className="text-sm text-gray-400 mt-4 relative z-10">
                  {skill.description}
                </p>
              )}

              {/* Animated border on hover */}
              {/* <motion.div
                className="absolute bottom-0 left-0 h-1 bg-tertiary"
                initial={{ width: 0 }}
                animate={{ width: hoveredSkill === skill.id ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              ></motion.div> */}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <section id="skills" className="py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 "
      >
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-fit">
              <h2 className="text-xl text-tertiary font-mono mb-8">
                {SkillSectionContent.sectionId}{" "}
                <span className="text-2xl text-white font-bold ml-2">
                  {SkillSectionContent.title}
                </span>
              </h2>
            </div>
            <p className="text-gray-400 max-w-2xl">
              {SkillSectionContent.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Tech stack tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center mb-8 ">
            {SkillSectionContent.categories.map((category) => (
              <motion.button
                key={category.id}
                variants={tabVariants}
                animate={activeTab === category.id ? "active" : "inactive"}
                onClick={() => setActiveTab(category.id)}
                className="px-6 py-3 rounded-full border text-sm font-medium transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>

          {renderSkillList(activeTab)}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillSection;
