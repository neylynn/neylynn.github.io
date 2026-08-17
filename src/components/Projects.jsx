import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";

import {
  fadeUp,
  zoomIn,
  staggerContainer,
  defaultTransition,
} from "../animations";

function ProjectDescription({ project, onReadMore }) {
  const descriptionRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      const element = descriptionRef.current;

      if (!element) return;

      setIsOverflowing(element.scrollHeight > element.clientHeight);
    };

    checkOverflow();

    const resizeObserver = new ResizeObserver(checkOverflow);

    if (descriptionRef.current) {
      resizeObserver.observe(descriptionRef.current);
    }

    window.addEventListener("resize", checkOverflow);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", checkOverflow);
    };
  }, [project.description]);

  return (
    <div className="mt-4">
      <p
        ref={descriptionRef}
        className="text-gray-400 leading-7 line-clamp-6"
      >
        {project.description}
      </p>

      {isOverflowing && (
        <button
          type="button"
          onClick={() => onReadMore(project)}
          className="mt-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
        >
          Read more →
        </button>
      )}
    </div>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          className="text-center mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={defaultTransition}
        >
          <p className="text-blue-400 uppercase tracking-widest font-semibold">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            A selection of projects from my professional experience, covering public websites, client solutions, in-house business software, SaaS products, and government-related systems. Some projects are publicly accessible, while others are private or restricted due to client confidentiality and internal-use requirements.
          </p>
        </motion.div>

        {/* Project Grid */}

        <motion.div
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              transition={defaultTransition}
              className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >

              {/* Image */}

              <div className="overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                />
              </div>

              {/* Content */}

              <div className="p-6">

                <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <ProjectDescription
                  project={project}
                  onReadMore={setSelectedProject}
                />

                {/* Technologies */}

                <motion.div
                  className="flex flex-wrap gap-2 mt-6"
                  variants={staggerContainer}
                >
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      variants={zoomIn}
                      className="bg-slate-700 px-3 py-1 rounded-full text-sm hover:bg-blue-600 transition-colors duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Buttons */}

                <div className="flex gap-4 mt-8">

                  {/* <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors duration-300"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FaGithub />
                    GitHub
                  </motion.a> */}

                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-300"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </motion.a>

                </div>

              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-slate-800 border border-slate-700 rounded-2xl max-w-2xl w-full p-8 relative"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-5 text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>

              <h3 className="text-2xl font-bold text-white pr-8">
                {selectedProject.title}
              </h3>

              <p className="text-gray-400 leading-7 mt-6">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
