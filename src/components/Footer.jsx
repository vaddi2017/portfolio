import React from "react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-400 flex items-center justify-between">
        <span>© <span id="year">{new Date().getFullYear()}</span> Pavan Vaddi</span>
        <a href="https://www.linkedin.com/in/pavan-v-6820011a1" target="_blank" className="hover:text-blue-400">LinkedIn</a>
      </div>
    </footer>
  );
}
