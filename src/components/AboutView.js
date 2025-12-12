import React from "react";
import "./Panel.css";

export default function AboutView({ onClose }) {
  return (
    <div className="overlay">
      <div className="panel">
        <header className="panel-header">
          <h1>About me</h1>
        </header>
        <div className="panel-body">
          <p>
            This is the About view — put your full bio, skills and experience
            here.
          </p>
        </div>
      </div>
    </div>
  );
}
