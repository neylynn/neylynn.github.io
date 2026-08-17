import { motion } from "framer-motion";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

import { contactInfo, socialLinks } from "../data/contact";
import { sendContactEmail } from "../services/emailService";

import {
  fadeUp,
  fadeLeft,
  fadeRight,
  zoomIn,
  staggerContainer,
  defaultTransition,
} from "../animations";

function Contact() {
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await sendContactEmail(formRef.current);

      toast.success("Message sent successfully!");

      formRef.current.reset();
    } catch (error) {
      console.error(error);

      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24"
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
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Have a project in mind or want to discuss an opportunity?
            Feel free to contact me anytime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={defaultTransition}
          >
            <h3 className="text-2xl font-semibold mb-8">
              Get In Touch
            </h3>

            {/* Contact Cards */}

            <motion.div
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    variants={fadeUp}
                    transition={defaultTransition}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-5 bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-blue-500 transition-all duration-300"
                  >
                    <Icon className={`text-3xl ${item.color}`} />

                    <div>
                      <h4 className="font-semibold">
                        {item.title}
                      </h4>

                      <p className="text-gray-400">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Social */}

            <motion.div
              className="flex gap-4 mt-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {socialLinks.map((social) => {
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
          </motion.div>

          {/* Contact Form */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={defaultTransition}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Name */}

              <div>
                <label className="block mb-2">
                  Name
                </label>

                <input
                  name="from_name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                />
              </div>

              {/* Email */}

              <div>
                <label className="block mb-2">
                  Email
                </label>

                <input
                  name="from_email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                />
              </div>

              {/* Subject */}

              <div>
                <label className="block mb-2">
                  Subject
                </label>

                <input
                  name="subject"
                  type="text"
                  required
                  placeholder="Project Inquiry"
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                />
              </div>

              {/* Message */}

              <div>
                <label className="block mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Write your message..."
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"
                />
              </div>

              {/* Submit */}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={!loading ? { y: -2 } : undefined}
                whileTap={!loading ? { scale: 0.98 } : undefined}
                className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;

