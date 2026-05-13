import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const navigate = useNavigate();

  if (!project) {
    return <div className="text-center py-40 text-2xl">Project not found</div>;
  }

  return (
    <section className="min-h-screen py-24 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <HashLink
          smooth
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-10"
        >
          <FaArrowLeft />
          Back to Projects
        </HashLink>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100 dark:bg-slate-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[420px] object-contain transition duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              {project.title}
            </h1>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              {project.description}
            </p>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>

              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-200 dark:bg-slate-800 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Features</h2>

              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                <FaGithub />
                View Code
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
