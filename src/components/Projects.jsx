import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-24 bg-white overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-sub">
            A selection of things I have built and worked on.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              className="group cursor-pointer"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={project.link || project.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <div className="overflow-hidden bg-gray-100 h-64 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-sm text-pink-500 capitalize">
                    {project.category}
                  </p>
                  {project.github && (
                    <p className="text-xs text-gray-400 mt-1">
                      View source on GitHub
                    </p>
                  )}
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
