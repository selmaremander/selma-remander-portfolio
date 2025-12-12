import React from "react";
import "./MarginalNav.css";

export default function MarginalNav({ contact = {} }) {
  const {
    name = "Selma Remander",
    title = "Techincal Artist & Game Developer",
    email = "selma.remander@gmail.com",
    location = "Turku, Finland",
    socials = [],
  } = contact;

  return (
    <footer className="marginal" aria-label="Contact bar">
      <div className="marginal-inner container">
        <div className="contact-block contact-left">
          <div className="contact-name">{name}</div>
          <div className="contact-title muted">{title}</div>
        </div>

        <div className="contact-block contact-center">
          <span className="contact-intro">
            If you'd like to work together, reach out at{" "}
          </span>
          <a href={`mailto:${email}`} className="contact-link">
            {email}
          </a>
        </div>

        <div className="contact-block contact-right">
          <div className="contact-location muted">{location}</div>
          <div className="socials">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
