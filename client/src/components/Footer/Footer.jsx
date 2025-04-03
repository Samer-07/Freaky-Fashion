import { useState } from "react";
import "./Footer.css";

const Footer = ({ sections }) => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {sections.map((section, index) => (
          <Accordion key={index} title={section.title} links={section.links} />
        ))}
      </div>
      <div className="footer-bottom">© Freaky Fashion</div>
    </footer>
  );
};

const Accordion = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <button className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>
      <ul className={`accordion-content ${isOpen ? "open" : ""}`}>
        {links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
