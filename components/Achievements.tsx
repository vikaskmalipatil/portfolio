import { achievements } from "@/data/portfolio";

export default function Achievements() {
  return <section className="section section-muted" id="achievements" aria-labelledby="achievements-title"><div className="section-container">
    <p className="section-kicker">04 / ACHIEVEMENTS</p>
    <div className="section-heading"><h2 id="achievements-title">Recognition for building and contributing.</h2><p>Competitive achievements that reflect technical execution and collaborative work.</p></div>
    <div className="achievements-list">{achievements.map((achievement, index) => <article key={achievement.title}><span>0{index + 1}</span><div><h3>{achievement.title}</h3><p>{achievement.description}</p></div></article>)}</div>
  </div></section>;
}
