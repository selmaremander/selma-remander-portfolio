import React, { useEffect, useState } from "react";
import "./About.css";
import "./Panel.css";
import alienImg from "../assets/images/alien lemmikki basic.png";

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
    <div className="overlay">
      <div className="squiggles" aria-hidden="true">
        <svg
          className="squiggle squiggle--1"
          viewBox="0 0 2400 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C300,10 700,150 1200,90 C1700,30 2100,150 2400,100"
            fill="none"
            stroke="rgba(155,123,255,0.32)"
            strokeWidth="20"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="container about">
        {/* Hero: three overlapping ovals with entrance animation */}
        <div className={`hero-rows ${mounted ? "is-open" : "is-stacked"}`}>
          <button
            className="hero-oval hero-oval--left"
            onClick={handleOvalClick}
            aria-label="Open projects"
          >
            <div className="oval-content">
              <div className="eyebrow muted">Hi, I'm</div>
              <h1 className="lead">Selma Remander</h1>
              <p className="muted">Welcome to my portfolio</p>
            </div>
          </button>

          <button
            className="hero-oval hero-oval--center hero-oval--intro"
            onClick={handleOvalClick}
            aria-label="Open projects"
          >
            <div className="intro-overlay">
              <p>Click here or click any circle to see my projects.</p>
            </div>
          </button>

          <button
            className="hero-oval hero-oval--right"
            onClick={handleOvalClick}
            aria-label="Open projects"
          >
            <img src={alienImg} alt="right" />
          </button>
        </div>
      </div>
    </div>
  );
}
