# JKKNIU-Skill Development Club (JKKNIU-SDC)

Official website of the **JKKNIU-Skill Development Club** at Jatiya Kabi Kazi Nazrul Islam University (JKKNIU), established 2018. It serves as the club's public home — events, membership, committee, gallery, and more — plus a members-only practice area with an in-browser coding environment.

## Features

- **Public site** — home, about, events, membership, blog, committee, gallery, partners, and contact pages
- **Authentication** — email/password login with role support (`user` / `admin`), JWT sessions via NextAuth v5
- **User profiles** — members can update their name, bio, phone, and department
- **Protected routes** — `/profile` is gated by auth middleware and redirects guests to `/login`

## Tech Stack

| Layer      | Technology                                        |
| ---------- | ------------------------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org) (App Router, React 19) |
| Auth       | [NextAuth v5](https://authjs.dev) (credentials provider, JWT sessions) |
| Database   | [Prisma 5](https://prisma.io) + SQLite            |
| Styling    | Tailwind CSS 4, shadcn/ui, `tw-animate-css`       |
| Animation  | Framer Motion                                     |
| Icons      | Lucide React                                      |
| Analytics  | Vercel Analytics                                  |

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### 1. Install dependencies

```bash
npm install
```

`postinstall` automatically runs `prisma generate` to create the Prisma client.

### 2. Set up environment variables

Create a `.env` file in the project root:

```bash
DATABASE_URL="file:./dev.db"
AUTH_SECRET="generate-a-secret"   # e.g. from `openssl rand -base64 32`
AUTH_URL="http://localhost:3000"
```

### 3. Create and seed the database

The database lives at `prisma/dev.db` (SQLite). Push the schema and seed an admin account:

```bash
npx prisma db push
npx tsx prisma/seed.ts
```

The seed creates a default admin:

| Email            | Password | Role  |
| ---------------- | -------- | ----- |
| `admin@admin.com` | `admin`  | admin |

> Change the default admin password before deploying anywhere public.

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command              | Description                                              |
| -------------------- | -------------------------------------------------------- |
| `npm run dev`        | Start the development server                             |
| `npm run build`      | Generate the Prisma client, then build for production    |
| `npm start`          | Run the production build                                 |
| `npm run lint`       | Run ESLint                                               |
| `npx prisma db push` | Sync `prisma/schema.prisma` to the SQLite database        |
| `npx tsx prisma/seed.ts` | Seed the admin user                                 |

## Project Structure

```
src/
├── app/
│   ├── page.tsx            # Home / landing page
│   ├── about/              # Club introduction
│   ├── events/             # Events & competitions
│   ├── membership/         # Join the club
│   ├── blog/               # Blog listing
│   ├── committee/          # Committee members
│   ├── gallery/            # Photo gallery
│   ├── partners/           # Corporate partners
│   ├── contact/            # Contact page
│   ├── login/              # Login page + server actions
│   ├── profile/            # Member profile (auth-protected)
│   └── api/auth/[...nextauth]/  # NextAuth route handler
├── auth.ts                 # NextAuth config (credentials + JWT callbacks)
├── middleware.ts           # Route protection for /profile
├── lib/prisma.ts           # Prisma client singleton
└── components/
    ├── layout/             # Navbar, Footer
    └── ui/                 # shadcn/ui components
prisma/
├── schema.prisma           # User model (email, password, name, bio, role...)
├── seed.ts                 # Seeds the default admin
└── dev.db                  # SQLite database (local)
```

## Authentication Notes

- Sessions are JWT-based; `id` and `role` are propagated to `session.user` via the `jwt` and `session` callbacks.
- Login is handled with a server action in `src/app/login/actions.ts`; sign-out via `signOut` from `src/auth.ts`.
- The middleware matcher excludes `/api`, `_next/static`, `_next/image`, and `favicon.ico`.

## Deploying

The site is wired for [Vercel](https://vercel.com) (Vercel Analytics included). When deploying:

1. Provision a persistent database (SQLite works locally, but use Postgres or another hosted provider for production — update `prisma/schema.prisma` and `DATABASE_URL` accordingly).
2. Set `AUTH_SECRET` and `AUTH_URL` in your hosting environment.
3. Run migrations/`db push` against the production database and seed initial data.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth (Auth.js) v5 docs](https://authjs.dev)
- [Prisma Documentation](https://www.prisma.io/docs)

---

Developed with 🤍 and Passion ️ by Shahjalal Ahmed Nishat
