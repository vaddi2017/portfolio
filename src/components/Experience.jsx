import React from "react";

const experience = [
  {
    role: "Mobile Application Developer",
    org: "O2 Hospitals & Healthcare, Minneapolis MN",
    time: "June 2025 – Present",
    points: [
      "Develop secure mobile apps integrating React, Angular, Java and Python.",
      "Optimized AI-driven chatbot workflows to enhance patient engagement.",
      "Built and tested database migration strategies for healthcare datasets.",
      "Delivered features that improved usability and reduced support queries.",
    ],
  },
  {
    role: "Full Stack Developer",
    org: "JPMorgan Chase & Co.",
    time: "Dec 2024 – Jun 2025",
    points: [
      "Developed interactive admin panels and enterprise tools using React and Node.js, integrating Flask-based middleware to automate internal workflows across multiple departments.",
      "Designed secure authentication systems using session-based login and JWT tokens to enforce encrypted access across internal and external enterprise endpoints.",
      "Wrote optimized PostgreSQL queries with indexed joins and partitioning strategies to efficiently manage large-scale enterprise datasets with reduced latency.",
      "Refactored legacy codebases by modularizing React components and standardizing architecture, improving reusability, reliability, and team collaboration.",
      "Executed unit and integration testing for APIs and UIs using Pytest and Postman, improving coverage and identifying defects early in the development cycle.",
      "Built centralized logging middleware to track request/response metrics, capture exception traces, and support audit readiness across enterprise services.",
      "Developed multi-tenant SaaS features with role-based access control and tenant-level data isolation, ensuring secure and compliant user access.",
      "Collaborated in Agile ceremonies, participated in user research sessions, and iterated on features to improve usability and customer experience.",
      "Authored technical documentation and onboarding guides to accelerate developer ramp-up and preserve project continuity.",
      "Contributed to Python-based network automation tools, gaining hands-on experience in DevOps and automation workflows.",
    ],
  },
  {
    role: "Graduate Research Assistant",
    org: "Eastern Illinois University",
    time: "Dec 2023 – Nov 2024",
    points: [
      "Designed microservices and CI/CD pipelines using Jenkins and GitHub Actions.",
      "Built web apps to simulate SSO flows and tested AI/NLP prompts for secure microservices.",
      "Performed performance testing and mentored students in Java and cloud tools.",
    ],
  },
  {
    role: "Full Stack Developer",
    org: "V4 Infotec | Client: Walmart",
    time: "Jan 2022 – Aug 2023",
    points: [
      "Developed Java Spring Boot microservices and ASP.NET/C# modules for API integration.",
      "Migrated legacy systems to modern ReactJS front-ends and SQL back-ends.",
      "Integrated AI-powered features and improved API efficiency and UI usability.",
    ],
  },
  {
    role: "Front End Application Developer (Intern)",
    org: "V4 Infotec",
    time: "Jan 2021 – Dec 2021",
    points: [
      "Led front-end development of dynamic and responsive web apps using Angular and React.",
      "Developed and maintained Node.js-based back-end services for smooth data communication.",
      "Built reusable UI components integrating RESTful APIs for real-time features.",
      "Conducted thorough testing with Jest, Jasmine, and Selenium for cross-browser reliability.",
      "Collaborated with DevOps teams to deploy apps on AWS and Docker, streamlining CI/CD pipelines.",
    ],
  },
  {
    role: "Web Developer (Intern)",
    org: "V4 Infotec",
    time: "Oct 2020 – Dec 2020",
    points: [
      "Built responsive web interfaces using HTML, CSS, and JavaScript.",
      "Converted UI/UX designs into functional front-end components.",
      "Collaborated closely with designers and back-end developers for smooth integration.",
      "Tested and debugged for cross-browser performance.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 lg:px-32 py-20 text-center"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">Experience</h2>

        <div className="space-y-6">
          {experience.map((e) => (
            <div
              key={e.role + e.time}
              className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:border-blue-400/30 transition text-left"
            >
              <div className="flex justify-between items-center flex-wrap gap-2">
                <div className="font-semibold text-lg">
                  {e.role} · <span className="text-blue-300">{e.org}</span>
                </div>
                <div className="text-sm text-gray-400">{e.time}</div>
              </div>

              <ul className="list-disc ml-6 mt-3 text-gray-300 text-base space-y-1">
                {e.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
