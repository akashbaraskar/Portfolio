import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-slate-950 py-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-3 items-center">
        
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Designed & Developed by Akash Baraskar
        </p>

        <div className="flex justify-center gap-6 text-lg text-gray-600 dark:text-gray-300">
          <a
            href="https://github.com/akashbaraskar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/akash-baraskar-12875323b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:akashbarskar57@gmail.com"
            className="hover:text-blue-600 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="flex justify-end">
          <a
            href="#"
            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 transition"
          >
            Back to Top <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
