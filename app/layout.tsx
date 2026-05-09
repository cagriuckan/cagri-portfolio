import type { Metadata } from "next";
import "./globals.css";
import { CursorGlow } from "./CursorGlow";

export const metadata: Metadata = {
  metadataBase: new URL("https://cagriuckan.me"),
  title: "Çağrı Üçkan — Software Developer & AI Automation Consultant",
  description:
    "I build digital engines that scale without friction. At Codezenic, we engineer AI-native systems and high-performance software—turning manual complexity into automated growth. At Kan Themes, I set the standard for high-speed WordPress architecture. Production-grade by design, intelligent by default.",
  openGraph: {
    title: "Çağrı Üçkan",
    description:
      "I build digital engines that scale without friction. At Codezenic, we engineer AI-native systems and high-performance software—turning manual complexity into automated growth. At Kan Themes, I set the standard for high-speed WordPress architecture. Production-grade by design, intelligent by default.",
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
      "I build digital engines that scale without friction. At Codezenic, we engineer AI-native systems and high-performance software—turning manual complexity into automated growth. At Kan Themes, I set the standard for high-speed WordPress architecture. Production-grade by design, intelligent by default.",
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
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=DM+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="site-frame">
        <CursorGlow />
        <div className="site-shell">{children}</div>
      </body>
    </html>
  );
}
