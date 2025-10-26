import React from "react";
import { motion } from "framer-motion";

const skills = {
  "Frontend": [
    "React.js", "Next.js", "Angular", "HTML", "CSS", "Tailwind CSS", "ShadCN UI"
  ],
  "Backend": [
    "Node.js", "Python", "Java", "Spring Boot", "Express.js", "FastAPI"
  ],
  "Databases": [
    "MySQL", "MongoDB", "PostgreSQL", "DynamoDB", "Redis"
  ],
  "Cloud & DevOps": [
    "AWS", "Azure", "GCP", "Docker", "Kubernetes", "GitHub Actions", "CI/CD"
  ],
  "AI / ML Tools": [
    "TensorFlow", "PyTorch", "Scikit-learn", "LangChain", "OpenAI API", "Pandas", "NumPy"
  ],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 lg:px-32 py-20 text-center"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-blue-400/30 transition text-left"
            >
              <h3 className="text-2xl font-semibold text-blue-300 mb-3">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-gray-200 border border-blue-500/10 hover:bg-blue-500/30 transition"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
