import React, { useEffect, useState } from "react";
import "./About.css";
import sambiImg from "../assets/images/sambi.jpg";

export default function About({ onOpenProjects }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(t);
  }, []);

  function handleOvalClick(e) {
    e.preventDefault();
    if (onOpenProjects) onOpenProjects();
  }

  return (
    <div className="container about">
      {/* Hero: three overlapping ovals with entrance animation */}
      <div className={`hero-rows ${mounted ? "is-open" : "is-stacked"}`}>
        <button
          className="hero-oval hero-oval--left"
          onClick={handleOvalClick}
          aria-label="Open projects"
        >
          <div className="oval-content">
            <div className="eyebrow muted">Conceptual Work</div>
            <h1 className="lead">The Gallery</h1>
            <p className="muted">A curated portfolio of selected projects</p>
          </div>
        </button>

        <button
          className="hero-oval hero-oval--center hero-oval--intro"
          onClick={handleOvalClick}
          aria-label="Open projects"
        >
          <img src={sambiImg} alt="center" />
          <div className="intro-overlay">
            <p>
              Hi — I'm Your Name. I build modern web experiences that blend
              design and code. This is a brief intro — click any circle to see
              projects.
            </p>
          </div>
        </button>

        <button
          className="hero-oval hero-oval--right"
          onClick={handleOvalClick}
          aria-label="Open projects"
        >
          <img src={sambiImg} alt="right" />
          <div className="oval-label">21st. century</div>
        </button>
      </div>

      {/* keep a copy of the intro below for accessibility and content editors */}
      <div className="intro sr-only">
        <p>
          Hi — I'm Your Name, a developer who builds useful things. This is a
          simple portfolio template you can customize with your bio, skills, and
          experience.
        </p>
      </div>
    </div>
  );
}
