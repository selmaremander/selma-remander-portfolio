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
          name: "Your Name",
          title: "Designer & Developer",
          email: "you@example.com",
          phone: "+00 000 000",
          location: "City, Country",
          socials: [
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "Instagram", href: "https://instagram.com" },
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
