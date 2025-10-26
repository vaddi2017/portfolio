import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "O2 Healthcare App",
      description:
        "Cross-platform mobile app for O2 Hospitals built with React Native + Expo. Features patient onboarding, real-time dashboards, and AI chatbot integration.",
      tech: "React Native, Expo, Node.js, Firebase, AWS",
    },
    {
      title: "AI Resume Analyzer",
      description:
        "Web-based NLP tool that analyzes resumes using GPT models and gives structured feedback for recruiters and job seekers.",
      tech: "React, Flask, OpenAI API, Python, Tailwind CSS",
    },
    {
      title: "Construction Company Website",
      description:
        "Responsive website for Venkatapadmavathinirmans with interactive project gallery, inquiry forms, and animated UI components.",
      tech: "React, Tailwind, Framer Motion, EmailJS",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-20">
      {/* ✅ Centered Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12 text-blue-400"
      >
        Projects
      </motion.h2>

      {/* ✅ Project Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/30 hover:scale-[1.02] transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm mb-3">{project.description}</p>
            <p className="text-blue-400 text-xs">{project.tech}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
