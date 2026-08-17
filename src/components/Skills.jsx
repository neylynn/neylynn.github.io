import { motion } from "framer-motion";

import { skillCategories } from "../data/skills";

import {
  fadeUp,
  zoomIn,
  staggerContainer,
  defaultTransition,
} from "../animations";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-24 overflow-hidden"
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
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Technologies I Work With
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            I enjoy working across the full development stack.
          </p>

        </motion.div>

        {/* Categories */}

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {skillCategories.map((category) => (

            <motion.div
              key={category.title}
              variants={zoomIn}
              transition={defaultTransition}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-blue-500 transition"
            >

              <h3 className="text-2xl font-semibold mb-8">
                {category.title}
              </h3>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-5"
                variants={staggerContainer}
              >

                {category.skills.map((skill) => {

                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      variants={zoomIn}
                      transition={defaultTransition}
                      whileHover={{
                        y: -6,
                        scale: 1.08,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="bg-slate-900 rounded-xl p-5 flex flex-col items-center justify-center hover:bg-slate-700 transition"
                    >

                      <motion.div
                        whileHover={{
                          rotate: 10,
                          scale: 1.15,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                        }}
                      >

                        <Icon
                          className={`text-4xl mb-3 ${skill.color}`}
                        />

                      </motion.div>

                      <p className="text-sm font-medium text-center">
                        {skill.name}
                      </p>

                    </motion.div>
                  );

                })}

              </motion.div>

            </motion.div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}

export default Skills;