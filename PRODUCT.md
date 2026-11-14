# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary success audience (confirmed with user):** corporate partners, sponsors, and recruiters. A first-time visit succeeds when a partner decides JKKNIU-SDC is a credible pipeline to Bangladeshi student talent and moves to inquire (Contact/Partners page).
- Students of JKKNIU (current or prospective members) who apply for membership, browse events, and use the practice arena.
- Club members (logged in) who manage their profile; club committee members.

## Product Purpose

Official website of the JKKNIU Skill Development Club (JKKNIU-SDC) at Jatiya Kabi Kazi Nazrul Islam University, Mymensingh, Bangladesh, established March 13, 2018. The club bridges academic theory and real-world corporate expectations through workshops, inter-university competitions, seminars, and national-level job fairs, transforming students into skilled human resources. The website presents the club's credibility, event track record, partner network, and membership program; it also hosts member accounts and a small in-browser coding practice arena.

## Positioning

A university club with a proven national-scale event track record — flagship case competition BizCase drew 370+ teams from 65+ universities, and the club has signed MoUs with major Bangladeshi corporations — positioned as the bridge between JKKNIU students and corporate Bangladesh.

## Operating Context

- Student-led club at a public university; events run on campus and online (competition season each year; job fairs).
- Executive members are selected by committee; general membership is free and open to any enrolled JKKNIU student, applying each academic semester.

## Capabilities and Constraints

- Next.js App Router + Tailwind v4 + shadcn/ui; Prisma (SQLite in dev) + NextAuth for login/profile.
- Public pages: Home, About, Committee, Events, Partners, Membership, Gallery, Blog, Contact.
- Member pages: Login, Profile (edit form via server actions).
- Practice arena (`/practice`): client-side JS problem runner with test cases — an Operate surface; keep function and behavior intact.
- Logo asset: `/jkkniu-sdc transparent logo.png`. Constitution PDF at `/assets/constitution.pdf`.
- Open decision (do not fabricate): headline stats like "500+ members", "100+ events" are carried from the previous site and are presented as-is, not amplified or re-derived.

## Brand Commitments

- Name and wordmark "JKKNIU-SDC" and the existing logo asset are binding.
- The vermillion red (#C8001E) / amber gold palette is confirmed **not** binding — freed for a new visual world (confirmed with user, 2026-11-15).

## Evidence on Hand

- Real events with descriptions: BizCase 2020 (370+ teams, 65+ universities), JKKNIU Job Fair 2023 (with Excellence Bangladesh), BizCase 2026 (1 Lakh BDT prize pool; SR Dream IT, US-Bangla, TBS), CV Writing Competition 4.0 (2025).
- Real partner names with MoUs: AKIJ Resource, Rise Above All, AKIJ iBOS, Excellence Bangladesh, The Business Standard, US-Bangla Airlines.
- Club history, mission, and vision copy on About; membership tiers and FAQ on Membership; committee roster on Committee.
- Gallery images at `/images/` (cv-writing.jpg, alumni-meetup.jpg, mou-signing.jpg, new-year-2026.jpg, recap-2025.jpg).
- Absences: no partner logos (partner names are text-only), no event photography beyond gallery images, no testimonials or press quotes — do not invent any.

## Product Principles

1. Prove with track record, not hype: real events, real numbers, real partner names do the persuading.
2. Make the club legible to corporations first: the site must read as a credible institutional pipeline, not only a student community.
3. Keep every factual claim traceable to the pages' existing copy.
4. Student energy is the differentiator, shown through evidence (photos, events, arena) rather than decoration.

## Accessibility & Inclusion

- 44px minimum touch targets on interactive elements; responsive down to small phones; keep both.
