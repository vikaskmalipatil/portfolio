import { projects } from "@/data/portfolio";

export default function Projects() {
  return <section className="section" id="projects" aria-labelledby="projects-title"><div className="section-container">
    <p className="section-kicker">03 / SELECTED PROJECTS</p>
    <div className="section-heading"><h2 id="projects-title">Engineering for useful, real-world workflows.</h2><p>Selected work across SaaS, real-time discovery, and AI-powered student insights.</p></div>
    <div className="projects-grid">{projects.map((project, index) => <article className={`project-card project-${index + 1}`} key={project.name}>
      <header><div><span className="project-index">0{index + 1}</span><p className="project-date">{project.date}</p></div>{project.award && <span className="award-badge">{project.award}</span>}</header>
      <h3>{project.name}</h3><p className="project-subtitle">{project.subtitle}</p><p className="project-description">{project.description}</p>
      <ul className="project-highlights">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
      <div className="tags project-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
      <div className="project-links">{project.links.map((link) => link.url ? <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">{link.label} <span aria-hidden="true">↗</span></a> : <span key={link.label} className="unavailable" title={link.placeholder}>{link.label} — add URL</span>)}</div>
    </article>)}</div>
  </div></section>;
}
