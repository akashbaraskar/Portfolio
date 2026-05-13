import subjects from "../data/subjects";
import { FaBookOpen, FaExternalLinkAlt } from "react-icons/fa";

function MySubjects() {
  return (
    <section
      id="mysubjects"
      className="min-h-screen py-24 px-6 bg-gray-50 dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          My Subjects
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className="bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {subject.name}
              </h3>

              <div className="flex gap-3 flex-wrap">
                {subject.link && (
                  <a
                    href={subject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    <FaBookOpen />
                    View Notes
                  </a>
                )}

                {!subject.link && (
                  <button
                    disabled
                    className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-gray-300 text-gray-600 rounded-lg cursor-not-allowed"
                  >
                    No Notes Available
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MySubjects;
