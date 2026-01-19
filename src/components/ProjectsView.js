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

      <div className="panel panel--projects">
        <div className="projects-sidebar">
          <h1 className="projects-title">projects</h1>
        </div>

        <div className="projects-content">
          <div className="projects-grid">
            {projects.map((p, idx) => {
              const imgSrc = p.images?.[0] || sambi;
              // alternate layout: image-text-image pattern
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={p.id}
                  className={`project-block ${
                    isEven ? "block--image-right" : "block--image-left"
                  }`}
                >
                  {isEven ? (
                    <>
                      <div className="block-text">
                        <h3>{p.title}</h3>
                        <p>{p.description}</p>
                        {p.link && (
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            View Project →
                          </a>
                        )}
                      </div>
                      <div className="block-image">
                        <img src={imgSrc} alt={p.title} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="block-image">
                        <img src={imgSrc} alt={p.title} />
                      </div>
                      <div className="block-text">
                        <h3>{p.title}</h3>
                        <p>{p.description}</p>
                        {p.link && (
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            View Project →
                          </a>
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
