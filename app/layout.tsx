import type { Metadata } from "next";
import "./globals.css";
import { CursorGlow } from "./CursorGlow";

export const metadata: Metadata = {
  metadataBase: new URL("https://cagriuckan.me"),
  title: "Çağrı Üçkan — Software Developer & AI Automation Consultant",
  description:
    "I build things that run without you. At Codezenic, that means AI agents, automation pipelines, and intelligent systems — production-grade, not prototype. At Kan Themes, high-performance WordPress themes for creators who won't settle for a template.",
  openGraph: {
    title: "Çağrı Üçkan",
    description:
      "I build things that run without you. At Codezenic, that means AI agents, automation pipelines, and intelligent systems — production-grade, not prototype. At Kan Themes, high-performance WordPress themes for creators who won't settle for a template.",
    url: "https://cagriuckan.me",
    siteName: "Çağrı Üçkan",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/ca.png",
        width: 1200,
        height: 630,
        alt: "Çağrı Üçkan — Software Developer & AI Automation Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Çağrı Üçkan — Software Developer & AI Automation Consultant",
    description:
      "I build things that run without you. At Codezenic, that means AI agents, automation pipelines, and intelligent systems — production-grade, not prototype. At Kan Themes, high-performance WordPress themes for creators who won't settle for a template.",
    creator: "@cagriuckan",
    site: "@cagriuckan",
    images: ["/ca.png"],
  },
  icons: {
    icon: "/ca.png",
    shortcut: "/ca.png",
    apple: "/ca.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,200;0,300;0,400;1,300&family=DM+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
