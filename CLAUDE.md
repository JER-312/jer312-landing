# jer312-landing

Marketing/landing site for JER312, a felt-based fashion brand (Kyrgyzstan). Desktop-only SPA: Home, About, Gallery, Shop (placeholder), 404.

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
- `src/routes.tsx`: root `/` wrapped in `DeviceCheckWrapper` (width < 1024 renders `pages/MobileNotSupported.tsx`, else `components/layout/Layout.tsx`)
  - children: index -> Home, `about`, `gallery`, `shop`; `*` -> `pages/NotFoundPage.tsx`
- `src/components/layout/`: `Layout` (`Header` + `<main><Outlet/></main>` + `Footer` + `<ScrollRestoration/>`), `Header`, `Footer`
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
- Commit messages: `<type>: <description>` (feat, fix, refactor, perf, docs, chore)

## Gotchas
- Mobile gate is intentional: below 1024px the whole site shows `MobileNotSupported`. Layouts use fixed widths (`w-2xl`, `px-16`)
- Summer and Spring collections both say "3 RD EDITION": TODO in `collections.ts`, confirm with client
- Footer Facebook icon has no link (no URL known)
- `index.html` has no `og:image`/`og:url` yet: production domain unknown (TODO comment there)
- No `.env` files, no deploy config in repo. Hosting target unknown
- `README.md` is the stock Vite template
