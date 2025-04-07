"use client";
import Image from "next/image";
import { projects, ProjectSectionData } from "@/data/data";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectSection() {
  return (
    <section id="projects" className=" py-20 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl text-tertiary font-mono mb-8">
          {ProjectSectionData.sectionId}{" "}
          <span className="text-2xl text-white font-bold ml-2">
            {ProjectSectionData.hTag}
          </span>
        </h2>

        <div className="flex flex-col gap-40">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative flex flex-col bg-amber-300  lg:flex-row ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } gap-y-8`}
            >
              {/* image section */}

              <div className="overflow-hidden min-h-92 lg:w-1/2 relative z-0 ">
                <div className="overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src={project.imageurl}
                    alt={project.name}
                    fill
                    className="object-cover w-full h-full filter grayscale hover:grayscale-0 hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* word section */}

              <div
                className={`relative lg:w-1/2 flex flex-col justify-center lg:min-h-64 lg:items-end text-left ${
                  index % 2 ? "lg:text-left lg:mr-10" : "lg:text-right"
                } z-10`}
              >
                <p className="hidden lg:block text-tertiary font-mono text-sm lg:mb-2">
                  {project.tag}
                </p>
                <h3 className="absolute lg:relative ml-2 lg:ml-0 text-2xl font-bold text-white mb-4 capitalize">
                  {project.name}
                </h3>
                <div className="relative lg:w-full lg:h-48 ">
                  <div
                    className={`absolute  -mt-24 lg:mt-0  lg:top-1/2 -translate-y-1/2 ${
                      index % 2 !== 0 ? "lg:left-0" : "right-0"
                    } bg-background/80 max-h-32 overflow-clip lg:max-h-40 text-[#ccd6f6]  border border-slate-200/10 p-5 text-sm shadow-md lg:w-[120%]`}
                  >
                    <div className="hidden lg:block">{project.description}</div>
                    <div className="block lg:hidden">
                      {(() => {
                        if (project.description.length <= 200)
                          return project.description;
                        const truncated = project.description.slice(0, 200);
                        const lastSpace = truncated.lastIndexOf(" ");
                        return lastSpace > 0
                          ? truncated.slice(0, lastSpace) + "..."
                          : truncated + "...";
                      })()}
                    </div>
                  </div>
                </div>
                <ul className="flex flex-wrap justify-end gap-4 text-xs text-[#8892b0] font-mono mb-4">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="flex justify-end items-center gap-4 text-tertiary">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
