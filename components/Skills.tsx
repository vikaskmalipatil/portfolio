import { portfolio } from "@/data/portfolio";

export default function Skills() {
  return <section className="section section-muted" id="skills" aria-labelledby="skills-title"><div className="section-container">
    <p className="section-kicker">02 / SKILLS</p>
    <div className="section-heading"><h2 id="skills-title">Tools for building across the stack.</h2><p>A focused technical toolkit spanning application interfaces, APIs, data, and the delivery workflow.</p></div>
    <div className="skills-grid">{portfolio.skills.map(({ category, items }, index) => <article className="skill-card" key={category}><span className="skill-index">0{index + 1}</span><h3>{category}</h3><div className="tags">{items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
  </div></section>;
}
