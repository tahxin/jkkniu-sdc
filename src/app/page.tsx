import Link from "next/link";
import { ArrowRight, Users, Calendar, Zap, Globe, BookOpen, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const R  = "#C8001E";
const Y  = "#F5A800";
const BK = "#0D0D0D";

const STATS = [
  { n: "500+",   label: "Active members" },
  { n: "150+",   label: "Events hosted"  },
  { n: "15",     label: "Years of impact"},
  { n: "3,000+", label: "Alumni network" },
];

const FEATURES = [
  { icon: Zap,        title: "Workshops & Bootcamps",  desc: "Hands-on sessions with industry practitioners covering the latest skills in tech and business." },
  { icon: Globe,      title: "National Summits",        desc: "Multi-day flagship events bringing together students, speakers, and corporate sponsors." },
  { icon: TrendingUp, title: "Career Development",      desc: "Job fairs, mentorship, and direct pipelines to Bangladesh's leading employers." },
  { icon: BookOpen,   title: "Research & Publications", desc: "Publishing student research, case studies, and thought-leadership content." },
  { icon: Users,      title: "Community Network",       desc: "A 3,000+ strong alumni network spanning Bangladesh and beyond." },
  { icon: Calendar,   title: "Hackathons",              desc: "48-hour competitions that turn raw ideas into working prototypes." },
];

const EVENTS = [
  {
    status: "Upcoming", statusColor: "#16A34A", statusBg: "#F0FDF4",
    date: "15–16 Aug 2026", category: "Summit",
    title: "Tech Summit 2026",
    desc: "Our national gathering of developers, designers, and entrepreneurs — 500+ attendees expected.",
  },
  {
    status: "Upcoming", statusColor: "#16A34A", statusBg: "#F0FDF4",
    date: "Sep 2026", category: "Competition",
    title: "Hackathon Season 4",
    desc: "48 hours. One idea. Build, iterate, and pitch to a panel of industry judges.",
  },
  {
    status: "Past", statusColor: "#6B6B6B", statusBg: "#F7F7F5",
    date: "Mar 2025", category: "Summit",
    title: "National Tech Summit 2025",
    desc: "Our biggest event to date — 400+ attendees and 20+ speakers from across the country.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ══════════════════════════
          HERO — near-black, bold
          ══════════════════════════ */}
      <section
        className="min-h-screen flex flex-col justify-center px-5 md:px-8 pt-28 pb-24"
        style={{ backgroundColor: BK }}
      >
        <div className="container mx-auto max-w-5xl">

          {/* Eyebrow with yellow rule */}
          <div className="flex items-center gap-3 mb-10">
            <span className="h-[3px] w-8 rounded-full" style={{ backgroundColor: Y }} />
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/50">
              JKKNIU Student Development Club
            </span>
          </div>

          {/* Massive headline */}
          <h1 className="text-[clamp(3rem,9vw,6rem)] font-bold tracking-[-0.03em] leading-[1.02] text-white mb-8 max-w-4xl">
            Where students{" "}
            <span style={{ color: R }}>become</span>{" "}
            <span
              className="relative inline-block"
              style={{ color: Y }}
            >
              leaders.
              <span
                className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
                style={{ backgroundColor: Y, opacity: 0.4 }}
              />
            </span>
          </h1>

          <p className="text-[1.1rem] leading-[1.75] text-white/55 max-w-xl mb-12">
            JKKNIU-SDC empowers students at Jatiya Kabi Kazi Nazrul Islam University through innovation, industry partnerships, and high-impact community programmes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              className="h-12 px-7 rounded-xl text-white text-[15px] font-semibold touch-target"
              style={{ backgroundColor: R }}
              render={<Link href="/membership" />}
            >
              Apply for Membership
            </Button>
            <Button
              variant="ghost"
              className="h-12 px-7 rounded-xl text-[15px] font-semibold border touch-target"
              style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)" }}
              render={<Link href="/events" />}
            >
              Browse Events
            </Button>
          </div>

          {/* Stats row */}
          <div
            className="mt-20 pt-10 border-t grid grid-cols-2 md:grid-cols-4 gap-8"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            {STATS.map(({ n, label }) => (
              <div key={label}>
                <p
                  className="text-3xl md:text-4xl font-bold tracking-tight mb-1"
                  style={{ color: Y }}
                >
                  {n}
                </p>
                <p className="text-[13px] text-white/45">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          RED RULE DIVIDER
          ══════════════════════════ */}
      <div className="h-1 w-full" style={{ backgroundColor: R }} />

      {/* ══════════════════════════
          WHAT WE DO — white bg
          ══════════════════════════ */}
      <section className="px-5 md:px-8 py-24 bg-white">
        <div className="container mx-auto max-w-5xl">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="section-label mb-3">What We Do</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-sm">
                Everything you need to grow.
              </h2>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold hover:gap-3 transition-all"
              style={{ color: R }}
            >
              About JKKNIU-SDC <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E8E8E8] rounded-2xl overflow-hidden border border-[#E8E8E8]">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white p-7 hover:bg-[#FAFAFA] transition-colors group">
                <div
                  className="h-10 w-10 rounded-xl flex items-center justify-center mb-5 transition-colors"
                  style={{ backgroundColor: "rgba(200,0,30,0.08)" }}
                >
                  <Icon
                    className="h-5 w-5 transition-colors"
                    style={{ color: R }}
                  />
                </div>
                <h3 className="font-semibold text-[15px] mb-2">{title}</h3>
                <p className="text-[13px] text-[#6B6B6B] leading-[1.6]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          EVENTS — off-white bg
          ══════════════════════════ */}
      <section className="px-5 md:px-8 py-24 bg-[#F7F7F5] border-t border-[#E8E8E8]">
        <div className="container mx-auto max-w-5xl">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="section-label mb-3">Events</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Experiences that matter.
              </h2>
            </div>
            <Link
              href="/events"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold hover:gap-3 transition-all"
              style={{ color: R }}
            >
              All events <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex flex-col divide-y divide-[#E8E8E8] rounded-2xl overflow-hidden border border-[#E8E8E8] bg-white">
            {EVENTS.map((ev, i) => (
              <Link
                key={i}
                href="/events"
                className="flex items-start gap-5 p-6 hover:bg-[#FAFAFA] transition-colors group"
              >
                <span className="text-[11px] font-semibold text-[#CACACA] tabular-nums mt-1 w-5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span
                      className="text-[11px] font-semibold px-2 py-0.5 rounded-md"
                      style={{ color: ev.statusColor, backgroundColor: ev.statusBg }}
                    >
                      {ev.status}
                    </span>
                    <span className="text-[12px] text-[#6B6B6B]">{ev.date}</span>
                    <span className="text-[12px] text-[#CACACA]">·</span>
                    <span className="text-[12px] text-[#6B6B6B]">{ev.category}</span>
                  </div>
                  <h3
                    className="font-semibold text-[16px] mb-1 transition-colors"
                    style={{ color: BK }}
                  >
                    {ev.title}
                  </h3>
                  <p className="text-[13px] text-[#6B6B6B] leading-[1.5] line-clamp-2">{ev.desc}</p>
                </div>
                <ArrowRight
                  className="h-4 w-4 shrink-0 mt-1 transition-colors text-[#CACACA] group-hover:text-[#C8001E]"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          PARTNER STRIP
          ══════════════════════════ */}
      <section className="px-5 md:px-8 py-16 bg-white border-t border-[#E8E8E8]">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="section-label mb-2">For Companies</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Recruit top student talent.
            </h2>
            <p className="text-[14px] text-[#6B6B6B] mt-2 max-w-sm">
              Partner with JKKNIU-SDC to access Bangladesh's brightest students.
            </p>
          </div>
          <Button
            className="shrink-0 h-11 px-6 rounded-xl text-white font-semibold touch-target"
            style={{ backgroundColor: BK }}
            render={<Link href="/partners" />}
          >
            Partner with us
          </Button>
        </div>
      </section>

      {/* ══════════════════════════
          FULL CTA — yellow band
          ══════════════════════════ */}
      <section className="px-5 md:px-8 py-20 border-t border-[#E8E8E8]" style={{ backgroundColor: Y }}>
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(0,0,0,0.45)" }}>
              Join the Club
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight max-w-sm" style={{ color: BK }}>
              Your next opportunity starts here.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button
              className="h-12 px-7 rounded-xl text-white text-[15px] font-semibold touch-target"
              style={{ backgroundColor: R }}
              render={<Link href="/membership" />}
            >
              Apply Now
            </Button>
            <Button
              variant="ghost"
              className="h-12 px-7 rounded-xl text-[15px] font-semibold border touch-target"
              style={{ borderColor: "rgba(0,0,0,0.2)", color: BK }}
              render={<Link href="/about" />}
            >
              Learn more
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
