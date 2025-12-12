import React from "react";
import "./Projects.css";
import projects from "../data/projects";

export default function Projects() {
  return (
    <div className="container projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <article key={p.id} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
