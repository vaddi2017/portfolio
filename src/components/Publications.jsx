import React from "react";
import { motion } from "framer-motion";

const publications = [
  {
    title: "Stress Prediction Based on Social Media (Reddit)",
    authors: "Vaddi Pavan Kishore, Dr. Vijay Kumar Kollati",
    journal:
      "International Research Journal of Modernization in Engineering, Technology and Science (IRJMETS)",
    details:
      "Volume 05, Issue 04, April 2023 | ISSN: 2582-5208 | Impact Factor: 7.868",
    link: "https://doi.org/10.56726/IRJMETS35476",
    description:
      "This research explores AI and NLP-driven stress prediction using Reddit data. It utilizes text mining, sentiment analysis, and emotion recognition to identify stress patterns based on language usage, offering insights for mental health monitoring and early intervention.",
  },
];

export default function Publications() {
  return (
    <section
      id="publications"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 lg:px-32 py-20 text-center"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">
          Publications
        </h2>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:border-blue-400/30 transition text-left shadow-md"
            >
              <h3 className="text-2xl font-semibold text-blue-300 mb-2">
                {pub.title}
              </h3>
              <p className="text-sm text-gray-400 mb-1">
                <strong>Authors:</strong> {pub.authors}
              </p>
              <p className="text-sm text-gray-400 mb-1">
                <strong>Journal:</strong> {pub.journal}
              </p>
              <p className="text-sm text-gray-400 mb-3">{pub.details}</p>
              <p className="text-gray-300 mb-3 leading-relaxed">
                {pub.description}
              </p>
              <a
                href={pub.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline font-medium"
              >
                Read Publication →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
