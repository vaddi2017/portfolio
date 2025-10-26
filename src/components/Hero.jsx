import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-[90vh] flex flex-col items-center justify-center text-center relative overflow-hidden"
    >
      {/* 🌈 Animated background glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-[30%] w-48 h-48 md:w-60 md:h-60 rounded-full
                   bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500
                   blur-3xl opacity-20 animate-pulse"
      ></motion.div>

      {/* 🧑‍💻 Profile Picture */}
      <motion.img
        src="/Profile.jpg"
        alt="Pavan Kishore Vaddi"
        loading="eager"
        width={160}
        height={160}
        initial={{ opacity: 0, scale: 0.9, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-full object-cover
                   ring-4 ring-blue-500/40 shadow-lg shadow-blue-900/30 mb-6
                   hover:scale-105 hover:ring-blue-400 transition-transform duration-300"
      />

      {/* 👤 Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-extrabold tracking-tight"
      >
        <span className="text-blue-400">Pavan Kishore Vaddi</span>
      </motion.h1>

      {/* 💬 Title */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-4 text-lg text-gray-300 max-w-2xl"
      >
        Full Stack Developer | AI-Driven Engineer | Cloud & Microservices Expert
      </motion.p>

      {/* 🌐 Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex flex-wrap gap-4 justify-center"
      >
        {/* 📧 Email (Gmail compose) */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=pavankishorevaddi@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Pavan,%0D%0AI%20visited%20your%20portfolio%20and%20wanted%20to%20connect.%0D%0AThanks!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition"
        >
          <Mail size={18}/> Email
        </a>

        {/* 🔗 LinkedIn */}
        <a
          href="https://www.linkedin.com/in/pavan-kishore-vaddi"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:bg-white/5 transition"
        >
          <Linkedin size={18}/> LinkedIn
        </a>

        {/* 💻 GitHub */}
        <a
          href="https://github.com/vaddi2017"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:bg-white/5 transition"
        >
          <Github size={18}/> GitHub
        </a>

        {/* 📄 Resume Download */}
        <a
          href="/PavanKishore_Resume.pdf"
          download="PavanKishore_Resume.pdf"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 hover:bg-green-500 transition"
        >
          <FileDown size={18}/> Resume
        </a>
      </motion.div>
    </section>
  );
}
