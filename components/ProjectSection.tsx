"use client";
import Image from "next/image";
import { projects, ProjectSectionData } from "@/data/data";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectSection() {
  return (
    <section id="projects" className="bg-[#0a192f] py-20 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl text-teal-400 font-mono mb-8">
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
              className={`relative flex flex-col lg:flex-row ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } gap-8`}
            >
              {/* left section */}
              <div className="lg:w-1/2 relative z-0">
                <div className="overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src={project.imageurl}
                    alt={project.name}
                    width={700}
                    height={400}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* right section */}

              <div className="lg:w-1/2 flex flex-col justify-center lg:items-end text-left lg:text-right lg:-ml-32 z-10">
                <p className="text-teal-400 font-mono text-sm mb-2">
                  {project.tag}
                </p>
                <h3 className="text-2xl font-bold text-white mb-4 capitalize">
                  {project.name}
                </h3>

                <div className="bg-[#112240] text-[#ccd6f6] p-5 rounded-md mb-4 text-sm shadow-md max-w-md">
                  {project.description}
                </div>

                <ul className="flex flex-wrap justify-end gap-4 text-xs text-[#8892b0] font-mono mb-4">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                <div className="flex justify-end items-center gap-4 text-teal-400">
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
