import { useEffect, useState } from "react";
import Profile from "../assets/Profile.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  const text = "Full Stack Developer";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 80);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 sm:px-6 pt-24 bg-white dark:bg-slate-950 overflow-x-hidden"
    >
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="w-full">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white break-words">
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Akash Baraskar
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mt-4 h-8">
            {displayText}
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-lg">
            Passionate developer focused on building modern web applications
            using React, Node.js and scalable backend technologies.
          </p>

          <div className="flex gap-4 mt-6 flex-wrap">
            <a
              href="/Resume.pdf"
              download
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition shadow"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg transition"
            >
              View Projects
            </a>
          </div>

          <div className="flex gap-6 mt-6 text-xl text-gray-700 dark:text-gray-300">
            <a
              href="https://github.com/akashbaraskar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/akash-baraskar-12875323b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:akashbarskar57@gmail.com"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end w-full">
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-500"></div>

            <div
              className="
  relative
  w-[280px] sm:w-[350px] md:w-[420px]
  h-[350px] sm:h-[420px] md:h-[500px]
  rounded-3xl
  overflow-hidden
  bg-white/40 dark:bg-slate-900/60
  backdrop-blur-lg
  border border-gray-200 dark:border-slate-700
  shadow-2xl
  group-hover:scale-[1.03]
  transition duration-500
  "
            >
              <img
                src={Profile}
                alt="Akash Baraskar"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
