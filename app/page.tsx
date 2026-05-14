import type { Metadata } from "next";
import Link from "next/link";

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
      <header>
        <div className="logo-wrapper">
          <h1 className="logo">Çağrı Üçkan</h1>
          <div className="logo-avatar">
            <img src="/avatar.png" alt="Çağrı Üçkan portrait" />
          </div>
        </div>
        <div className="header-right">
          <Link href="/blog" className="blog-nav-link">Blog</Link>
          <div className="status">
            <span className="dot" />
            <span className="status-text">Open to Work</span>
          </div>
        </div>
      </header>

      <section className="intro-section">
        <a href="https://codezenic.com" target="_blank" rel="noopener noreferrer" className="intro-item" style={{ "--delay": "0.08s" } as React.CSSProperties}>
          Codezenic
          <span className="tag">[Founder]</span>
        </a>
        <a href="https://kanthemes.com" target="_blank" rel="noopener noreferrer" className="intro-item" style={{ "--delay": "0.2s" } as React.CSSProperties}>
          Kan Themes
          <span className="tag">[WordPress]</span>
        </a>
        <div className="intro-item" style={{ "--delay": "0.26s" } as React.CSSProperties}>
          Working
          <span className="tag">[since '14]</span>
        </div>
        <div className="intro-item" style={{ "--delay": "0.32s" } as React.CSSProperties}>
          Tukey
          <span className="tag">[Based in]</span>
        </div>
      </section>

      <div className="divider" />

      <footer>
        <div className="bio-col">
          <p className="label">Biography</p>
          <h2 className="bio">
          I build things that run without you. At Codezenic, that means AI agents, automation pipelines, and intelligent systems — production-grade, not prototype. At Kan Themes, high-performance WordPress themes for creators who won't settle for a template.
          </h2>
          <div className="interests-col">
          <div className="label">Interests</div>
          <h3>Artificial Intelligence</h3>
          <h3>Node.js · React</h3>
          <h3>Machine Learning</h3>
          <h3>WordPress</h3>
          <h3>E-commerce</h3>
          <h3>Travel</h3>
        </div>
          <nav className="socials">
            <a href="https://www.linkedin.com/in/cagriuckan" target="_blank" rel="noopener noreferrer">↗ LinkedIn</a>
            <a href="https://github.com/cagriuckan" target="_blank" rel="noopener noreferrer">↗ GitHub</a>
            <a href="https://dribbble.com/cagriuckan" target="_blank" rel="noopener noreferrer">↗ Dribbble</a>
            <a href="mailto:uckancagri@gmail.com">↗ Email</a>
            <Link href="/blog">↗ Blog</Link>
          </nav>
        </div>
        <div className="location-col">
        <p className="label" style={{ marginTop: "16px" }}>Location</p>
        <p className="coords">39.9208° K, 32.8541° D — Turkey</p>
        </div>
     
      </footer>
    </main>
  );
}
