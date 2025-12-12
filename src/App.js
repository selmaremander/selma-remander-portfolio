import React, { useState } from "react";
import "./styles/global.css";
import Header from "./components/Header";
import MarginalNav from "./components/MarginalNav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectsView from "./components/ProjectsView";
import AboutView from "./components/AboutView";

function App() {
  const [view, setView] = useState("home");

  function openProjects() {
    setView("projects");
  }
  function openAbout() {
    setView("about");
  }
  function openContact() {
    // scroll to contact section on home
    setView("home");
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 80);
  }
  function goHome() {
    setView("home");
  }

  return (
    <div className="App">
      <Header
        onOpenAbout={openAbout}
        onOpenProjects={openProjects}
        onHome={goHome}
      />
      <MarginalNav
        contact={{
          name: "Selma Remander",
          title: "Technical Artist & Game Developer",
          email: "selma.remander@gmail.com",
          location: "Turku, Finland",
          socials: [
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "GitHub", href: "https://github.com" },
          ],
        }}
      />
      <main>
        {view === "home" && (
          <>
            <section id="about">
              <About onOpenProjects={openProjects} />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </>
        )}
        {view === "projects" && <ProjectsView onClose={goHome} />}
        {view === "about" && <AboutView onClose={goHome} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
