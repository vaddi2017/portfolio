import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "SkillMatch AI (LLM & RAG Platform)",
      description:
        "Built a Retrieval-Augmented Generation system using Python, LangChain, FastAPI, Milvus, and React to match resumes and job descriptions → computed semantic match scores and missing skills with LLM-based explanations.",
      tech: "Python, LangChain, FastAPI, Milvus, React",
      link: "https://github.com/vaddi2017/Jd-match-score",
    },
    {
      title: "AI Chatbot",
      description:
        "Developed a context-aware chatbot using OpenAI API + FastAPI, integrated with React frontend and Redis cache for multi-session state management.",
      tech: "OpenAI API, FastAPI, React, Redis",
      link: "https://github.com/vaddi2017/ai-chatbot",
    },
    {
      title: "Text Summarizer",
      description:
        "Implemented extractive and abstractive summarization models in Python (NLTK, Transformers) to generate concise summaries of long documents.",
      tech: "Python, NLTK, Transformers",
      link: "https://github.com/vaddi2017/text-summarizer",
    },
    {
      title: "Health Tracker App",
      description:
        "Created a cross-platform wellness tracker using React Native, Firebase, and Node.js, providing real-time progress dashboards and analytics.",
      tech: "React Native, Firebase, Node.js",
      link: "https://github.com/vaddi2017/Health-Tracker",
    },
    {
      title: "Code-to-Diagram",
      description:
        "Built a tool that parses Python/JavaScript source code and auto-generates UML diagrams using Graphviz and LangChain for AI-assisted explanations.",
      tech: "Python, LangChain, Graphviz",
      link: "https://github.com/vaddi2017/code-to-diagram",
    },
    {
      title: "Interactive Portfolio Website",
      description:
        "Designed and deployed a personal portfolio using React + Tailwind + Framer Motion, showcasing projects, publications, and AI skills in an animated UI.",
      tech: "React, Tailwind, Framer Motion",
      link: "https://github.com/vaddi2017/portfolio",
    },
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
            <p className="text-blue-400 text-xs mb-3">{project.tech}</p>

            {/* ✅ GitHub Link (only if available) */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-sm hover:underline"
              >
                View on GitHub →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
