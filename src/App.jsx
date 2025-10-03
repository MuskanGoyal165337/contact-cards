import React from "react";
import "./App.css";

const cards = [
  {
    name: "VS Code",
    description: "Download for VS Code",
    linkText: "Install now",
    link: "https://code.visualstudio.com/download",
    logo: (
      <svg width="55" height="55" fill="none" viewBox="0 0 32 32">
        <path fill="#000" d="M16 3L29 9v14L16 29 3 23V9l13-6z"/>
        <path fill="#0065A9" d="M16 1L0 8.5l4 2V9l12-4.5L28 9l4-2V8.5L16 1z"/>
      </svg>
    ),
  },
  {
    name: "JetBrains",
    description: "Download for JetBrains",
    linkText: "Install now",
    link: "https://www.jetbrains.com/products/",
    logo: (
      <svg width="55" height="55" fill="none" viewBox="0 0 48 48">
        <rect width="40" height="40" x="4" y="4" rx="8" fill="#F4F4F4"/>
        <text x="9" y="30" fontSize="15" fill="#888">JET<br/>BRAINS</text>
      </svg>
    ),
  },
  {
    name: "GitHub",
    description: "Check out the source code",
    linkText: "Open",
    link: "https://github.com/",
    logo: (
      <svg width="55" height="55" viewBox="0 0 24 24" fill="none">
        <path fill="#181717" d="M12 2C6.477 2 2 6.485 2 12.012a10.013 10.013 0 006.837 9.498c.5.093.683-.216.683-.482v-1.692c-2.781.604-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.07-.608.07-.608 1.004.071 1.532 1.033 1.532 1.033.893 1.53 2.341 1.088 2.91.832.093-.646.35-1.09.636-1.342-2.22-.253-4.555-1.113-4.555-4.951 0-1.094.39-1.991 1.03-2.693-.104-.254-.447-1.277.098-2.662 0 0 .84-.27 2.75 1.025a9.558 9.558 0 012.5-.336c.849.004 1.706.115 2.5.336 1.909-1.295 2.748-1.025 2.748-1.025.546 1.385.203 2.408.1 2.662.64.702 1.03 1.599 1.03 2.693 0 3.848-2.338 4.695-4.566 4.943.357.308.678.919.678 1.852v2.747c0 .269.182.579.688.481A10.012 10.012 0 0022 12.012C22 6.485 17.523 2 12 2z"/>
      </svg>
    ),
  },
  {
    name: "Discord",
    description: "Meet the community",
    linkText: "Join us",
    link: "https://discord.com/",
    logo: (
      <svg width="55" height="55" viewBox="0 0 24 24" fill="none">
        <path fill="#5865F2" d="M22 24c-.23 0-.426-.164-.478-.386l-1.208-5.507c-2.905.628-5.9.628-8.803 0l-1.209 5.507A.483.483 0 010 24V.48C0 .218.218 0 .48 0h23.04c.263 0 .48.218.48.48v23.04a.48.48 0 01-.48.48z"/>
      </svg>
    ),
  },
];

function ContactCards() {
  return (
    <div className="footer-container">
     
      <div className="cards-row">
        {cards.map((card) => (
          <div className="contact-card" key={card.name}>
            <div className="icon">{card.logo}</div>
            <div className="name">{card.name}</div>
            <div className="description">{card.description}</div>
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              {card.linkText} <span className="arrow">↗</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactCards;
