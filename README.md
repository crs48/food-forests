<div align="center">

<img src="./public/favicon.svg" width="76" height="76" alt="Food Forests logo" />

# 🌱 Food Forests

### _Grow a forest you can eat._

A warm, cozy, **solarpunk** home for learning about **food forests**,
**permaculture**, and **regenerative agriculture** — and for meeting the
people already growing them.

[**✨ Visit the site →**](https://crs48.github.io/food-forests/)

[![Built with Astro](https://img.shields.io/badge/built%20with-Astro%206-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Deploy to GitHub Pages](https://github.com/crs48/food-forests/actions/workflows/deploy.yml/badge.svg)](https://github.com/crs48/food-forests/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-2F5233.svg)](#-license)

</div>

---

## 🌾 What is this?

Somewhere between a garden and a wild wood sits a quietly radical idea: plant a
diverse, layered, **perennial** ecosystem, and then let it largely tend itself
while it feeds you, heals the soil, and shelters a hundred other kinds of life.

This site exists to do two things — **educate** and **inspire**:

- 🌳 **Teach the fundamentals** — what a food forest is, the seven layers, the
  ethics and twelve principles of permaculture, and how regenerative
  agriculture fits in.
- 🌍 **Inspire** — profiles of real food forests and the people stewarding them,
  from a public commons in Seattle to a regrown rainforest in Brazil.
- 🌿 **Help you begin** — a gentle, practical on-ramp to planting your first
  guild.

## 🎨 The look & feel

A warm **"Sunlit Meadow"** palette (cream, forest green, terracotta, honey) with
a **"Forest Canopy"** dark mode, set in **Fraunces** + **Nunito Sans**. Organic
SVG section dividers, soft radii, a whisper of paper grain, and gentle motion
that always respects `prefers-reduced-motion`. Editorial and restrained — light
and whitespace over clip-art.

## 🧱 Tech stack

| | |
|---|---|
| **Framework** | [Astro 6](https://astro.build) — static, zero-JS by default |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) (CSS-first `@theme`, via PostCSS) |
| **Content** | Astro Content Collections (Markdown + zod schemas) |
| **Fonts** | Fraunces & Nunito Sans, self-hosted via Fontsource |
| **Hosting** | GitHub Pages via `withastro/action` |

## 🚀 Local development

> **Node 22 required.** Astro 6 needs Node ≥ 22.12 (odd versions like 23 are not
> supported). An `.nvmrc` is included — run `nvm use`.

```bash
nvm use              # switch to Node 22 (see .nvmrc)
npm install          # install dependencies
npm run dev          # start the dev server → http://localhost:4321/food-forests
npm run build        # type-check + build to dist/
npm run preview      # preview the production build locally
```

## ✍️ Adding content

All the growable content lives in Markdown — no code required.

```
src/content/
├── articles/       # educational posts  → /learn/<slug>
├── food-forests/   # real project profiles → /projects/<slug>
└── layers/         # the layers of a food forest → /layers
```

**Write a new article** — drop a `.md` file in `src/content/articles/` with
frontmatter:

```markdown
---
title: Your Article Title
description: A one-line summary for cards and search.
pubDate: 2026-07-01
category: basics        # basics | design | plants | regenerative
tags: [food-forest]
readingMinutes: 5
order: 7
---

Your words here. Internal links like [the layers](/layers) are
automatically base-path corrected.
```

**Add a project** — drop a `.md` file in `src/content/food-forests/`; see an
existing profile for the frontmatter shape (name, location, region, sources…).

The 3 ethics + 12 principles and the resources shelf live as typed data in
`src/data/`.

## 📁 Project structure

```
src/
├── components/     # Icon, Button, Card, Header, Footer, SectionDivider…
├── content/        # Markdown collections (articles, food-forests, layers)
├── data/           # principles.ts, resources.ts
├── layouts/        # BaseLayout.astro
├── lib/            # url.ts (base-safe links), site.ts, rehype-base-url.mjs
├── pages/          # routes (index, learn, layers, permaculture, projects…)
└── styles/         # global.css — the Sunlit Meadow design system
public/             # favicon, robots.txt, social image
.github/workflows/  # deploy.yml — build & publish to GitHub Pages
```

## 🌐 Deployment

Every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds with `withastro/action` and publishes to GitHub Pages.

**First-time setup:** in the repo's **Settings → Pages**, set the **Source** to
**"GitHub Actions."** The site is served from a sub-path, so `astro.config.mjs`
sets `site: 'https://crs48.github.io'` and `base: '/food-forests'`. All internal
links are built through `import.meta.env.BASE_URL`, so the base path never
breaks.

## 🖼️ Imagery & credits

The current artwork is **original SVG & CSS** — no third-party photos yet, so
nothing requires attribution. As real photography is added, each image that
needs it is credited on the [`/credits`](https://crs48.github.io/food-forests/credits)
page (TASL: Title, Author, Source, License). See the page for our sourcing
guidelines (Unsplash/Pexels/Pixabay, Openverse, Wikimedia, and CC0 botanical
plates).

## 🤝 Contributing

This is a labour of love, made in the spirit of the commons. Open an issue or a
PR — new articles, project profiles, corrections, and design polish are all
welcome. Please keep content **accurate** (it's educational) and cite sources on
project profiles.

## 📜 License

Released under the [MIT License](#-license) — take it, learn from it, grow
something. Content is shared freely; please credit where credit is due.

<div align="center">

---

_Built with Astro & Tailwind · Grown with patience · 🌻_

</div>
