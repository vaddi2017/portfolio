import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("⏳ Sending...");

    emailjs
      .sendForm(
        "service_x5t1o1x", // ✅ your Service ID
        "template_fk9yyxh", // ✅ your Template ID
        form.current,
        "Li7UbU_IYD9Sfsxdy" // ✅ your Public Key
      )
      .then(
        () => setStatus("✅ Thanks! Your message has been sent successfully."),
        () => setStatus("❌ Oops! Something went wrong. Please try again later.")
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Contact Me
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mb-8 max-w-xl mx-auto"
        >
          Have an idea, project, or opportunity you’d like to discuss?  
          Let’s connect! I’m always open to collaborating or exploring new roles.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md"
        >
          <input
            required
            name="from_name"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/10 focus:border-blue-400 outline-none text-gray-100 placeholder-gray-400"
          />
          <input
            required
            name="from_email"
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/10 focus:border-blue-400 outline-none text-gray-100 placeholder-gray-400"
          />
          <textarea
            required
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/10 focus:border-blue-400 outline-none text-gray-100 placeholder-gray-400"
          ></textarea>
          <button
            type="submit"
            className="w-full px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold"
          >
            Send Message
          </button>
        </motion.form>

        {/* Status Message */}
        {status && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-4 text-sm ${
              status.includes("✅")
                ? "text-green-400"
                : status.includes("❌")
                ? "text-red-400"
                : "text-gray-300"
            }`}
          >
            {status}
          </motion.p>
        )}

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-2 text-gray-300"
        >
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-blue-400" />
            <a
              href="mailto:pavankishorevaddi@gmail.com"
              className="hover:text-blue-400 transition"
            >
              pavankishorevaddi@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-blue-400" />
            <span>+1 (447) 446-0767</span>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin size={18} className="text-blue-400" />
            <a
              href="https://www.linkedin.com/in/pavan-kishore-vaddi"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Github size={18} className="text-blue-400" />
            <a
              href="https://github.com/vaddi2017"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
