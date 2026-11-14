# Graph Report - jkkniu-sdc  (2026-11-15)

## Corpus Check
- Corpus is ~16,430 words - fits in a single context window. You may not need a graph.

## Summary
- 329 nodes · 549 edges · 27 communities (20 shown, 7 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 17 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- App Config & Core Pages
- Committee & Avatar UI
- App Shell & Analytics
- UI Library Configuration
- Practice Arena & Contact
- Runtime Dependencies
- Package & Dev Dependencies
- TypeScript Compiler Config
- 2025 Events Recap
- NextAuth Login Flow
- Next.js Starter Docs
- Events Page Module
- Prisma Seed & Auth Deps
- CV Writing Competition
- ESLint Configuration
- NPM Scripts
- SDC Logo & Brand
- Alumni Meetup Poster
- MoU Signing Partnership
- Prisma Engines & Scripts
- Monaco Editor Dependency
- PostCSS Configuration
- File Icon SVG
- Globe Icon SVG
- Next.js Brand Assets
- Vercel Brand Assets
- API Route Handlers

## God Nodes (most connected - your core abstractions)
1. `cn()` - 38 edges
2. `Button()` - 23 edges
3. `lucide-react` - 19 edges
4. `next` - 17 edges
5. `compilerOptions` - 16 edges
6. `Problem` - 10 edges
7. `JKKNIU-SDC (Jagannath Kabi Kallol Niu Skill Development Club)` - 10 edges
8. `react` - 9 edges
9. `Navbar()` - 9 edges
10. `Next.js Project (create-next-app)` - 9 edges

## Surprising Connections (you probably didn't know these)
- `node_modules/next/dist/docs Guides` --semantically_similar_to--> `Next.js Documentation`  [INFERRED] [semantically similar]
  AGENTS.md → README.md
- `AboutPage()` --calls--> `Button()`  [EXTRACTED]
  src/app/about/page.tsx → src/components/ui/button.tsx
- `BlogPage()` --calls--> `Button()`  [EXTRACTED]
  src/app/blog/page.tsx → src/components/ui/button.tsx
- `EventsPage()` --calls--> `Button()`  [EXTRACTED]
  src/app/events/page.tsx → src/components/ui/button.tsx
- `GalleryPage()` --calls--> `Button()`  [EXTRACTED]
  src/app/gallery/page.tsx → src/components/ui/button.tsx

## Import Cycles
- 2-file cycle: `src/app/practice/TestResults.tsx -> src/app/practice/page.tsx -> src/app/practice/TestResults.tsx`

## Hyperedges (group relationships)
- **Next.js Getting Started Flow** — readme_dev_server, readme_app_page_tsx, readme_next_font, readme_geist_font [EXTRACTED 1.00]
- **Alumni Meetup Event Announcement (poster, event, org, date design)** — public_images_alumni_meetup, public_images_alumni_meetup_farewell_and_alumni_meetup_event, public_images_alumni_meetup_jkkniu_sdc, public_images_alumni_meetup_calendar_grid_layout [EXTRACTED 0.90]
- **CV Writing Competition 4.0 promotion campaign (organizer, event, registration, deadline, socials)** — public_images_cv_writing_jkkniu_sdc, public_images_cv_writing_competition, public_images_cv_writing_registration, public_images_cv_writing_deadline, public_images_cv_writing_social_handles [EXTRACTED 1.00]
- **MoU Signing Partnership between Rise Above All and JKKNIU-SDC** — public_images_mou_signing_mou_signing_announcement, public_images_mou_signing_rise_above_all, public_images_mou_signing_jkkniu_sdc, public_images_mou_signing_memorandum_of_understanding, public_images_mou_signing_partnership_handshake [EXTRACTED 1.00]
- **JKKNIU-SDC 2025 Program Announcement Cards** — public_images_recap_2025_cv_writing_competition_3_0, public_images_recap_2025_lets_talk_3_0, public_images_recap_2025_bizcase_2025, public_images_recap_2025_jkkniu_to_abroad, public_images_recap_2025_leaders_hunting_3_0, public_images_recap_2025_mdp, public_images_recap_2025_management_trainee_program_2025, public_images_recap_2025_casesolution [EXTRACTED 1.00]
- **JKKNIU-SDC Corporate Partnerships (MOUs)** — public_images_recap_2025_mou_signing, public_images_recap_2025_mou_signing_akij_resource, public_images_recap_2025_kur_partnership, public_images_recap_2025_jkkniu_sdc [EXTRACTED 1.00]
- **JKKNIU-SDC Brand Identity System** — public_jkkniu_sdc_transparent_logo_jkkniu_sdc_transparent_logo, public_jkkniu_sdc_transparent_logo_skill_development_club_identity, public_jkkniu_sdc_transparent_logo_jatiya_kabi_kazi_nazrul_islam_university, public_jkkniu_sdc_transparent_logo_time_to_move_tagline, public_jkkniu_sdc_transparent_logo_multidisciplinary_skills_symbolism, public_jkkniu_sdc_transparent_logo_human_growth_symbolism [EXTRACTED 1.00]

## Communities (27 total, 7 thin omitted)

### Community 0 - "App Config & Core Pages"
Cohesion: 0.07
Nodes (39): nextConfig, next@16.2.10, @base-ui/react, next, react, AboutPage(), BlogPage(), featuredPost (+31 more)

### Community 1 - "Committee & Avatar UI"
Cohesion: 0.12
Nodes (29): CommitteePage(), CURRENT_COMMITTEE, PREVIOUS_COMMITTEES, Avatar(), AvatarBadge(), AvatarFallback(), AvatarGroup(), AvatarGroupCount() (+21 more)

### Community 2 - "App Shell & Analytics"
Cohesion: 0.11
Nodes (20): @vercel/analytics@^2.0.1, @vercel/analytics, inter, metadata, RootLayout(), spaceGrotesk, viewport, handleSignOut() (+12 more)

### Community 3 - "UI Library Configuration"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 4 - "Practice Arena & Contact"
Cohesion: 0.21
Nodes (14): lucide-react, CodeEditor(), CodeEditorProps, PracticePage(), TestResult, ProblemDescription(), ProblemDescriptionProps, Sidebar() (+6 more)

### Community 5 - "Runtime Dependencies"
Cohesion: 0.10
Nodes (20): dependencies, @base-ui/react@^1.6.0, class-variance-authority@^0.7.1, clsx@^2.1.1, framer-motion@^12.42.2, lucide-react@^1.25.0, prisma@^5.22.0, react@19.2.4 (+12 more)

### Community 6 - "Package & Dev Dependencies"
Cohesion: 0.15
Nodes (18): devDependencies, tailwindcss@^4, @tailwindcss/postcss@^4, @types/bcryptjs@^2.4.6, @types/node@^20, @types/react@^19, @types/react-dom@^19, typescript@^5 (+10 more)

### Community 7 - "TypeScript Compiler Config"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "2025 Events Recap"
Cohesion: 0.18
Nodes (15): JKKNIU-SDC 2025 Recap Poster, BizCase 2025 (Prize Pool 100K BDT), CASEsolution, CV Writing Competition 3.0, JKKNIU-SDC (Jagannath Kabi Kallol Niu Skill Development Club), JKKNIU to Abroad (Road to Higher Study), KUR Partnership (Recruitment Partner), Leaders' Hunting 3.0 (+7 more)

### Community 9 - "NextAuth Login Flow"
Cohesion: 0.19
Nodes (11): next-auth@^5.0.0-beta.31, next-auth, loginAction(), LoginPage(), handleSubmit(), signIn, JWT, next-auth (+3 more)

### Community 10 - "Next.js Starter Docs"
Cohesion: 0.17
Nodes (12): node_modules/next/dist/docs Guides, CLAUDE.md @AGENTS.md Include Directive, app/page.tsx Entry Page, create-next-app, Development Server (npm/yarn/pnpm/bun dev), Geist Font, Learn Next.js Tutorial, next/font Automatic Font Optimization (+4 more)

### Community 11 - "Events Page Module"
Cohesion: 0.31
Nodes (8): CategoryTag(), ClubEvent, EventCard(), events, EventsPage(), EventStatus, filterTabs, StatusBadge()

### Community 12 - "Prisma Seed & Auth Deps"
Cohesion: 0.29
Nodes (5): bcryptjs@^3.0.3, @prisma/client@^5.22.0, prisma, bcryptjs, @prisma/client

### Community 13 - "CV Writing Competition"
Cohesion: 0.33
Nodes (5): CV Writing Competition 4.0 Announcement Graphic, CV Writing Competition 4.0 (event), Deadline: 24th July 2025, JKKNIU-SDC (Skill Development Centre, J.K.K. Nataraja institutions), Social handles @/JKKNIU-SDC (Facebook, LinkedIn, X, YouTube, Instagram)

### Community 14 - "ESLint Configuration"
Cohesion: 0.33
Nodes (5): eslintConfig, eslint@^9, eslint-config-next@16.2.10, eslint, eslint-config-next

### Community 15 - "NPM Scripts"
Cohesion: 0.33
Nodes (6): scripts, build, dev, lint, postinstall, start

### Community 16 - "SDC Logo & Brand"
Cohesion: 0.40
Nodes (3): Jatiya Kabi Kazi Nazrul Islam University (JKKNIU), JKKNIU-SDC Transparent Logo, "Time To Move" Tagline

### Community 17 - "Alumni Meetup Poster"
Cohesion: 0.50
Nodes (4): Alumni Meetup Event Poster, Farewell & Alumni Meet Up (05 December, Friday), JKKNIU-SDC (Organization), "Time to Move" Tagline

### Community 18 - "MoU Signing Partnership"
Cohesion: 0.50
Nodes (5): JKKNIU-SDC (Skill Development Club, Jatiya Kabi Kazi Nazrul Islam University), Memorandum of Understanding (MoU), MoU Signing Announcement Graphic, Partnership Handshake, Rise Above All

### Community 19 - "Prisma Engines & Scripts"
Cohesion: 0.50
Nodes (4): allowScripts, prisma@5.22.0, @prisma/client@5.22.0, @prisma/engines@5.22.0

## Knowledge Gaps
- **22 isolated node(s):** `{ GET, POST }`, `CLAUDE.md @AGENTS.md Include Directive`, `create-next-app`, `Development Server (npm/yarn/pnpm/bun dev)`, `app/page.tsx Entry Page` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 121 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `lucide-react` connect `Practice Arena & Contact` to `App Config & Core Pages`, `Committee & Avatar UI`, `App Shell & Analytics`, `Runtime Dependencies`, `Package & Dev Dependencies`, `NextAuth Login Flow`, `Events Page Module`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **What connects `{ GET, POST }`, `CLAUDE.md @AGENTS.md Include Directive`, `create-next-app` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App Config & Core Pages` be split into smaller, more focused modules?**
  _Cohesion score 0.07013574660633484 - nodes in this community are weakly interconnected._
- **Why does `next` connect `App Config & Core Pages` to `Committee & Avatar UI`, `App Shell & Analytics`, `Package & Dev Dependencies`, `NextAuth Login Flow`, `Events Page Module`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **Should `Committee & Avatar UI` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `Committee & Avatar UI` to `App Config & Core Pages`, `Practice Arena & Contact`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **Should `App Shell & Analytics` be split into smaller, more focused modules?**
  _Cohesion score 0.10804597701149425 - nodes in this community are weakly interconnected._