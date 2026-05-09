import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";

export const metadata: Metadata = {
  title: "Çağrı Üçkan — Software Developer & AI Automation Consultant",
  description:
    "Software developer & AI automation consultant. Building production-grade AI agents and automation systems at Codezenic, and WordPress themes at Kan Themes.",
  alternates: {
    canonical: "https://cagriuckan.me",
  },
};

export default function Home() {
  return (
    <main className="page-wrapper">
      <header className="site-header">
        <BrandLogo />
        <nav className="nav-pill" aria-label="Primary">
          <a href="#ventures" className="nav-pill__link nav-pill__link--active">
            Work
          </a>
          <Link href="/blog" className="nav-pill__link">
            Blog
          </Link>
          <a href="mailto:uckancagri@gmail.com" className="nav-pill__link">
            Contact
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-heading">
        <h1 id="hero-heading" className="hero__title">
          <span className="hero__line">
            Hey, I&apos;m <span className="hero__name">Çağrı</span>
          </span>
          <span className="hero__line hero__line--second">
            I&apos;m a software developer &amp; AI consultant.
          </span>
        </h1>
        <h2 className="hero__subtitle">
          I build digital engines that scale without friction. At Codezenic, we engineer AI-native
          systems and high-performance software—turning manual complexity into automated growth. At
          Kan Themes, I set the standard for high-speed WordPress architecture. Production-grade by
          design, intelligent by default.
        </h2>
      </section>

      <section id="ventures" className="ventures" aria-label="Work">
        <a
          href="https://codezenic.com"
          target="_blank"
          rel="noopener noreferrer"
          className="venture-card"
          style={{ "--delay": "0.38s" } as React.CSSProperties}
        >
          <span className="venture-card__label">Founder</span>
          <span className="venture-card__name">Codezenic</span>
        </a>
        <a
          href="https://kanthemes.com"
          target="_blank"
          rel="noopener noreferrer"
          className="venture-card"
          style={{ "--delay": "0.44s" } as React.CSSProperties}
        >
          <span className="venture-card__label">WordPress</span>
          <span className="venture-card__name">Kan Themes</span>
        </a>
        <div
          className="venture-card"
          style={
            {
              "--delay": "0.5s",
              cursor: "default",
              pointerEvents: "none",
            } as React.CSSProperties
          }
        >
          <span className="venture-card__label">Since</span>
          <span className="venture-card__name">2014</span>
        </div>
      </section>

      <div className="divider" />

      <footer className="site-footer">
        <div className="site-footer__strip">
          <div className="site-footer__status">
            <p className="footer-line">
              <span className="footer-line__icon" aria-hidden />
              Open to work · Founder @ Codezenic
            </p>
            <p className="footer-line">
              <span className="footer-line__icon footer-line__icon--pin" aria-hidden>
                📍
              </span>
              Based in Turkey · 39.9208° K, 32.8541° D
            </p>
          </div>
        </div>

        <ul className="site-footer__topics" aria-label="Focus areas">
          {["AI", "Node.js", "React", "WordPress", "E-commerce"].map((tag) => (
            <li key={tag}>
              <span className="topic-pill">{tag}</span>
            </li>
          ))}
        </ul>

        <div className="site-footer__meta">
          <nav className="site-footer__links" aria-label="Social and links">
            <a href="https://www.linkedin.com/in/cagriuckan" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/cagriuckan" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://dribbble.com/cagriuckan" target="_blank" rel="noopener noreferrer">
              Dribbble
            </a>
            <a href="mailto:uckancagri@gmail.com">Email</a>
            <Link href="/blog">Blog</Link>
          </nav>
        </div>

        <p className="site-footer__copy">© {new Date().getFullYear()} Çağrı Üçkan</p>
      </footer>

      <div className="scroll-hint" aria-hidden="true">
        ↓
      </div>
    </main>
  );
}
