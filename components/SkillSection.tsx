"use client";
import { Skills } from "@/data/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <section id="skills" className="py-20 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto"
      >
        <h2 className="text-2xl font-bold mb-16">Skills & Technologies</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {Skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="group flex flex-col items-center">
                <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                  <div
                    className={`absolute inset-0 rounded-full bg-tertiary/10 transition-all duration-300 ${
                      hoveredSkill === skill.id ? "scale-110" : "scale-0"
                    }`}
                  ></div>
                  <Image
                    src={skill.icon || "/placeholder.svg"}
                    alt={skill.name}
                    width={48}
                    height={48}
                    className={`relative z-10 transition-all duration-300 ${
                      hoveredSkill === skill.id ? "scale-110" : ""
                    }`}
                  />
                </div>
                <span className="text-center font-mono text-sm">
                  {skill.name}
                </span>
                <motion.div
                  className="h-0.5 bg-tertiary mt-2"
                  initial={{ width: 0 }}
                  animate={{ width: hoveredSkill === skill.id ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-background/50 border border-slate-700/50 rounded-lg p-6"
          >
            <h3 className="text-xl font-bold mb-4 text-tertiary">Frontend</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>
                React & Next.js
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>
                TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>
                Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>
                Framer Motion
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-background/50 border border-slate-700/50 rounded-lg p-6"
          >
            <h3 className="text-xl font-bold mb-4 text-tertiary">Backend</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>
                Node.js
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>
                Express
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>
                MongoDB
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>
                RESTful APIs
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-background/50 border border-slate-700/50 rounded-lg p-6"
          >
            <h3 className="text-xl font-bold mb-4 text-tertiary">Tools</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>
                Git & GitHub
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>
                VS Code
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>
                Figma
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>
                CI/CD
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
