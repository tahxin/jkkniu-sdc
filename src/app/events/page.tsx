import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  Users,
  MapPin,
  Tag,
  ChevronRight,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type EventStatus = "Upcoming" | "Past";

interface ClubEvent {
  id: string;
  title: string;
  category: string;
  status: EventStatus;
  date: string;
  location: string;
  description: string;
  attendees: string;
  /** Tailwind gradient classes for the thumbnail */
  gradient: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const events: ClubEvent[] = [
  // ── Upcoming ──────────────────────────────────────────────────────────────
  {
    id: "tech-summit-2026",
    title: "Tech Summit 2026",
    category: "Summit",
    status: "Upcoming",
    date: "August 15–16, 2026",
    location: "JKKNIU Main Auditorium",
    description:
      "A national-level technology summit bringing together innovators, industry leaders, and students. Over 500 attendees expected across two action-packed days.",
    attendees: "500+ expected",
    gradient: "from-[#31A1DB] to-[#1a6fa0]",
  },
  {
    id: "hackathon-season-4",
    title: "Hackathon Season 4",
    category: "Competition",
    status: "Upcoming",
    date: "September 12–14, 2026",
    location: "JKKNIU CSE Lab Complex",
    description:
      "A grueling 48-hour coding challenge where teams compete to build innovative solutions to real-world problems. Prizes worth ৳1,50,000 up for grabs.",
    attendees: "200+ teams",
    gradient: "from-[#6C63FF] to-[#31A1DB]",
  },
  {
    id: "career-expo-2026",
    title: "Career Expo 2026",
    category: "Career",
    status: "Upcoming",
    date: "October 8, 2026",
    location: "JKKNIU Convention Hall",
    description:
      "Connect directly with leading tech companies at our annual industry recruitment fair. CV review booths, mock interviews, and on-the-spot offers await.",
    attendees: "300+ students",
    gradient: "from-[#0EA5E9] to-[#38BDF8]",
  },
  // ── Past ──────────────────────────────────────────────────────────────────
  {
    id: "national-tech-summit-2025",
    title: "National Tech Summit 2025",
    category: "Summit",
    status: "Past",
    date: "March 22–23, 2025",
    location: "JKKNIU Main Auditorium",
    description:
      "Our biggest event to date, gathering 400+ students, developers, and professionals under one roof for keynotes, workshops, and networking sessions.",
    attendees: "400+ attendees",
    gradient: "from-[#94A3B8] to-[#CBD5E1]",
  },
  {
    id: "web-dev-bootcamp-2025",
    title: "Web Development Bootcamp",
    category: "Workshop",
    status: "Past",
    date: "January 10–12, 2025",
    location: "CSE Department, Room 301",
    description:
      "An intensive 3-day bootcamp covering modern web development with React, Next.js, and Tailwind CSS, guided by industry mentors and senior club members.",
    attendees: "80 participants",
    gradient: "from-[#64748B] to-[#94A3B8]",
  },
  {
    id: "leadership-summit-2024",
    title: "Leadership Summit 2024",
    category: "Summit",
    status: "Past",
    date: "November 5, 2024",
    location: "JKKNIU Convention Hall",
    description:
      "The annual flagship leadership event celebrating the club's achievements, inducting new committee members, and charting the roadmap for the coming year.",
    attendees: "250+ attendees",
    gradient: "from-[#475569] to-[#64748B]",
  },
];

// ─── Filter Tabs ───────────────────────────────────────────────────────────────

const filterTabs = ["All", "Summit", "Workshop", "Competition", "Career"] as const;

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: EventStatus }) {
  if (status === "Upcoming") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-600">
        <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
        Upcoming
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
      Past
    </span>
  );
}

function CategoryTag({ category }: { category: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-xs font-semibold text-primary">
      <Tag className="h-3 w-3" />
      {category}
    </span>
  );
}

function EventCard({ event }: { event: ClubEvent }) {
  return (
    <article className="group flex flex-col bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Thumbnail */}
      <div
        className={`relative h-44 bg-gradient-to-br ${event.gradient} flex items-center justify-center`}
        aria-hidden="true"
      >
        {/* Decorative circles */}
        <div className="absolute top-4 right-4 h-16 w-16 rounded-full bg-white/10" />
        <div className="absolute bottom-4 left-4 h-10 w-10 rounded-full bg-white/10" />
        <span className="relative text-white/80 text-4xl font-bold tracking-tight select-none">
          {event.title.charAt(0)}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Badges row */}
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={event.status} />
          <CategoryTag category={event.category} />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold tracking-tight leading-snug group-hover:text-primary transition-colors">
          {event.title}
        </h3>

        {/* Meta info */}
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 shrink-0 text-primary" />
            {event.date}
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
            {event.location}
          </li>
          <li className="flex items-center gap-2">
            <Users className="h-3.5 w-3.5 shrink-0 text-primary" />
            {event.attendees}
          </li>
        </ul>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {event.description}
        </p>

        {/* View Details */}
        <div className="mt-auto pt-2">
          <Link
            href={`/events/${event.id}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline underline-offset-4 transition-colors min-h-[44px] py-2"
          >
            View Details
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EventsPage() {
  const upcomingCount = events.filter((e) => e.status === "Upcoming").length;

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="bg-gradient-to-b from-[#EAF5FC] to-white pt-24 pb-16 px-5">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-3">
            What We&apos;re Up To
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Events &amp; Programs
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From national summits to intensive workshops — JKKNIU-SDC runs
            year-round programs that challenge, connect, and elevate our
            community.
          </p>

          {/* Quick stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-12">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">
                {upcomingCount}
              </span>
              <span className="text-sm text-muted-foreground mt-1">
                Upcoming Events
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">1,000+</span>
              <span className="text-sm text-muted-foreground mt-1">
                Total Attendees
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">30+</span>
              <span className="text-sm text-muted-foreground mt-1">
                Events Hosted
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Filter Tabs ── */}
      <section className="sticky top-16 z-10 bg-white border-b border-border px-5 py-0">
        <div className="container mx-auto max-w-5xl">
          <nav
            className="flex items-center gap-1 overflow-x-auto scrollbar-none"
            aria-label="Event category filter"
          >
            {filterTabs.map((tab, index) => (
              <button
                key={tab}
                type="button"
                className={`shrink-0 min-h-[44px] px-4 py-2 text-sm font-semibold transition-colors border-b-2 ${
                  index === 0
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* ── Upcoming Events ── */}
      <section className="px-5 py-16 md:py-20">
        <div className="container mx-auto max-w-5xl">
          {/* Section label */}
          <div className="mb-8">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-3">
              Don&apos;t Miss Out
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground mt-2">
              Register early — seats fill fast.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events
              .filter((e) => e.status === "Upcoming")
              .map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
          </div>
        </div>
      </section>

      {/* ── Past Events ── */}
      <section className="px-5 pb-16 md:pb-24">
        <div className="container mx-auto max-w-5xl">
          {/* Divider with label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-border" />
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-1 text-center">
                Archive
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">
                Past Events
              </h2>
            </div>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Cards grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events
              .filter((e) => e.status === "Past")
              .map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
          </div>

          {/* Load more placeholder */}
          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              className="min-h-[44px] gap-2"
              render={<Link href="/events/archive" />}
            >
              Browse Full Archive
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="px-5 pb-16 md:pb-24">
        <div className="container mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#31A1DB] to-[#1a6fa0] px-8 py-14 md:px-14 text-white text-center">
            {/* Decorative blobs */}
            <div
              className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-white/10"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-white/10"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-white/70 mb-3">
                Partner With Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Want to host an event?
              </h2>
              <p className="text-white/80 max-w-xl mx-auto text-base leading-relaxed mb-8">
                We partner with organizations, companies, and universities to
                co-host impactful programs. Reach out and let&apos;s build
                something great together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  className="min-h-[44px] bg-white text-[#31A1DB] hover:bg-white/90 font-semibold gap-2 px-7"
                  render={<Link href="/contact" />}
                >
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="min-h-[44px] border-white/40 text-white hover:bg-white/10 hover:text-white gap-2 px-7"
                  render={<Link href="/about" />}
                >
                  Learn About Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
