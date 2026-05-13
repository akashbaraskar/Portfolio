import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center px-6 py-24 
      bg-white dark:bg-slate-950"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          About Me
        </h2>

        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          I'm <span className="font-semibold text-blue-600 dark:text-blue-400">
          Akash Baraskar
          </span>, a Computer Science student passionate about building scalable 
          web applications and solving real-world problems using technologies 
          like React, Node.js, MongoDB, and Java.
        </p>

      </div>
    </motion.section>
  );
}
