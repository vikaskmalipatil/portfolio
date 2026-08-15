import { portfolio } from "@/data/portfolio";

export default function About() {
  const { education } = portfolio;
  return <section className="section" id="about" aria-labelledby="about-title"><div className="section-container">
    <p className="section-kicker">01 / ABOUT</p>
    <div className="section-heading"><h2 id="about-title">Building a strong foundation in software engineering.</h2><p>I am a Computer Science student who enjoys turning product ideas into functional web applications. I am looking for an internship where I can contribute, learn from a team, and keep growing as an engineer.</p></div>
    <div className="education-card">
      <div><p className="card-label">Education</p><h3>{education.degree}</h3><p>{education.institution}<br />{education.location}</p></div>
      <dl><div><dt>Period</dt><dd>{education.period}</dd></div><div><dt>CGPA</dt><dd>{education.cgpa}</dd></div></dl>
      <div className="coursework"><p className="card-label">Relevant coursework</p><div>{education.coursework.map((course) => <span key={course}>{course}</span>)}</div></div>
    </div>
  </div></section>;
}
