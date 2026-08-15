import { portfolio } from "@/data/portfolio";

export default function Contact() {
  return <section className="section contact" id="contact" aria-labelledby="contact-title"><div className="section-container contact-container">
    <p className="section-kicker">05 / CONTACT</p><h2 id="contact-title">Let&apos;s build something useful.</h2>
    <p>I&apos;m actively seeking internship opportunities where I can contribute to a thoughtful engineering team and keep learning.</p>
    <a className="button button-primary" href={`mailto:${portfolio.email}`}>Start a conversation <span aria-hidden="true">↗</span></a>
    <div className="contact-details"><a href={`mailto:${portfolio.email}`}>{portfolio.email}</a><a href={`tel:${portfolio.phone.replace(/\s/g, "")}`}>{portfolio.phone}</a><a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={portfolio.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
  </div></section>;
}
