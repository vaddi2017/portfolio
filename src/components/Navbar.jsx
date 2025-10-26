import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/10 bg-white/10 dark:bg-gray-900/70 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#hero" className="text-2xl font-bold text-blue-400">
          Pavan Vaddi
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {link.name}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-gray-700 dark:text-gray-300 hover:text-yellow-400 transition"
            title="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200 hover:text-blue-400"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-white/10 py-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="ml-6 mt-3 text-gray-700 dark:text-gray-300 hover:text-yellow-400 transition"
          >
            {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
          </button>
        </div>
      )}
    </nav>
  );
}
