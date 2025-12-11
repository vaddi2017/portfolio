import React from "react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between gap-2 text-center">
        <span>
          © {new Date().getFullYear()} <span className="text-blue-400">Pavan Vaddi</span> — All rights reserved.
        </span>

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/pavnkv/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:pavankishorevaddi@gmail.com"
            className="hover:text-blue-400 transition"
          >
            Email
          </a>
          <a
            href="https://github.com/vaddi2017"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
