import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiGlobe,
  FiBriefcase,
  FiCalendar,
  FiAward,
  FiMapPin,
  FiCheckCircle,
} from "react-icons/fi";
import { SiReact, SiTypescript, SiPhp } from "react-icons/si";
import {
  MdOutlineWorkOutline,
  MdOutlineSchool,
  MdOutlineGroups,
} from "react-icons/md";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Skills data dengan level (1-5)
  const skills = [
    { name: "Time Management", level: 5, icon: <FiCheckCircle /> },
    { name: "Microsoft Office", level: 5, icon: <FiCheckCircle /> },
    { name: "Administrative Assistance", level: 5, icon: <FiCheckCircle /> },
    { name: "Data Entry", level: 4, icon: <FiCheckCircle /> },
    { name: "Organization Skills", level: 5, icon: <FiCheckCircle /> },
    { name: "Team Coordination", level: 5, icon: <FiCheckCircle /> },
    { name: "React JS", level: 3, icon: <SiReact /> },
    { name: "TypeScript", level: 3, icon: <SiTypescript /> },
    { name: "PHP / MySQL", level: 3, icon: <SiPhp /> },
  ];

  // Work experience
  const experiences = [
    {
      title: "Tutor",
      company: "Bimbingan Belajar Lorentz",
      period: "Jun 2025 - Present · 1 yr",
      location: "Pekanbaru, Indonesia",
      description:
        "Delivered structured educational sessions, simplified complex topics, maintained consistent academic schedules, and improved student learning outcomes.",
      tech: ["Communication", "Presentations", "Patience"],
    },
    {
      title: "Frontend Developer Intern",
      company: "PT Sakthi Elevate Digital",
      period: "Jan 2025 - Apr 2025 · 4 mos",
      location: "Bandung, Indonesia",
      description:
        "Developed UI components using React JS & TypeScript, collaborated on web designs, utilized AI tools for coding efficiency. Earned Front-End Developer certificate.",
      tech: ["React.js", "TypeScript", "Team Collaboration"],
    },
  ];

  // Education
  const education = [
    {
      degree: "Bachelor in Information Systems",
      institution: "Universitas Terbuka",
      year: "2025 - Present",
      highlight:
        "Focus on management information systems & digital administration.",
    },
    {
      degree: "Software Engineering",
      institution: "SMKN 1 Katapang",
      year: "2022 - 2025",
      highlight:
        "Graduated with 86/100 GPA. Learned PHP, MySQL, Figma, and software logic.",
      achievement: "Student Council Secretary",
    },
  ];

  // Organization
  const organizations = [
    {
      role: "General Secretary",
      organization: "OSIS SMKN 1 Katapang",
      period: "Mar 2024 - Jan 2025 · 11 mos",
      description:
        "Managed all organizational archives, official letters, and documentation. Coordinated with departments for administrative workflows. Event coordinator for school programs.",
      certificate: "Certificate of Achievement: General Secretary",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            About Me
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mt-3">
            Information Systems student with a passion for both{" "}
            <span className="text-pink-500">administration</span> &{" "}
            <span className="text-pink-500">technology</span>.
          </p>
        </motion.div>

        {/* Long bio */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ delay: 0.05 }}
          className="bg-pink-50/30 p-6 rounded-2xl mb-16"
        >
          <p className="text-gray-700 leading-relaxed">
            I'm a detail-oriented Information Systems student with a strong
            foundation in Software Engineering and extensive experience in
            administrative management. Proven track record as a General
            Secretary handling professional correspondence, digital archiving,
            and event coordination. Tech-savvy with web development tools (React
            JS, PHP) enabling a data-driven approach to administrative tasks. A
            responsible team player dedicated to delivering organized,
            high-quality results.
          </p>
        </motion.div>

        {/* Skills Section with progress indicator */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.h3
            variants={fadeUp}
            className="text-2xl font-semibold mb-6 flex items-center gap-2"
          >
            <FiBriefcase className="text-pink-500" /> Core Skills
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                variants={fadeUp}
                className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-pink-500 text-xl">{skill.icon}</span>
                    <span className="font-medium text-gray-800">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">{skill.level}/5</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div
                    className="bg-pink-400 h-1.5 rounded-full"
                    style={{ width: `${(skill.level / 5) * 100}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Work Experience with timeline style */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.h3
            variants={fadeUp}
            className="text-2xl font-semibold mb-6 flex items-center gap-2"
          >
            <MdOutlineWorkOutline className="text-pink-500" /> Work Experience
          </motion.h3>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="relative pl-6 border-l-2 border-pink-200"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-pink-400"></div>
                <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {exp.title}
                    </h4>
                    <div className="flex items-center gap-1 text-sm text-gray-400">
                      <FiCalendar size={14} /> {exp.period}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <span className="font-medium">{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <FiMapPin size={12} /> {exp.location}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-pink-50 text-pink-600 px-2 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Organization Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3
              variants={fadeUp}
              className="text-2xl font-semibold mb-6 flex items-center gap-2"
            >
              <MdOutlineSchool className="text-pink-500" /> Education
            </motion.h3>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm"
                >
                  <h4 className="font-bold text-gray-800">{edu.degree}</h4>
                  <p className="text-pink-600 text-sm mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                    <FiCalendar size={12} /> {edu.year}
                  </p>
                  <p className="text-gray-500 text-sm mt-2">{edu.highlight}</p>
                  {edu.achievement && (
                    <div className="mt-2 flex items-center gap-1 text-xs bg-pink-50 text-pink-600 px-2 py-1 rounded-full w-fit">
                      <FiAward size={12} /> {edu.achievement}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3
              variants={fadeUp}
              className="text-2xl font-semibold mb-6 flex items-center gap-2"
            >
              <MdOutlineGroups className="text-pink-500" /> Organization
            </motion.h3>
            {organizations.map((org, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm"
              >
                <h4 className="font-bold text-gray-800">{org.role}</h4>
                <p className="text-pink-600 text-sm mt-1">{org.organization}</p>
                <p className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                  <FiCalendar size={12} /> {org.period}
                </p>
                <p className="text-gray-500 text-sm mt-2">{org.description}</p>
                <div className="mt-3 flex items-center gap-1 text-xs bg-pink-50 text-pink-600 px-2 py-1 rounded-full w-fit">
                  <FiAward size={12} /> {org.certificate}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Languages */}
        {/* Languages with level indicators */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ delay: 0.5 }}
          className="mt-8 pt-6 border-t border-gray-100"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FiGlobe className="text-pink-500" size={24} /> Languages
          </h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-gray-700">Indonesian</span>
                <span className="text-xs text-gray-400">Native</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-pink-400 h-2 rounded-full w-full"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-gray-700">English</span>
                <span className="text-xs text-gray-400">
                  Limited working proficiency
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-pink-400 h-2 rounded-full w-1/2"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
