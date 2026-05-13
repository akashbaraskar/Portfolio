import achievements from "../data/achievements";

function Achievements() {
  return (
    <section
      id="achievements"
      className="min-h-screen py-24 px-6 bg-gray-50 dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Achievements
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {item.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
