import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  const [status, setStatus] = useState("");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("✨ Thanks! Your message has been sent.");
    e.target.reset();
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-[#fffaf8] overflow-hidden">
      <div ref={ref} className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Contact Me</h2>
          <p className="section-sub">
            Have a question or want to collaborate? Just send a message.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeLeft}
            className="space-y-4"
          >
            <div>
              <p className="text-gray-500 text-sm uppercase tracking-wide">
                Email
              </p>
              <p className="text-gray-800">naylaanisya12@gmail.com</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm uppercase tracking-wide">
                Location
              </p>
              <p className="text-gray-800">Pekanbaru, Riau, Indonesia</p>
            </div>
            <div className="pt-4">
              <p className="text-gray-400 text-sm">
                💬 Open for internships, freelance, or just a chat about admin &
                IT.
              </p>
            </div>
          </motion.div>

          <motion.form
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeRight}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your name"
              required
              className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-pink-200 transition"
            />
            <input
              type="email"
              placeholder="Your email"
              required
              className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-pink-200 transition"
            />
            <textarea
              rows="4"
              placeholder="Message"
              required
              className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-pink-200 transition"
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-pink-500 transition"
            >
              Send Message
            </motion.button>
            {status && (
              <p className="text-center text-pink-500 text-sm">{status}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
