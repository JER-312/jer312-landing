# jer312-landing

Marketing/landing site for JER312, a felt-based fashion brand (Kyrgyzstan). Responsive SPA (mobile, tablet, desktop): Home, About, Gallery, Shop (placeholder), 404.

## Commands
- Install: `npm install` (package-lock.json present, use npm)
- Dev: `npm run dev` (Vite)
- Build: `npm run build` (runs `tsc -b && vite build`, output `dist/`)
- Lint: `npm run lint` (`eslint .`)
- Preview build: `npm run preview`
- No test runner configured.

## Stack
- React 19, TypeScript ~5.7, Vite 6 (`@vitejs/plugin-react`)
- Tailwind CSS v4 via `@tailwindcss/vite` plugin; entry is `@import "tailwindcss"` in `src/index.css`. No `tailwind.config`; use v4 syntax (e.g. `bg-gray-800/50`, not `bg-opacity-*`)
- react-router-dom v7 (`createBrowserRouter`). Only runtime deps: react, react-dom, react-router-dom
- ESLint 9 flat config (`eslint.config.js`): typescript-eslint recommended, react-hooks, react-refresh

## Structure
- `src/main.tsx`: mounts `RouterProvider` with routes from `src/routes.tsx`; removes the static `<meta name="description">` from `index.html` so pages own it
- `src/routes.tsx`: root `/` renders `components/layout/Layout.tsx`
  - children: index -> Home, `about`, `gallery`, `shop`; `*` -> `pages/NotFoundPage.tsx`
- `src/components/layout/`: `Layout` (`Header` + `<main><Outlet/></main>` + `Footer` + `<ScrollRestoration/>`), `Header`, `Footer`, `MobileMenu`
  - `MobileMenu`: hamburger shown below `lg`; full-screen dialog (scrolls if links don't fit), closes on Escape, link click, or growing to ≥1024px; locks body scroll while open
- `src/content/`: site data
  - `site.ts`: nav links, socials, contact email (Header and Footer render from it)
  - `collections.ts`: gallery data. `Collection` = id, title lines, edition, city, date, description, `releasedAt` (ISO, sort key), `rows` of images (src, alt, flex, aspect, height classes)
- One folder per page under `src/pages/`; page = composition of section components in the same folder:
  - `home/`: Home (video hero + intro) + Inspiration + ValueConcept
  - `about/`: About = ValueStory + BrandConcept + CycleGallery + SocialConnect
  - `gallery/`: Gallery sorts `collections` newest first, renders each with `CollectionSection`
  - `shop/`: "COMING SOON" stub
- `src/assets/`: images (`.avif`, grouped by page), SVG logos, Gilmer fonts (`.woff2` + `.otf` fallback)
- `public/`: `logo.svg` (favicon), `jer312.mp4` (hero video), `jer312-poster.avif` (video poster)

## Conventions
- Function components, default export, one per file; imports use explicit `.tsx`/`.ts` extensions in most files
- 4-space indent, double quotes mostly; styling is Tailwind utility classes inline (no CSS modules)
- Font: Gilmer, loaded in `src/gilmer.css` (`font-display: swap`). Use helper classes `gilmer`, `gilmer-regular`, `gilmer-medium`, `gilmer-bold`
- Images imported as modules from `src/assets/...`
- Per-page SEO: each page renders its own `<title>` ("Page — JER312") and `<meta name="description">` in JSX; React 19 hoists them to `<head>` (no helmet)
- One `<h1>` per page (`sr-only` when there is no visible title); section headings are `<h2>`
- Responsive convention:
  - Mobile-first base classes; desktop values at `lg:` (1024px)
  - Desktop (≥1024px) must stay pixel-identical when changing mobile styles
  - Use `max-lg:`/`max-sm:` where a base class would also change desktop (e.g. `max-lg:gap-10`, `max-lg:py-2`)
  - Mobile side gutter is 20px (`px-5`); tap targets at least 44x44px below `lg`
  - Wide screens: content is capped at 1440px via the `container-site` utility (`index.css`; put the section's padding on the same element); backgrounds stay full-bleed (coloured section outside, container inside); no `vw` units for horizontal sizing; ≤1440px must stay pixel-identical
  - Gallery: below `sm`, multi-image rows become a 2-column grid of equal 3:4 tiles; odd rows let the first tile span both columns (`CollectionSection.tsx`)
- Commit messages: `<type>: <description>` (feat, fix, refactor, perf, docs, chore)

## Motion
- `components/IntroLoader.tsx` (mounted in `main.tsx`): logo "stitch" overlay, once per session (`sessionStorage` `jer:intro-seen`), capped at 2s
  - On `/` it waits for `jer:hero-ready` (Home dispatches it, sets `window.__jerHeroReady`)
  - When it starts leaving it sets `window.__jerIntroDone` and dispatches `jer:intro-done`; without the intro, the flag is set at load
- `hooks/useInView.ts`: `useInView<T>({once, rootMargin, threshold})` returns `[ref, inView]`; waits for `jer:intro-done` (3s fallback)
- `components/motion/SplitText.tsx`: letters rise from a per-word clip, then swap back to plain text (kerning kept). Plain text only
- `components/motion/Reveal.tsx`: renders `as` itself, 24px rise + fade. Don't put it on elements with their own transform/transition
- Gallery image rows (`CollectionSection` `ImageRow`, `.jer-row` in `index.css`): bottom-up curtain + photo zoom settle; hover zoom/dim pauses while scrolling (`.jer-scrolling`)
- Classes live in `src/index.css` (`.jer-*`). Animate only transform/translate/scale, opacity and clip-path; the resting state must match the static markup (no layout shift)
- Everything must respect `prefers-reduced-motion: reduce` (content visible at once, no hover motion)

## Deploy
- GitHub Pages via `.github/workflows/deploy.yml`, runs on push to `main` (or manual dispatch)
- Custom domain `jer312.fr` via `public/CNAME`; Vite `base` stays `/`
- SPA fallback: the workflow copies `dist/index.html` to `dist/404.html` (deep links work, but are served with HTTP 404)
- `public/` also holds `robots.txt`, `sitemap.xml`, `og-image.jpg` (1200x630)
- Flow: work on `dev`, merge `dev` -> `main` to release

## Gotchas
- Summer and Spring collections both say "3 RD EDITION": TODO in `collections.ts`, confirm with client
- Footer Facebook icon has no link (no URL known)
- `index.html` canonical/`og:url` are static (`https://jer312.fr/` on every route)
- No `.env` files
- `README.md` is the stock Vite template
