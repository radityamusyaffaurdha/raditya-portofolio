# Raditya Musyaffa Urdha — Portfolio

Premium, animated student developer portfolio built with Next.js 15 (App
Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

> This project was generated in a sandbox without internet access, so
> `npm install` has not been run here — dependencies are declared in
> `package.json` but `node_modules` doesn't exist yet. Run `npm install`
> once on your own machine before `npm run dev`.

## Add your images

See `public/images/README.md` — the site references `profile.jpg` and
3 UGM background images that aren't included. Drop them in and
everything wires up automatically; any missing UGM image falls back to
an elegant gradient placeholder rather than a broken image.

## Editing content

All real content lives in `data/*.ts` — nothing is hardcoded inside
components. To change text, skills, projects, certificates, socials, etc,
edit the matching file in `data/`:

| File | Controls |
|---|---|
| `data/profile.ts` | Name, role, school, hero text, about paragraphs |
| `data/hobbies.ts` | Hobbies grid + the two featured hobby cards (F1, podcasts) + interests |
| `data/skills.ts` | Programming & language skill percentages |
| `data/otherSkills.ts` | Other skills cards |
| `data/projects.ts` | Project showcase — add a new object to add a card |
| `data/games.ts` | Construct 3 game project cards |
| `data/education.ts` | Education timeline (set `current: true` for the "Currently Studying" badge) |
| `data/achievements.ts` | Achievement cards |
| `data/certificates.ts` | Certificates + verification links |
| `data/university.ts` | Dream University text (name, target year, major, quote) |
| `data/ugmGallery.ts` | Background collage images behind Dream University |
| `data/social.ts` | Contact links + navbar menu items |

The GitHub section (`components/sections/GitHubActivity.tsx`) isn't a data
file — it fetches live from the public GitHub API for `radityamusyaffaurdha`
at request time (hourly cache) and falls back to a clean placeholder if
the API is unreachable.

## Themes

Two themes — **Aurora Navy** (default) and **Monochrome Elegance** — are
defined as CSS variables in `app/globals.css` under
`[data-theme="aurora-navy"]` and `[data-theme="monochrome"]`. The toggle in
the navbar switches between them and persists the choice in `localStorage`
with no flash on reload. The background layers (aurora blobs, abstract
mesh shapes, wave, particles, floating glass) all read the same variables,
so the light theme gets its own soft black-aurora/mesh treatment rather
than reusing the dark theme's glow.

## Structure

```
app/            routes, layout, global styles, SEO files (sitemap, manifest)
components/
  theme/        theme context + toggle
  background/   aurora, wave, particles, floating glass, mouse-glow layers
  loading/      one-time-per-session loading screen
  layout/       navbar, mobile menu, footer
  ui/           reusable primitives (glass card, progress bar, ID card, etc)
  sections/     one component per page section
data/           all editable content, typed
lib/            small shared utilities
types/          shared TypeScript types
```

## Notes

- Performance: images use `next/image` (automatic lazy-loading + format
  optimization), fonts load via `next/font` (no layout shift), and the
  particle field is canvas-based rather than DOM nodes.
- Accessibility: focus-visible outlines, `aria-label`s on icon-only
  buttons, and `prefers-reduced-motion` is respected throughout.
- SEO: metadata, Open Graph/Twitter tags, `sitemap.ts`, `manifest.ts`,
  `robots.txt`, and Person JSON-LD are all in place — update the domain
  in `app/layout.tsx` (`metadataBase`) and `public/robots.txt` once you
  have a real one.
