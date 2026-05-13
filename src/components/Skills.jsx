import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaCss3Alt,
  FaDatabase,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiHtml5,
} from "react-icons/si";

const skills = [
  { name: "Core Java", icon: <FaJava /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "SQL", icon: <FaDatabase className="text-indigo-500" /> },
  { name: "Git", icon: <FaGitAlt /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen py-24 px-6 bg-white dark:bg-slate-950"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-900 dark:text-white">
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
              flex flex-col items-center justify-center
              bg-white dark:bg-slate-900
              border border-gray-300 dark:border-slate-700
              rounded-lg
              py-3 px-2
              hover:shadow-md
              hover:-translate-y-1
              transition duration-300
              "
            >
              {/* Icon */}
              <div className="text-2xl mb-1 text-blue-600 dark:text-blue-400">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
