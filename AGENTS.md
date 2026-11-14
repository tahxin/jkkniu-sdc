# AGENTS.md — JKKNIU-SDC

Guidance for AI coding agents working in this repository. Read this first, then the
relevant framework docs in `node_modules/next/dist/docs/` before touching code.

## Project

Official website of the **JKKNIU Skill Development Club** — a Next.js 16 App Router
site (React 19) backed by Prisma 5 + SQLite, NextAuth v5, Tailwind CSS 4, and
shadcn/ui. See `README.md` for the full stack and setup steps.

## Conventions

- **File routing.** Routes live under `src/app/` (`page.tsx` / `layout.tsx`).
  Public pages: `about`, `events`, `membership`, `blog`, `committee`, `gallery`,
  `partners`, `contact`, `login`, `profile` (auth-protected), plus a `practice/`
  arena with a Monaco editor.
- **Path aliases.** `@/` → `src/`. Use `@/components/...`, `@/lib/...`, etc.
- **Server vs client.** `"use client"` is the first line of any interactive
  component (Navbar, Ticket, CounterBoard, practice arena). Default exports are
  server components unless marked.
- **Styling.** Tailwind v4 with `@theme inline` tokens in `src/app/globals.css`.
  Utility classes only — no inline style objects except where a token is needed
  dynamically (e.g. `style={{ ["--notch" as string]: notch }}` on `Ticket`).
- **Shared UI.** shadcn/ui lives in `src/components/ui/`. Don't hand-roll a
  dialog, sheet, or button — extend the existing one.
- **Auth.** NextAuth v5 credentials provider, JWT sessions. `src/auth.ts` holds
  the config; `src/middleware.ts` gates `/profile`. Login is a server action in
  `src/app/login/actions.ts`.
- **Database.** Prisma 5 + SQLite. Schema in `prisma/schema.prisma`, client
  singleton in `src/lib/prisma.ts`. Never edit `prisma/dev.db` directly — use
  `npx prisma db push` then `npx tsx prisma/seed.ts`.
- **Scripts.** `npm run dev`, `npm run build`, `npm run lint`, `npm start`.
  `npm run build` runs `prisma generate` first.

## Design system

The site uses a custom "Job Fair Hall" visual world — don't drift out of it. Brand colors are inferred directly from the official JKKNIU-SDC logo (emblem ring, reaching figures, gears, and wordmark).

- **Tokens** (in `src/app/globals.css` `:root`):
  - `--cream #F4EFE3` background / `--ink #101010` text and rules
  - `--hall #29ABE2` sky blue (primary emblem & SDC wordmark authority)
  - `--stamp #DB3B79` magenta/pink (reaching center figure & energy accent)
  - `--brass #F7C646` golden yellow (left figure, gears, and highlight moments)
  - `--primary #D63324` stamp red (reserved for special event highlights like BizCase)
- **Display type.** `.display-caps` (Anton) for headlines; `Archivo` for body.
  Uppercase, tight line-height, letter-spacing 0.01–0.24em.
- **Components.** `Ticket` (stub action), `CounterBoard` (ticking stats),
  `PageBanner` (page headers). Reuse these instead of new button/link styles.
- **Layout.** Hard 3px ink borders, cream/paper-line dividers, `program-row`
  numbered lists, `stamp-chip` status labels, `marquee-track` scrolling band.
- **Motion.** Framer Motion for page transitions; respect
  `prefers-reduced-motion` (marquee already does).

## Rules

1. **Read the Next 16 docs first.** This is not the Next.js you know. APIs,
   conventions, and file structure may all differ from your training data.
   Check `node_modules/next/dist/docs/` before writing code. Heed deprecation
   notices.
2. **Run the linter before committing.** `npm run lint`.
3. **Never commit secrets.** `.env*` is gitignored. `AUTH_SECRET` and
   `DATABASE_URL` are set at deploy time.
4. **Don't break the auth flow.** `src/auth.ts`, `src/middleware.ts`, and
   `src/app/api/auth/[...nextauth]/route.ts` are wired together — changing one
   means changing all three.
5. **Preserve product truth.** `PRODUCT.md` records confirmed facts about the
   club (audience, positioning, the BizCase track record). Update it, not just
   the code, when facts change.
6. **Prefer existing patterns.** A new component should look like its neighbors
   before it gets a novel treatment.