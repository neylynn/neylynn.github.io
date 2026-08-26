import {
  FaCode,
  FaLaptopCode,
  FaServer
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  zoomIn,
  staggerContainer,
  defaultTransition
} from "../animations";

const stats = [
  {
    number: "6+",
    title: "Years Experience",
  },
  {
    number: "30+",
    title: "Projects Completed",
  },
  {
    number: "15+",
    title: "Happy Clients",
  },
  {
    number: "10+",
    title: "Technologies",
  },
];

const services = [
  {
    icon: <FaLaptopCode size={30} />,
    title: "Frontend Development",
    description:
      "Building responsive and interactive web applications using React, Vue.js, Next.js, TypeScript, Bootstrap, and Tailwind CSS.",
  },
  {
    icon: <FaServer size={30} />,
    title: "Backend Development",
    description:
      "Developing secure REST APIs and business systems with Laravel, Express.js, WordPress, MySQL, MongoDB, and Redis.",
  },
  {
    icon: <FaCode size={30} />,
    title: "System Architecture",
    description:
      "Building and handling enterprise business applications on AWS and VPS.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={defaultTransition}
        >

          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Software Engineer
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
            Experienced in full-stack development, system architecture, database design, API and third-party integrations, production troubleshooting, and application optimization. Focused on building scalable, reliable, secure, and high-performance solutions that solve real-world business problems.
          </p>

        </motion.div>

        {/* Stats */}

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {stats.map((item) => (

            <motion.div
              key={item.title}
              variants={zoomIn}
              transition={defaultTransition}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              className="bg-slate-800 rounded-2xl p-8 text-center border border-slate-700 hover:border-blue-500 transition"
            >

              <h3 className="text-4xl font-bold text-blue-500">
                {item.number}
              </h3>

              <p className="text-gray-300 mt-3">
                {item.title}
              </p>

            </motion.div>

          ))}

        </motion.div>

        {/* About Content */}

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">

          {/* Left */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={defaultTransition}
          >

            <h3 className="text-3xl font-bold">
              Who Am I?
            </h3>

            <p className="mt-6 text-gray-400 leading-8">
              Worked on POS, E-commerce, Payment Systems, Web Scraping, Viber Business Messaging, Online Registration, and VAS platforms.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div>
                <p className="text-gray-500">Name</p>
                <h4 className="font-semibold">
                  neylynn
                </h4>
              </div>

              <div>
                <p className="text-gray-500">Location</p>
                <h4 className="font-semibold">
                  Thailand
                </h4>
              </div>

              <div>
                <p className="text-gray-500">Email</p>
                <h4 className="font-semibold">
                  naylinnofficial@gmail.com
                </h4>
              </div>

              <div>
                <p className="text-gray-500">Availability</p>
                <h4 className="text-green-400 font-semibold">
                  Open to Opportunities
                </h4>
              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            className="grid gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            {services.map((service) => (

              <motion.div
                key={service.title}
                variants={fadeRight}
                transition={defaultTransition}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-blue-500 transition"
              >

                <div className="text-blue-500">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold mt-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 mt-3 leading-7">
                  {service.description}
                </p>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;