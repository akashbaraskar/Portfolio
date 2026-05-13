import certifications from "../data/certifications";
import { FaExternalLinkAlt } from "react-icons/fa";

function Certifications() {
  return (
    <section
      id="certifications"
      className="min-h-screen py-24 px-6 bg-gray-50 dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {cert.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {cert.platform}
              </p>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm px-4 py-2 border border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition"
                >
                  <FaExternalLinkAlt />
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
