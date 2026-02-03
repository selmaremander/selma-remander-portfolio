import React from "react";
import "./Panel.css";
import sambi from "../assets/images/sambi.jpg";

export default function AboutView({ onClose }) {
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
        <svg
          className="squiggle squiggle--2"
          viewBox="0 0 2400 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 C400,180 800,40 1200,110 C1600,180 2000,60 2400,120"
            fill="none"
            stroke="rgba(150,100,220,0.28)"
            strokeWidth="16"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="squiggle squiggle--3"
          viewBox="0 0 2400 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,100 760,0 1200,60 C1640,120 1960,20 2400,80"
            fill="none"
            stroke="rgba(210,180,255,0.24)"
            strokeWidth="14"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="squiggle squiggle--4"
          viewBox="0 0 2400 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,160 C400,120 800,200 1200,150 C1600,100 2000,180 2400,140"
            fill="none"
            stroke="rgba(130,90,200,0.2)"
            strokeWidth="22"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="panel panel--about">
        <div className="about-sidebar">
          <h1 className="about-title">ABOUT ME</h1>
        </div>

        <div className="about-content">
          <div className="panel-body">
            <h2>Hello,</h2>
            <p>
              My name is Selma Remander. I am a 3rd year student at Turku
              University of Applied Sciences currently specializing in Game and
              Interactive technologies. I am in the beginning of my career and
              still figuring out exactly where I want to land, but I’m excited
              to try different creative and technical paths and see what sticks.
            </p>
            <br></br>
            <h2>Skills & what I'm learning</h2>
            <p>
              My dream is to work as an UI/UX designer and developer. Here are
              some of the skills I have: Python, JavaScript, C#, HTML
            </p>
            <br></br>
            <h2>In my free time I</h2>
            <p>Do cheerleading, hang out with friends, play video games.</p>
          </div>
        </div>
        <div className="about-photo" aria-hidden="true">
          <img src={sambi} alt="Sambi" />
          <span className="dot dot--1" />
          <span className="dot dot--2" />
          <span className="dot dot--3" />
          <span className="dot dot--4" />
        </div>
      </div>
    </div>
  );
}
