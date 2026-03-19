import type { Metadata } from "next";
import Link from "next/link";
import { remark } from "remark";
import remarkHtml from "remark-html";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  return {
    title: `${post.title} — Çağrı Üçkan`,
    description: post.excerpt,
    alternates: {
      canonical: `https://cagriuckan.me/blog/${params.slug}`,
    },
  };
}

async function markdownToHtml(markdown: string) {
  const result = await remark().use(remarkHtml).process(markdown);
  return result.toString();
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  const contentHtml = await markdownToHtml(post.content);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url: `https://cagriuckan.me/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://cagriuckan.me/blog/${post.slug}`,
    },
    author: {
      "@type": "Person",
      name: "Çağrı Üçkan",
      url: "https://cagriuckan.me",
    },
    publisher: {
      "@type": "Person",
      name: "Çağrı Üçkan",
      url: "https://cagriuckan.me",
    },
  };

  return (
    <main className="page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <header>
        <div className="logo-wrapper">
          <Link href="/" className="logo" style={{ textDecoration: "none" }}>
            Çağrı Üçkan
          </Link>
        </div>
        <Link href="/blog" className="back-link">
          ← Back to Blog
        </Link>
      </header>

      <article className="post-article">
        <div className="post-article-meta">
          <span className="post-date">{formatDate(post.date)}</span>
          <span className="post-read-time">{post.readTime}</span>
        </div>
        <h1 className="post-article-title">{post.title}</h1>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>

      <div className="divider" style={{ marginTop: "auto" }} />

      <footer className="post-footer">
        <Link href="/blog" className="back-link">
          ← Back to Blog
        </Link>
        <Link href="/" className="back-link">
          Back to Home →
        </Link>
      </footer>
    </main>
  );
}
