import Image from "next/image";
import { portfolio } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Available for software development internships</p>
        <h1 id="hero-title">Vikas <span>K Malipatil</span></h1>
        <p className="hero-role">{portfolio.role}</p>
        <p className="hero-description">I build practical, full-stack products with a focus on dependable systems, clear user experiences, and thoughtful engineering.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">View projects <span aria-hidden="true">↓</span></a>
          <a className="button button-secondary" href="#contact">Contact me</a>
          <a className="button button-secondary" href={portfolio.resumeUrl} target="_blank" rel="noopener noreferrer">View Resume <span aria-hidden="true">↗</span></a>
        </div>
        <div className="social-links" aria-label="Social profiles">
          <a href={portfolio.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          <a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          {portfolio.resumeUrl ? <a href={portfolio.resumeUrl} target="_blank" rel="noopener noreferrer">Resume <span aria-hidden="true">↗</span></a> : <span className="unavailable" title="Add a resume URL in data/portfolio.ts">Resume — add URL</span>}
        </div>
      </div>
      <aside className="hero-panel" aria-label="Developer profile">
        <div className="profile-image-wrap">
          <Image
            className="profile-image"
            src="/vikas-k-malipatil.jpeg"
            alt="Vikas K Malipatil"
            width={1200}
            height={1800}
            priority
            sizes="(max-width: 900px) min(100vw - 72px, 540px), 360px"
          />
        </div>
        <div className="profile-details">
          <p className="panel-label">Currently focused on</p>
          <ul>
            <li><span>01</span> Full-stack web applications</li>
            <li><span>02</span> Scalable backend APIs</li>
            <li><span>03</span> {portfolio.currentlyLearning} foundations</li>
          </ul>
          <div className="panel-status"><i aria-hidden="true" /> Open to internships</div>
        </div>
      </aside>
    </section>
  );
}
