import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "AI, Automation, and Software Development Blog — Çağrı Üçkan",
  description:
    "This is my personal blog where I share my thoughts and experiences on AI, automation, and software development.",
  alternates: {
    canonical: "https://cagriuckan.me/blog",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="page-wrapper">
      <header>
        <div className="logo-wrapper">
          <Link href="/" className="logo" style={{ textDecoration: "none" }}>
            
            Çağrı Üçkan
          </Link>
        </div>
        <Link href="/" className="back-link">
          ← Back to Home
        </Link>
      </header>

      <div className="blog-header">
        <h1 className="blog-title">Blog</h1>
        <h2 className="blog-description">This is my personal blog where I share my thoughts and experiences on AI, automation, and software development.</h2>
      </div>


      <section className="post-list">
        {posts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="post-card"
            style={{ "--delay": `${0.08 + i * 0.06}s` } as React.CSSProperties}
          >
            <div className="post-card-meta">
              <span className="post-date">{formatDate(post.date)}</span>
              <span className="post-read-time">{post.readTime}</span>
            </div>
            <h3 className="post-card-title">{post.title}</h3>
            <p className="post-card-excerpt">{post.excerpt}</p>
            <span className="post-card-arrow">→</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
