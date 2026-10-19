# jer312-landing

Marketing/landing site for JER312, a felt-based fashion brand (Kyrgyzstan). Desktop-only SPA: Home, About, Gallery, Shop (placeholder).

## Commands
- Install: `npm install` (package-lock.json present, use npm)
- Dev: `npm run dev` (Vite)
- Build: `npm run build` (runs `tsc -b && vite build`, output `dist/`)
- Lint: `npm run lint` (`eslint .`)
- Preview build: `npm run preview`
- No test runner configured.

## Stack
- React 19, TypeScript ~5.7, Vite 6 (`@vitejs/plugin-react`)
- Tailwind CSS v4 via `@tailwindcss/vite` plugin; entry is `@import "tailwindcss"` in `src/index.css`
- react-router-dom v7 (`createBrowserRouter`), framer-motion, `@radix-ui/react-navigation-menu`
- ESLint 9 flat config (`eslint.config.js`): typescript-eslint recommended, react-hooks, react-refresh

## Structure
- `src/main.tsx`: mounts `RouterProvider` with routes from `src/routes.tsx`
- `src/routes.tsx`: root `/` wrapped in `DeviceCheckWrapper` (window width < 1024 renders `pages/MobileNotSupported.tsx`, else `pages/Layout.tsx`)
  - children: index and `home` -> Home, `about`, `gallery`, `shop`; `*` redirects to `/`
- `src/pages/Layout.tsx`: `Header` + `<Outlet/>` + `Footer` (Header and Footer live in `src/pages/`)
- One folder per page under `src/pages/`; page = composition of section components in the same folder:
  - `home/`: Home (video hero + intro) + Inspiration + Concept
  - `about/`: About = ValueStory + Concept + CycleGallery + CommunityInSocials (file `SocialConnect.tsx`)
  - `gallery/`: Gallery = Summer/PreFall/Winter/Spring collection components; `galleryImages.tsx` holds image data
  - `shop/`: "COMING SOON" stub
- `src/assets/`: images (`.avif`, grouped by page: home, about, gallery/<season>, footer), SVG logos, Gilmer `.otf` fonts
- `public/logo.svg`: favicon

## Conventions (observed)
- Function components, default export, one per file; imports use explicit `.tsx` extensions in most files
- 4-space indent, double quotes mostly; styling is Tailwind utility classes inline (no CSS modules)
- Font: Gilmer, loaded in `src/gilmer.css`. Use helper classes `gilmer`, `gilmer-regular`, `gilmer-medium`, `gilmer-bold` (not Tailwind `font-gilmer`)
- `tailwind.config.ts` (v3-style: font family, weights) is not referenced by v4 plugin setup; likely not applied
- Images imported as modules from `src/assets/...`
- Commit messages: lowercase imperative, e.g. `update Footer component ...`, `refactor About component; ...`

## Gotchas
- Gallery orders collections so the current season (by month) comes first
- Home hero video is remote: `https://jer312.s3.eu-central-1.amazonaws.com/jer312.webm` (S3), not in repo
- Layouts use fixed widths (`w-2xl`, `px-16`); site not responsive below 1024px by design
- No `.env` files, no deploy config in repo. Nothing found about the hosting target.
- `src/App.tsx` is unused (routes do not reference it); `README.md` is the stock Vite template
