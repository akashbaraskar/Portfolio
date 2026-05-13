import React from "react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "Projects", link: "projects" },
    { name: "Achievements", link: "achievements" },
    { name: "Certifications", link: "certifications" },
    { name: "My Subjects", link: "mysubjects" },
    { name: "Contact", link: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((item) => {
        const section = document.getElementById(item.link);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(item.link);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-gray-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="">
          <h1
            onClick={() => scrollToSection("home")}
            className="cursor-pointer text-2xl font-bold text-gray-900 dark:text-white"
          >
            Portfolio
          </h1>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((item, index) => (
            <li key={index} className="relative group">
              <button
                onClick={() => scrollToSection(item.link)}
                className={`transition ${
                  active === item.link
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {item.name}
              </button>

              <span
                className={`absolute left-0 bottom-[-4px] h-[2px] bg-blue-600 dark:bg-blue-400 transition-all duration-300 ${
                  active === item.link ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <button
            className="md:hidden text-gray-800 dark:text-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
          <ul className="flex flex-col items-center gap-6 py-6 font-medium">
            {navLinks.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToSection(item.link)}
                  className={`transition ${
                    active === item.link
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
