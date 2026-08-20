import { motion } from "framer-motion";
import { footerLinks, footerSocials } from "../data/footer";

import {
  fadeUp,
  zoomIn,
  staggerContainer,
  defaultTransition,
} from "../animations";

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Main Footer Content */}

        <motion.div
          className="grid lg:grid-cols-3 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* About */}

          <motion.div
            variants={fadeUp}
            transition={defaultTransition}
          >
            <h2 className="text-3xl font-bold text-blue-400">
              neylynn
            </h2>

            <p className="text-gray-400 mt-5 leading-8">
              Full Stack Engineer specializing in Laravel, Express.js, React, Vue.js, Next.js and modern web technologies.
              I enjoy building scalable software with clean, maintainable code.
            </p>
          </motion.div>

          {/* Quick Links */}

          <motion.div
            variants={fadeUp}
            transition={defaultTransition}
          >
            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <motion.ul
              className="space-y-3"
              variants={staggerContainer}
            >
              {footerLinks[0].links.map((link) => (
                <motion.li
                  key={link.name}
                  variants={fadeUp}
                >
                  <a
                    href={link.href}
                    className="inline-block text-gray-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Social */}

          <motion.div
            variants={fadeUp}
            transition={defaultTransition}
          >
            <h3 className="text-xl font-semibold mb-6">
              Connect With Me
            </h3>

            <motion.div
              className="flex gap-4"
              variants={staggerContainer}
            >
              {footerSocials.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={zoomIn}
                    whileHover={{
                      y: -5,
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300"
                  >
                    <Icon className="text-xl" />
                  </motion.a>
                );
              })}
            </motion.div>

            <p className="text-gray-400 mt-8">
              Thanks for visiting my portfolio.
              Feel free to reach out if you'd like to work together.
            </p>
          </motion.div>

        </motion.div>

        {/* Bottom */}

        <motion.div
          className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            ...defaultTransition,
            delay: 0.2,
          }}
        >

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} neylynn. All rights reserved.
          </p>

          <motion.a
            href="#home"
            whileHover={{
              y: -2,
            }}
            className="mt-4 md:mt-0 text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            ↑ Back to Top
          </motion.a>

        </motion.div>

      </div>

    </footer>
  );
}

export default Footer;