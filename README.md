# 9611 Kafé — Portfolio Website

A single-page-style marketing portfolio for **9611 Kafé**, a modern café in Đà Lạt (Vietnam). The site presents the venue’s story, menu preview, interior spaces, location, and social links so visitors can explore the brand in the browser before visiting in person.

**Live routes:**

- **`/`** — Landing page with hero, story, menu teaser, gallery-style spaces, map/location block, and social section.
- **`/menu`** — Full menu page (lazy-loaded for faster initial load).

---

## Project structure

| Path | Role |
|------|------|
| `index.html` | HTML shell, favicon, meta tags, root mount point `#root`. |
| `vite.config.ts` | Vite build config (React plugin + Tailwind). |
| `package.json` | Dependencies, scripts (`dev`, `build`, `lint`, `preview`). |
| `public/` | Static assets served as-is (`logo.svg`, `icons.svg`, etc.). |
| `src/main.tsx` | App entry: mounts React into `#root`, loads global styles. |
| `src/index.css` | Global CSS (Tailwind layers / project-wide styles). |
| `src/App.tsx` | Wraps the app in `BrowserRouter` for client-side routing. |
| `src/pages.tsx` | Route table: `/` → `Home`, `/menu` → `Menu`; uses `Suspense` + `lazy()` for code-splitting. |
| `src/pages/Home.tsx` | Composes all home sections (`Navbar`, `Hero`, `Story`, …) and handles hash scrolling. |
| `src/pages/Menu.tsx` | Standalone menu page. |
| `src/components/` | Reusable UI blocks (navbar, hero, story, previews, footer, etc.). |

**Flow in one sentence:** `main.tsx` → `App.tsx` → `pages.tsx` → either `Home` or `Menu`, each assembling pieces from `components/`.

---

## Tech stack

| Category | Choices |
|----------|---------|
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **UI library** | [React](https://react.dev/) 19 |
| **Build tool & dev server** | [Vite](https://vite.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) v4 via `@tailwindcss/vite` |
| **Routing** | [React Router](https://reactrouter.com/) (`react-router-dom`) |
| **Animation** | [GSAP](https://greensock.com/gsap/) + [`@gsap/react`](https://github.com/greensock/react) |
| **Linting** | [ESLint](https://eslint.org/) 10 with TypeScript ESLint and React Hooks / Refresh plugins |

---

## Scripts

```bash
npm run dev      # Start dev server (Vite + HMR)
npm run build    # Type-check then production build → dist/
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

---

## Requirements

- [Node.js](https://nodejs.org/) (current LTS recommended)
- npm (or compatible package manager)

Clone the repo, run `npm install`, then `npm run dev`.
