import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import PavanChatbot from "./components/Chatbot";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 dark:bg-gray-950 dark:text-gray-100 bg-grid">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Me */}
      <section id="about">
  <About />
</section>


      {/* Experience */}
      <section id="experience">
        <Experience />
      </section>

      {/* ✅ Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects">
        <Projects />
      </section>

      {/* Publications */}
      <section id="publications">
        <Publications />
      </section>

      {/* Certifications */}
      <section id="certifications">
        <Certifications />
      </section>

      {/* Education */}
      <section id="education">
        <Education />
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
