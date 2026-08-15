"use client";

import { useState } from "react";
import { portfolio } from "@/data/portfolio";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Achievements", "#achievements"],
  ["Contact", "#contact"],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="nav-container" aria-label="Main navigation">
        <a className="logo" href="#top" aria-label={`${portfolio.name} home`}>
          VK<span>.</span>
        </a>
        <div className="desktop-nav">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </div>
        {portfolio.resumeUrl ? (
          <a className="nav-resume" href={portfolio.resumeUrl} target="_blank" rel="noopener noreferrer">Resume <span aria-hidden="true">↗</span></a>
        ) : (
          <span className="nav-resume unavailable" title="Add a resume URL in data/portfolio.ts">Resume</span>
        )}
        <button className="mobile-menu" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation">
          <span className="sr-only">Toggle navigation</span><span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
      </nav>
      {open && <div className="mobile-nav" id="mobile-navigation">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        {portfolio.resumeUrl ? <a href={portfolio.resumeUrl} target="_blank" rel="noopener noreferrer">Resume ↗</a> : <span className="unavailable">Resume — add URL</span>}
      </div>}
    </header>
  );
}
