import React, { useEffect, useRef, useState } from "react";
import "./Header.css";

export default function Header({ onOpenAbout, onOpenProjects, onHome }) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    function onScroll() {
      const currentY = window.scrollY || window.pageYOffset;
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          // hide when scrolling down, show when scrolling up
          if (currentY > lastY.current && currentY > 60) {
            setHidden(true);
          } else {
            setHidden(false);
          }
          lastY.current = currentY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${hidden ? "hidden" : ""}`}>
      <div className="header-inner">
        <nav className="nav" aria-label="Main navigation">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              onOpenAbout && onOpenAbout();
            }}
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              onOpenProjects && onOpenProjects();
            }}
          >
            Projects
          </a>
          <button className="btn small" onClick={() => onHome && onHome()}>
            Home
          </button>
        </nav>
      </div>
    </header>
  );
}
