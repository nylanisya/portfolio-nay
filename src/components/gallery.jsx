import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// IMPORT GAMBAR LANGSUNG
import rplImage from "../assets/certificates/rpl-certificate.jpg";
import osisImage from "../assets/certificates/osis-certificate.jpg";
import pklImage from "../assets/certificates/pkl-certificate.jpg";

const certificates = [
  {
    id: 1,
    title: "Certificate of Competency",
    issuer: "Software Engineering - RPL",
    year: "2025",
    image: rplImage, // pakai variabel import
    description: "National competency certification in Software Engineering",
  },
  {
    id: 2,
    title: "General Secretary",
    issuer: "OSIS SMKN 1 Katapang",
    year: "2025",
    image: osisImage,
    description:
      "Certificate of Achievement for full term as General Secretary",
  },
  {
    id: 3,
    title: "Industrial Internship",
    issuer: "PT Sakthi Elevate Digital",
    year: "2025",
    image: pklImage,
    description: "Front-End Developer internship completion certificate",
  },
];

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

const Gallery = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="work" className="py-24 bg-white overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="section-title">📜 Certifications</h2>
          <p className="section-sub">
            Official recognitions from my learning & professional journey.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={fadeUp}
              className="group cursor-pointer"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="overflow-hidden bg-gray-100 h-64 flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-w-full max-h-full object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">{cert.title}</h3>
                  <p className="text-sm text-pink-500">{cert.issuer}</p>
                  <p className="text-xs text-gray-400 mt-1">{cert.year}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
