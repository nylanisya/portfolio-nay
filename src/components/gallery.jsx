import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    id: 1,
    title: "Pastel Dreams",
    category: "illustration",
    image: "https://placehold.co/600x700/f9a8d4/white?text=Project+1",
  },
  {
    id: 2,
    title: "Bloom Identity",
    category: "branding",
    image: "https://placehold.co/600x700/fbcfe8/white?text=Project+2",
  },
  {
    id: 3,
    title: "Tea House UI",
    category: "design",
    image: "https://placehold.co/600x700/fdf2f8/white?text=Project+3",
  },
  {
    id: 4,
    title: "Cute Icons",
    category: "illustration",
    image: "https://placehold.co/600x700/f9a8d4/white?text=Project+4",
  },
  {
    id: 5,
    title: "Eco Packaging",
    category: "branding",
    image: "https://placehold.co/600x700/d9f99d/white?text=Project+5",
  },
  {
    id: 6,
    title: "Mobile App",
    category: "design",
    image: "https://placehold.co/600x700/fde68a/white?text=Project+6",
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
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="section-title">Selected Work</h2>
          <p className="section-sub">A few things I've made recently.</p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              className="group cursor-pointer"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-md">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/5] object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="mt-4">
                <h3 className="font-medium text-gray-800">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
