import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16 lg:px-32 py-20"
    >
      {/* LEFT SIDE - ABOUT ME */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex-1 max-w-2xl text-left"
      >
        <h2 className="text-4xl font-bold mb-6 text-blue-400">About Me</h2>
        <p className="text-gray-300 leading-relaxed text-lg mb-4">
          I’m <span className="text-blue-400 font-semibold">Pavan Kishore Vaddi</span> — a passionate{" "}
          <b>Full Stack Developer and AI-Driven Engineer</b> with 9+ years of
          experience building intelligent, high-performance solutions across
          web, mobile, and cloud environments.
        </p>

        <p className="text-gray-300 leading-relaxed text-lg mb-4">
          My expertise spans <b>React, Angular, Node.js, Python, Java, and Spring Boot</b> —
          combined with applied AI and ML skills in{" "}
          <b>Natural Language Processing, Generative AI, and Predictive Analytics</b>.
        </p>

        <p className="text-gray-300 leading-relaxed text-lg mb-4">
          I hold a <b>Master’s in Computer Technology and Management</b> from
          <b> Eastern Illinois University</b> and a <b>Bachelor’s in Computer Science</b> from
          <b> Gitam University</b>, India. I’m driven by innovation and love designing
          scalable, intelligent systems that deliver measurable business impact.
        </p>
      </motion.div>

      {/* RIGHT SIDE - CURRENT COMPANY / PROJECT */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex-1 max-w-md p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-blue-400/30 transition"
      >
        <h3 className="text-2xl font-semibold text-blue-400 mb-3">
          Current Project / Role
        </h3>
        <h4 className="text-xl font-bold text-white mb-2">
          O2 Hospitals & Healthcare — Minneapolis, MN
        </h4>
        <p className="text-gray-300 text-md mb-2">
          <b>Role:</b> Mobile Application Developer
        </p>
        <p className="text-gray-400 leading-relaxed">
          Currently leading the development of cross-platform healthcare apps
          using <b>React Native</b> and <b>Node.js</b>, integrating AI-powered
          chatbots, real-time patient dashboards, and secure cloud data pipelines
          on AWS. Focused on creating user-friendly, HIPAA-compliant experiences
          that improve patient engagement and healthcare accessibility.
        </p>
        <p className="text-sm text-blue-300 mt-3">
          🚀 Tech Stack: React Native, Node.js, AWS, Express, MongoDB
        </p>
      </motion.div>
    </section>
  );
}
