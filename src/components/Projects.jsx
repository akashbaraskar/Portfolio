import projects from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-6 bg-gray-50 dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="
              group
              bg-white dark:bg-slate-900
              border border-gray-300 dark:border-slate-700
              rounded-xl
              overflow-hidden
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-2
              transition duration-300
              "
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {project.techStack?.join(", ")}
                </p>

                <Link
                  to={`/project/${project.id}`}
                  className="text-blue-600 dark:text-blue-400 text-sm font-medium"
                >
                  View Details →
                </Link>

                <div className="flex gap-3 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm px-4 py-2 bg-gray-900 text-white dark:bg-slate-800 rounded-lg hover:bg-gray-700 transition"
                  >
                    <FaGithub />
                    Code
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm px-4 py-2 border border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition"
                    >
                      <FaExternalLinkAlt />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
