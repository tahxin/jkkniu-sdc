import Link from "next/link";
import { ArrowRight, Users, Calendar, Zap, Globe, BookOpen, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const R = "#C8001E";
const BK = "#0D0D0D";

const STATS = [
  { n: "500+", label: "Active members" },
  { n: "100+", label: "Events hosted" },
  { n: "2018", label: "Year Established" },
  { n: "Job Fairs", label: "Career pipelines" },
];

const FEATURES = [
  { icon: Zap, title: "Communication & Public Speaking", desc: "Master the art of articulating ideas and speaking confidently in front of any audience." },
  { icon: Users, title: "Leadership & Team Management", desc: "Gain hands-on experience by taking on executive roles and managing dynamic teams." },
  { icon: Globe, title: "Corporate Networking", desc: "Build meaningful connections with industry leaders, alumni, and top MNCs across Bangladesh." },
  { icon: TrendingUp, title: "Problem Solving & Decision Making", desc: "Tackle real-world business cases and sharpen your analytical and strategic thinking." },
  { icon: BookOpen, title: "Hard Skills Development", desc: "Acquire essential technical skills, from Microsoft Office proficiency to modern design tools." },
  { icon: Calendar, title: "Career Pipelines", desc: "Direct access to exclusive job fairs and recruitment opportunities from our corporate partners." },
];

const EVENTS = [
  {
    status: "Past", statusColor: "#6B6B6B", statusBg: "#F7F7F5 ",
    date: "TBA", category: "Competition",
    title: "BizCase 2026",
    desc: "Our flagship business case competition with a massive 1 Lakh BDT prize pool, challenging students to solve real-world corporate problems. Supported by SR Dream IT, US-Bangla, and TBS.",
  },
  {
    status: "Past", statusColor: "#6B6B6B", statusBg: "#F7F7F5",
    date: "July 30, 2023", category: "Job Fair",
    title: "JKKNIU Job Fair 2023",
    desc: "A massive networking and recruitment event bridging talented individuals in the Mymensingh region with leading startups, MNCs, and non-profits, in association with Excellence Bangladesh.",
  },
  {
    status: "Past", statusColor: "#6B6B6B", statusBg: "#F7F7F5",
    date: "Past Event", category: "Competition",
    title: "BizCase 2020",
    desc: "A massive success drawing over 370 teams from more than 65 universities across the country to showcase their analytical abilities.",
  },
  {
    status: "Upcoming", statusColor: "#16A34A", statusBg: "#F0FDF4",
    date: "July 24, 2025", category: "Competition",
    title: "CV Writing Competition 4.0",
    desc: "Registration is Open Now! Enhance your professional profile and stand out to top recruiters in our premier CV writing challenge.",
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

          {/* Logo and Eyebrow */}
          <div className="flex flex-col gap-6 mb-10">
            <div className="w-20 h-20 bg-white p-3 rounded-2xl flex items-center justify-center shadow-lg">
              <img src="/jkkniu-sdc transparent logo.png" alt="JKKNIU SDC Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex items-center gap-3">
              <span className="h-0.75 w-8 rounded-full" style={{ backgroundColor: R }} />
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/50">
                Jatiya Kabi Kazi Nazrul Islam University-Skill Development Club
              </span>
            </div>
          </div>

          {/* Massive headline */}
          <h1 className="text-[clamp(3rem,9vw,6rem)] font-bold tracking-[-0.03em] leading-[1.02] text-white mb-8 max-w-4xl">
            Time to{" "}
            <br />
            <span style={{ color: R }}>Move</span>{" "}
          </h1>

          <p className="text-[1.1rem] leading-[1.75] text-white/55 max-w-xl mb-12">
            Established on March 13, 2018, at Jatiya Kabi Kazi Nazrul Islam University. Our core focus is transforming students into expert, adept human resources capable of contributing their excellence anywhere in the world.
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
                  className="text-3xl md:text-4xl font-bold tracking-tight mb-1 text-white"
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
                  <p className="text-[13px] text-[#6B6B6B] leading-normal line-clamp-2">{ev.desc}</p>
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
        <div className="container mx-auto max-w-5xl flex flex-col items-center gap-8">
          <div className="text-center">
            <p className="section-label mb-2 mx-auto justify-center">Corporate Network</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Trusted by Top Organizations.
            </h2>
            <p className="text-[14px] text-[#6B6B6B] mt-2 max-w-2xl mx-auto">
              We have proudly collaborated and signed MoUs with major MNCs and corporate companies to pave the way for youth skill development, research, and innovation.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-4 opacity-60 grayscale hover:grayscale-0 transition-all">
            <span className="font-bold text-xl md:text-2xl text-[#0D0D0D]">AKIJ Resource</span>
            <span className="font-bold text-xl md:text-2xl text-[#0D0D0D]">Rise Above All</span>
            <span className="font-bold text-xl md:text-2xl text-[#0D0D0D]">AKIJ iBOS</span>
            <span className="font-bold text-xl md:text-2xl text-[#0D0D0D]">Excellence Bangladesh</span>
            <span className="font-bold text-xl md:text-2xl text-[#0D0D0D]">The Business Standard</span>
            <span className="font-bold text-xl md:text-2xl text-[#0D0D0D]">US-Bangla Airlines</span>
          </div>

          <Button
            className="mt-4 h-11 px-6 rounded-xl text-white font-semibold touch-target"
            style={{ backgroundColor: BK }}
            render={<Link href="/partners" />}
          >
            Partner with us
          </Button>
        </div>
      </section>

      {/* ══════════════════════════
          GALLERY / HIGHLIGHTS
          ══════════════════════════ */}
      <section className="px-5 md:px-8 py-16 bg-[#FAFAFA] border-t border-[#E8E8E8]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <p className="section-label mb-2 mx-auto justify-center">Moments</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Latest Highlights
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* CV Writing */}
            <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-white relative group">
              <img src="/images/cv-writing.jpg" alt="CV Writing Competition" className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-700" />
            </div>
            {/* Alumni Meetup */}
            <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-white relative group">
              <img src="/images/alumni-meetup.jpg" alt="Alumni Meetup" className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-700" />
            </div>
            {/* MoU Signing */}
            <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-white relative group">
              <img src="/images/mou-signing.jpg" alt="MoU Signing" className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-700" />
            </div>
            {/* New Year 2026 */}
            <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-white md:col-span-2 lg:col-span-1 relative group">
              <img src="/images/new-year-2026.jpg" alt="Happy New Year 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            {/* Recap 2025 */}
            <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-white md:col-span-2 relative group flex">
              <img src="/images/recap-2025.jpg" alt="2025 Recap" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          FULL CTA — light gray band
          ══════════════════════════ */}
      <section className="px-5 md:px-8 py-20 border-t border-[#E8E8E8] bg-[#F7F7F5]">
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
