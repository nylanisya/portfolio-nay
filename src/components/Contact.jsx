import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });


  const serviceID = "naylanay10"; // dari EmailJS (Service ID)
  const templateID = "template_bmitu7e"; // dari EmailJS (Template ID)
  const publicKey = "cSkMniFpqrprjvtSC"; // dari EmailJS (Public Key)
  // ========================================

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending... 💌");

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        console.log("Success:", result.text);
        setStatus("✨ Message sent! I’ll reply soon.");
        form.current.reset();
        setTimeout(() => setStatus(""), 4000);
      })
      .catch((error) => {
        console.error("Error:", error.text);
        setStatus("❌ Oops, something went wrong. Please try again.");
        setTimeout(() => setStatus(""), 4000);
      });
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
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-sub">
            Have a question or want to collaborate? Send me a message.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Kiri: info ringkas */}
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
              <p className="text-gray-800">Pekanbaru, Riau</p>
            </div>
            <div className="pt-4">
              <p className="text-gray-400 text-sm">
                💬 Open for internship, freelance, or just a chat about admin &
                tech.
              </p>
            </div>
          </motion.div>

          {/* Kanan: form kontak (dengan EmailJS) */}
          <motion.form
            ref={form}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeRight}
            onSubmit={sendEmail}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-pink-200 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-pink-200 transition"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your message"
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
