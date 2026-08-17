import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowDown,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import profile from "../assets/neylynn.jpg";

import {
  fadeLeft,
  fadeRight,
  defaultTransition,
} from "../animations";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-950 text-white flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}

        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={defaultTransition}
        >

          <span className="text-blue-400 font-semibold">
            Hello, I'm
          </span>

          <h1 className="mt-4 text-5xl md:text-7xl font-extrabold leading-tight">
            ney
            <br />
            <span className="text-blue-500">
              lynn
            </span>
          </h1>

          <div className="mt-6 text-2xl font-semibold text-gray-300">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 30,
                strings: [
                  "Full Stack Engineer",
                  "Software Engineer",
                  "Web Developer",
                  "Programmer",
                  "PHP Developer",
                ],
              }}
            />
          </div>

          <p className="mt-8 max-w-xl text-gray-400 leading-8">
            Passionate Software Engineer with 6+ years of experience building scalable web
            applications and RESTful APIs across international environments including Yangon, 
            Bangkok, and Tokyo. 
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
            >
              View Projects
            </motion.a>

            <motion.a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border border-blue-500 hover:bg-blue-600 px-8 py-4 rounded-xl font-semibold transition"
            >
              Download CV
            </motion.a>

          </div>

          {/* Social */}

          <div className="flex gap-5 mt-10">

            <motion.a
              href="https://github.com/neylynn"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -6,
                scale: 1.1,
              }}
              whileTap={{ scale: 0.9 }}
              className="bg-slate-900 p-4 rounded-xl hover:bg-blue-600 transition"
            >
              <FaGithub size={22} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/nay-linn-68843a2a8"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -6,
                scale: 1.1,
              }}
              whileTap={{ scale: 0.9 }}
              className="bg-slate-900 p-4 rounded-xl hover:bg-blue-600 transition"
            >
              <FaLinkedin size={22} />
            </motion.a>

            <motion.a
              href="https://instagram.com/neylynn97"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -6,
                scale: 1.1,
              }}
              whileTap={{ scale: 0.9 }}
              className="bg-slate-900 p-4 rounded-xl hover:bg-blue-600 transition"
            >
              <FaInstagram size={22} />
            </motion.a>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          className="flex justify-center"
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          transition={defaultTransition}
        >

          <motion.div
            className="relative"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            {/* Glow */}

            <div className="absolute -inset-5 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>

            <motion.img
              src={profile}
              alt="neylynn"
              className="relative w-80 md:w-96 rounded-full border-4 border-blue-500 shadow-2xl"
              whileHover={{
                scale: 1.05,
              }}
            />

          </motion.div>

        </motion.div>

      </div>

      {/* Scroll Down */}

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >

        <a href="#about">
          <FaArrowDown
            size={28}
            className="text-blue-500"
          />
        </a>

      </motion.div>

    </section>
  );
}

export default Hero;