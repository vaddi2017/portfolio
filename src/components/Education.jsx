import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "Master’s in Computer Technology and Management",
      institution: "Eastern Illinois University, USA",
      year: "2024 – 2025",
      details:
        "Focused on cloud computing, AI, and data-driven system design. Worked on AI-driven stress prediction research using NLP and Reddit datasets.",
    },
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Gitam University, Visakhapatnam, India",
      year: "2016 – 2020",
      details:
        "Developed strong foundations in software engineering, databases, and distributed systems. Built multiple full-stack and machine learning projects.",
    },
  ];

  return (
    <section id="education" className="py-20 px-6 md:px-12 lg:px-20">
      {/* ✅ Centered Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12 text-blue-400"
      >
        Education
      </motion.h2>

      {/* ✅ Education Cards */}
      <div className="space-y-6">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/30 transition"
          >
            <div className="flex justify-between items-center flex-wrap">
              <h3 className="text-xl font-semibold text-white">
                {edu.degree}
              </h3>
              <p className="text-gray-400 text-sm">{edu.year}</p>
            </div>
            <p className="text-blue-300 mt-1 font-medium">{edu.institution}</p>
            <p className="text-gray-300 mt-3 text-sm leading-relaxed">
              {edu.details}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
