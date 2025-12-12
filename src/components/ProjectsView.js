import React from "react";
import "./Panel.css";
import "./ProjectsView.css";
import projects from "../data/projects";
import sambi from "../assets/images/sambi.jpg";

export default function ProjectsView({ onClose }) {
  return (
    <div className="overlay">
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
