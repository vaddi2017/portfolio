import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  // 2025 Certifications
  {
    title: "Microsoft Azure AI Essentials Professional Certificate",
    issuer: "Microsoft",
    date: "July 2025",
  },
  {
    title: "Microsoft Azure AI Essentials: Workloads and Machine Learning on Azure",
    issuer: "LinkedIn Learning",
    date: "July 2025",
  },
  {
    title: "Career Essentials in Generative AI by Microsoft & LinkedIn",
    issuer: "LinkedIn Learning",
    date: "July 2025",
  },
  {
    title: "Amazon Web Services (AWS) – No-code Machine Learning and Generative AI",
    issuer: "Amazon Web Services",
    date: "August 2025",
  },
  {
    title: "Scrum: Advanced Professional Certificate",
    issuer: "LinkedIn Learning",
    date: "July 2025",
  },
  {
    title: "Introduction to Web Design and Development",
    issuer: "LinkedIn Learning",
    date: "July 2025",
  },

  // 2023 Certifications
  {
    title: "Programming with Cloud IoT Platforms",
    issuer: "Pohang University of Science and Technology",
    date: "April 2023",
  },
  {
    title: "Introduction and Programming with IoT Boards",
    issuer: "Pohang University of Science and Technology",
    date: "April 2023",
  },

  // 2022 Certifications
  {
    title: "Learning How to Learn: Powerful Mental Tools to Help You Master Tough Subjects",
    issuer: "Coursera",
    date: "November 2022",
  },

  // 2021 Certifications
  {
    title: "Requirements Gathering for Secure Software Development",
    issuer: "University of Colorado",
    date: "November 2021",
  },
  {
    title: "Database Management Essentials",
    issuer: "University of Colorado",
    date: "October 2021",
  },

  // 2020 Certifications
  {
    title: "Basic Image Classification with TensorFlow",
    issuer: "Coursera",
    date: "October 2020",
  },
  {
    title: "Data Structures",
    issuer: "UC San Diego Extended Studies",
    date: "October 2020",
  },
  {
    title: "Design Thinking for Innovation",
    issuer: "University of Virginia",
    date: "October 2020",
  },
  {
    title: "Introduction to Artificial Intelligence (AI)",
    issuer: "IBM",
    date: "October 2020",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="pt-24 px-6 md:px-12 lg:px-20">
      {/* ✅ Centered & Animated Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-6 text-blue-400"
      >
        Certifications
      </motion.h2>

      <p className="text-gray-400 text-center max-w-3xl mx-auto mb-10">
        A collection of my professional and academic certifications covering AI,
        Machine Learning, Cloud, IoT, Agile, and Software Development.
      </p>

      {/* Grid of Certifications */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4
                       hover:border-blue-400/40 hover:bg-white/10 transition"
          >
            <div className="flex items-start gap-3">
              <Award className="text-blue-400 flex-shrink-0 mt-1" size={22} />
              <div>
                <div className="font-semibold text-white">{cert.title}</div>
                <div className="text-gray-300 text-sm">{cert.issuer}</div>
                <div className="text-gray-400 text-xs mt-1">{cert.date}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
