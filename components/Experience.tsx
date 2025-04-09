"use client";
import { ExperienceData, ExperienceSection } from "@/data/data";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Experience = () => {
  const [activeId, setActiveId] = useState(1);
  const activeExperience = ExperienceData.find((item) => item.id === activeId);

  return (
    <section id="experience" className="flex flex-col py-32 lg:py-48">
      <motion.div
        className="mx-auto w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl text-tertiary font-mono mb-8">
          {ExperienceSection.sectionId}{" "}
          <span className="text-2xl text-white font-bold ml-2">
            {ExperienceSection.hTag}
          </span>
        </h2>

        <div className="flex flex-col md:flex-row">
          {/* Left side - company list */}
          <div className="relative w-full md:w-1/4  mb-8 md:mb-0">
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-clip no-scrollbar">
              {ExperienceData.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveId(exp.id)}
                  className={`flex-shrink-0 md:block md:w-full text-left px-4 py-3 border-b-4 md:border-b-0 
                    ${
                      activeId === exp.id
                        ? "border-b-4 md:border-l-4 border-tertiary text-tertiary"
                        : "border-gray-600 md:border-b-0 border-b-4 md:border-l-[1px] hover:text-gray-500"
                    }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>

          {/* Right side - details */}
          <div className="md:w-3/4 md:pl-10">
            <h3 className="text-xl font-semibold">
              {activeExperience?.title}{" "}
              <span className="text-tertiary">
                @ {activeExperience?.company}
              </span>
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              {activeExperience?.date}
            </p>
            <ul className="list-disc pl-6 space-y-3">
              {activeExperience?.bulletPoints?.map((point, idx) => (
                <li key={idx} className="text-gray-300">
                  {point}
                </li>
              ))}
            </ul>
            {activeExperience?.description && (
              <p className="text-gray-400 mt-6">
                {activeExperience?.description}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
