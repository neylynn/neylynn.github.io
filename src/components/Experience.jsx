import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { experiences } from "../data/experience";

import {
  fadeUp,
  fadeRight,
  zoomIn,
  staggerContainer,
  defaultTransition,
} from "../animations";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

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
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            My Professional Journey
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Throughout my career, I have worked on public websites, SaaS products, in-house software, and client-specific solutions across different industries, turning complex business requirements into scalable, maintainable, and user-friendly applications.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative border-l-2 border-slate-700 ml-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experiences.map((exp) => (
            <motion.div
              key={`${exp.company}-${exp.position}`}
              variants={fadeRight}
              transition={defaultTransition}
              className="mb-14 ml-10 relative"
            >

              {/* Timeline Dot */}
              <motion.span
                variants={zoomIn}
                transition={defaultTransition}
                className="absolute -left-[52px] flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 shadow-lg"
              >
                <FaBriefcase />
              </motion.span>

              {/* Card */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">

                <div className="flex flex-col md:flex-row md:justify-between md:items-center">

                  <div>
                    <h3 className="text-2xl font-bold">
                      {exp.position}
                    </h3>

                    <p className="text-blue-400 mt-2">
                      {exp.company}
                    </p>
                  </div>

                  <div className="mt-4 md:mt-0 text-gray-400">
                    <p>{exp.duration}</p>
                    <p>{exp.location}</p>
                  </div>

                </div>

                <p className="text-gray-400 mt-6 leading-8">
                  {exp.description}
                </p>

                <motion.div
                  className="flex flex-wrap gap-3 mt-6"
                  variants={staggerContainer}
                >
                  {exp.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      variants={fadeUp}
                      className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;