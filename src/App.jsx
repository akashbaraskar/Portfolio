import React from "react";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import MySubjects from "./components/MySubjects";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectPage from "./pages/ProjectDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-black dark:bg-slate-950 dark:text-white transition-colors duration-300">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <main className="w-full overflow-x-hidden">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Achievements />
              <Certifications />
              <MySubjects />
              <Contact />
              <Footer />
            </main>
          }
        />

        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
