import React from "react";
import "./Panel.css";
import "./ProjectsView.css";
import projects from "../data/projects";
import sambi from "../assets/images/sambi.jpg";

export default function ProjectsView({ onClose }) {
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

      <div className="panel">
        <header className="panel-header">
          <h1>Projects</h1>
        </header>
        <div className="panel-body">
          {projects.map((p) => (
            <article key={p.id} className="panel-project">
              <h3>{p.title}</h3>

              <div className="project-media">
                {(p.images || [sambi, sambi, sambi]).map((imgSrc, i) => {
                  const key = `${p.id}-img-${i}`;
                  const src = imgSrc || sambi;
                  return (
                    <div key={key} className={`media-item`}>
                      <img src={src} alt={`${p.title} ${i + 1}`} />
                    </div>
                  );
                })}
              </div>

              <div className="media-text">
                <h4>{p.title}</h4>
                <p className="shell-desc">{p.description}</p>
                {p.link && (
                  <p>
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                      View
                    </a>
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
