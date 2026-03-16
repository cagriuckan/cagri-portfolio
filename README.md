# Çağrı Üçkan — Portfolio

Personal portfolio & biography site for Çağrı Üçkan.  
Design inspired by the Crestline dark minimal aesthetic.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **DM Sans + DM Mono** — Google Fonts

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build & Export

```bash
npm run build
```

Static export goes to `/out` — ready to deploy to any static host (Vercel, Netlify, GitHub Pages).

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Simply push to GitHub and connect to Vercel. No configuration needed.

## Structure

```
app/
  layout.tsx        # Root layout, fonts, metadata
  page.tsx          # Main page (client — nav state)
  globals.css       # Tailwind + custom animations

components/
  Header.tsx        # Fixed top bar with menu trigger
  Navigation.tsx    # Full-screen overlay nav (Crestline-style)
  Hero.tsx          # Landing section with name & bio
  Ticker.tsx        # Scrolling marquee of interests
  About.tsx         # Biography & stats
  Services.tsx      # Service list (AI, WordPress, Systems)
  Projects.tsx      # Codezenic & Kan Themes cards
  Interests.tsx     # Pill tags of interests
  Contact.tsx       # Email CTA + social links
  Footer.tsx        # Copyright & links
  Cursor.tsx        # Custom cursor (desktop only)
```

## Customization

All content is in the component files. Update:
- `components/Hero.tsx` — headline & intro text
- `components/About.tsx` — bio paragraphs & stats
- `components/Projects.tsx` — project cards
- `components/Contact.tsx` — email & social links
- `app/layout.tsx` — page title & meta description
