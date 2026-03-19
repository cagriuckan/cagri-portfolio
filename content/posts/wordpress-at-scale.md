---
title: "What 10 Years of WordPress Taught Me About Web Performance"
date: "2025-01-22"
excerpt: "Speed is a design decision made long before you write your first line of CSS. After a decade building WordPress themes, here's what actually moves the needle."
---

Speed is a design decision made long before you write your first line of CSS. I've been building WordPress themes at Kan Themes since 2014, and the performance lessons compound over time in ways that are hard to appreciate until you've seen a theme go from 8 seconds to 0.8 seconds without touching the hosting.

## The Payload Problem

Most slow WordPress sites have one root cause: they ship too much. Too much JavaScript, too much CSS, too much HTML. Every plugin adds something. Every theme feature adds something. By the time a "simple" site loads, it's pulled in 400KB of JavaScript it uses in three places.

The fix isn't optimization — it's subtraction. The most performant code is the code that doesn't exist. When I audit a slow site, I almost always start by removing things.

## Critical Path CSS Is Not a Nice-to-Have

Render-blocking CSS is the most common killer of perceived performance. The browser won't paint anything until it's processed all the CSS in the `<head>`. If that's 80KB of monolithic stylesheet, your users stare at a white screen.

Inlining critical-path CSS — just the styles needed for above-the-fold content — and loading the rest asynchronously can cut Time to First Contentful Paint in half. It's more work to maintain, but for themes that ship to thousands of sites, it's worth the investment.

## Images Are Usually the Real Problem

When someone tells me their site is slow, I look at the images before anything else. In 2025, there's no reason to ship a 2MB JPEG when a 60KB WebP does the same job. There's no reason to load a 1400px image in a 300px container.

WordPress's native lazy loading and the `srcset` attribute handle most of this now, but the defaults aren't always right. You still need to think about what "above the fold" means for your layout, and make sure those images load eagerly with the right dimensions.

## WordPress Itself Is Not Slow

This is the hill I'll die on. WordPress gets a bad reputation for performance that properly belongs to bad themes and poorly-chosen plugins. A lean WordPress installation with a well-built theme outperforms most custom-built sites because it benefits from years of core optimizations.

The problem is that the WordPress ecosystem has a financial incentive to add features, not remove them. Theme builders compete on feature count, not kilobyte count. Plugins solve one problem while creating three new ones.

## What Actually Moves the Needle

In rough order of impact: remove unused JavaScript, inline critical CSS, use modern image formats with correct sizing, enable object caching (Redis or Memcached, not transients), and defer everything non-critical.

Hosting matters too, but it's usually the last bottleneck, not the first. Fix the code before you upgrade the server.

Ten years in, the fundamentals haven't changed. Ship less. Load in the right order. Measure everything. The web is fast when you let it be.
