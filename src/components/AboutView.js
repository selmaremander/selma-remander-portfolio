import React from "react";
import "./Panel.css";

export default function AboutView({ onClose }) {
  return (
    <div className="overlay">
      <div className="panel panel--about">
        <header className="panel-header">
          <h1>About me</h1>
        </header>
        <div className="panel-body">
          <p>
            Hi, I am a 3rd year student at Turku University of Applied Sciences.
            Studying to become a game developer and technical artist. I have a
            passion for creating immersive experiences and bringing virtual
            worlds to life. In my free time, I enjoy exploring new technologies,
            playing video games, and collaborating on creative projects. This
            portfolio showcases some of my work and highlights my skills in game
            development and technical artistry. Thank you for visiting!
          </p>
        </div>
      </div>
    </div>
  );
}
