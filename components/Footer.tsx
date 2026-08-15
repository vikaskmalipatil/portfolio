import { portfolio } from "@/data/portfolio";

export default function Footer() {
  return <footer className="footer"><div><span>© {new Date().getFullYear()} {portfolio.name}</span><span>Built with Next.js</span></div></footer>;
}
