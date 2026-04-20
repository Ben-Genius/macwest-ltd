# Macwest Web (frontend scaffold)

Performance-oriented **Next.js (App Router)** frontend for the Macwest Limited redesign: **SEO**, **security headers**, **motion**, optional **React Three Fiber** accents, and a **route map** aligned to the live site IA.

## Prerequisites

- **Node.js 20+**
- **npm** (or swap commands for pnpm/yarn)

## Setup

```bash
cd macwest-web
npm install
cp .env.example .env.local
# Edit NEXT_PUBLIC_SITE_URL for your environment
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script            | Purpose                 |
| ----------------- | ----------------------- |
| `npm run dev`     | Dev server (Turbopack)  |
| `npm run build`   | Production build        |
| `npm run start`   | Run production build    |
| `npm run lint`    | ESLint                  |
| `npm run typecheck` | TypeScript noEmit     |
| `npm run format`  | Prettier write          |

## Project layout (high level)

- `src/app/` — routes, `layout.tsx`, `loading.tsx`, `error.tsx`, `robots.ts`, `sitemap.ts`
- `src/components/` — UI, layout shell, home sections, Three.js placeholders
- `src/config/` — site copy, navigation source of truth, sitemap list
- `src/lib/` — utilities (`cn`), metadata helpers
- `middleware.ts` — baseline security headers

## Next steps

Implement pages **one route at a time** using the content blueprint. Keep **3D** behind `dynamic(..., { ssr: false })` and respect `prefers-reduced-motion` for animations.

See `docs/CURSOR_MASTER_PROMPT.md` for a reusable agent prompt.
