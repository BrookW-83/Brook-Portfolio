"use client";
import Image from "next/image";
import { projects, ProjectSectionData } from "@/data/data";
import { ArrowDown, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function ProjectSection() {
  // Filter featured and fun projects
  const featuredProjects = projects.filter(
    (project) => project.tag === "featured project"
  );
  const funProjects = projects.filter(
    (project) => project.tag === "fun project"
  );

  // State to track how many fun projects to show
  const [funProjectsToShow, setFunProjectsToShow] = useState(0);

  // Combined projects to display
  const projectsToDisplay = [
    ...featuredProjects,
    ...funProjects.slice(0, funProjectsToShow),
  ];

  // Handle show more button click
  const handleShowMore = () => {
    setFunProjectsToShow((prev) => Math.min(prev + 2, funProjects.length));
  };

  return (
    <section id="projects" className="py-20 text-white">
      <div className="mx-auto">
        <h2 className="text-xl text-tertiary font-mono mb-8">
          {ProjectSectionData.sectionId}{" "}
          <span className="text-2xl text-white font-bold ml-2">
            {ProjectSectionData.hTag}
          </span>
        </h2>

        <div className="flex flex-col gap-40">
          {projectsToDisplay.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative flex flex-col lg:flex-row ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } gap-y-8 gap-x-5`}
            >
              {/* image section */}
              <div className="overflow-hidden min-h-92 lg:w-1/2 relative z-0">
                <Link
                  href={project.url}
                  className="overflow-hidden rounded-lg shadow-xl"
                >
                  <Image
                    src={project.imageurl || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover w-full h-full filter grayscale hover:grayscale-0 hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              </div>

              {/* word section */}
              <div
                className={`relative lg:w-1/2 flex flex-col justify-center lg:min-h-64 lg:items-end text-left ${
                  index % 2 ? "lg:text-left" : "lg:text-right"
                } z-10`}
              >
                <p className="hidden lg:block text-tertiary font-mono text-sm lg:mb-2">
                  {project.tag}
                </p>
                <h3 className="absolute lg:relative ml-2 lg:ml-0 text-2xl font-bold text-white mb-4 capitalize">
                  {project.name}
                </h3>
                <div className="relative lg:w-full lg:h-48">
                  <div
                    className={`absolute flex justify-center items-center -mt-20 lg:mt-0 lg:top-1/2 -translate-y-1/2 ${
                      index % 2 !== 0 ? "lg:left-0" : "right-0"
                    } bg-background/80 h-24 lg:h-44 text-[#ccd6f6] border border-slate-200/10 overflow-hidden p-3 lg:p-5 text-sm shadow-md lg:w-[120%]`}
                  >
                    <div className="block sm:hidden">
                      {project.description.slice(0, 1)}
                    </div>
                    <div className="hidden sm:block lg:hidden">
                      {project.description.slice(0, 2)}
                    </div>
                    <div className="hidden lg:block">{project.description}</div>
                  </div>
                </div>
                <ul className="hidden sm:flex flex-wrap justify-end gap-4 text-xs text-[#8892b0] font-mono mb-4">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="flex justify-end items-center gap-4 text-tertiary">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  ) : (
                    <button className="text-xs border border-tertiary text-tertiary px-2 py-1 rounded hover:bg-tertiary/10 transition-colors">
                      Private Repo
                    </button>
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

        {/* Show More Button */}
        {funProjectsToShow < funProjects.length && (
          <div className="flex justify-center mt-20">
            <motion.button
              onClick={handleShowMore}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className=" gap-2 flex-row w-fit px-6 py-3 font-semibold text-tertiaryk group  rounded mt-6 flex justify-center ease-in-out items-center group transition-all duration-300 hover:shadow-[0px_0_15px_rgba(255,255,255,0.2)] hover:scale-105"
            >
              Show More
              <ArrowDown className="animate-bounce duration-700 group-hover:animate-none" />
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
