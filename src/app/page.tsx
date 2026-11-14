import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Ticket } from "@/components/world/Ticket";
import { CounterBoard } from "@/components/world/CounterBoard";

const BOOTHS = [
  "AKIJ Resource",
  "Rise Above All",
  "AKIJ iBOS",
  "Excellence Bangladesh",
  "The Business Standard",
  "US-Bangla Airlines",
];

const MARQUEE_ITEMS = [
  "BizCase 2026 — 1 Lakh BDT prize pool",
  "Supported by SR Dream IT · US-Bangla · TBS",
  "CV Writing Competition 4.0 — registration open",
  "BizCase 2020 drew 370+ teams from 65+ universities",
];

const PROGRAM = [
  { title: "Communication & Public Speaking", desc: "Master the art of articulating ideas and speaking confidently in front of any audience." },
  { title: "Leadership & Team Management", desc: "Gain hands-on experience by taking on executive roles and managing dynamic teams." },
  { title: "Corporate Networking", desc: "Build meaningful connections with industry leaders, alumni, and top MNCs across Bangladesh." },
  { title: "Problem Solving & Decision Making", desc: "Tackle real-world business cases and sharpen your analytical and strategic thinking." },
  { title: "Hard Skills Development", desc: "Acquire essential technical skills, from Microsoft Office proficiency to modern design tools." },
  { title: "Career Pipelines", desc: "Direct access to exclusive job fairs and recruitment opportunities from our corporate partners." },
];

const EVENTS = [
  {
    status: "Upcoming",
    date: "July 24, 2025",
    category: "Competition",
    title: "CV Writing Competition 4.0",
    desc: "Registration is open now — enhance your professional profile and stand out to top recruiters in our premier CV writing challenge.",
  },
  {
    status: "Past",
    date: "TBA",
    category: "Competition",
    title: "BizCase 2026",
    desc: "Our flagship business case competition with a massive 1 Lakh BDT prize pool, challenging students to solve real-world corporate problems. Supported by SR Dream IT, US-Bangla, and TBS.",
  },
  {
    status: "Past",
    date: "July 30, 2023",
    category: "Job Fair",
    title: "JKKNIU Job Fair 2023",
    desc: "A massive networking and recruitment event bridging talented individuals in the Mymensingh region with leading startups, MNCs, and non-profits, in association with Excellence Bangladesh.",
  },
  {
    status: "Past",
    date: "2020",
    category: "Competition",
    title: "BizCase 2020",
    desc: "A massive success drawing over 370 teams from more than 65 universities across the country to showcase their analytical abilities.",
  },
];

const MOMENTS = [
  { src: "/images/cv-writing.jpg", alt: "CV Writing Competition", caption: "CV Writing Competition" },
  { src: "/images/alumni-meetup.jpg", alt: "Alumni Meetup", caption: "Alumni Meetup" },
  { src: "/images/mou-signing.jpg", alt: "MoU Signing with a corporate partner", caption: "MoU Signing" },
  { src: "/images/new-year-2026.jpg", alt: "Happy New Year 2026", caption: "New Year 2026", wide: false },
  { src: "/images/recap-2025.jpg", alt: "2025 Recap", caption: "2025 Recap", wide: false },
];

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ══════════════════════════
          MAIN STAGE — banner + hall counter
          ══════════════════════════ */}
      <section className="pt-16 border-b-[3px] border-ink">
        <div className="grid lg:grid-cols-[1fr_340px]">
          {/* Banner */}
          <div
            className="relative bg-hall text-white px-5 md:px-14 py-16 md:py-20 lg:min-h-[calc(100vh-13.5rem)] flex flex-col justify-center"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 2px, transparent 2px 110px)",
            }}
          >
            <p className="inline-flex w-fit items-center gap-2 bg-white text-ink text-[11px] font-bold tracking-[0.22em] uppercase px-3.5 py-1.5 mb-8 shadow-sm">
              Official Student Talent Pipeline
            </p>
            <h1 className="display-caps text-[clamp(3.8rem,9vw,7.5rem)] max-w-4xl tracking-tight">
              Time to <span className="text-brass">move</span>
            </h1>
            <p className="mt-7 max-w-xl text-[1.05rem] leading-[1.75] text-white/90 font-medium">
              The Skill Development Club of Jatiya Kabi Kazi Nazrul Islam
              University. Established March 13, 2018 — transforming students
              into expert, adept human resources, ready to contribute their
              excellence anywhere in the world.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Ticket href="/partners" tone="stamp" notch="var(--hall)">
                Partner with us
              </Ticket>
              <Ticket href="/membership" tone="outline" notch="var(--hall)">
                Apply for membership
              </Ticket>
            </div>
          </div>

          {/* Counter board */}
          <CounterBoard className="border-t-[3px] lg:border-t-0 lg:border-l-[3px] border-ink" />
        </div>
      </section>

      {/* ══════════════════════════
          PARTNER BOOTHS
          ══════════════════════════ */}
      <section className="border-b-[3px] border-ink bg-cream">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {BOOTHS.map((name, i) => (
            <Link
              key={name}
              href="/partners"
              className="group px-5 md:px-8 py-6 border-cream hover:bg-secondary/60 transition-colors [&:not(:last-child)]:border-r-2 [&:not(:last-child)]:border-paper-line"
            >
              <p className="text-[10px] font-bold tracking-[0.24em] uppercase text-muted-foreground mb-2">
                Booth {String(i + 1).padStart(2, "0")}
              </p>
              <p className="font-bold text-[15px] leading-snug group-hover:text-stamp transition-colors">
                {name}
              </p>
              <p className="text-[11px] text-muted-foreground mt-1">MoU partner</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════════════════
          HALL MARQUEE
          ══════════════════════════ */}
      <div className="overflow-hidden border-b-[3px] border-ink bg-brass text-ink" aria-hidden="true">
        <div className="marquee-track py-3">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {MARQUEE_ITEMS.map((item) => (
                <span key={item} className="display-caps flex items-center text-[15px] whitespace-nowrap">
                  <span className="px-6">{item}</span>
                  <span className="text-stamp">★</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════
          THE HALL PROGRAM
          ══════════════════════════ */}
      <section className="px-5 md:px-8 py-24 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <h2 className="display-caps text-4xl md:text-5xl max-w-md">
              Everything you need to grow.
            </h2>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-stamp hover:gap-3.5 transition-all"
            >
              About the club <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-14">
            {PROGRAM.map(({ title, desc }, i) => (
              <div key={title} className="program-row py-6">
                <p className="display-caps text-[15px] text-stamp mb-2 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-bold text-[17px] mb-1.5">{title}</h3>
                <p className="text-[14px] text-muted-foreground leading-[1.65]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          EVENTS PROGRAM BOARD
          ══════════════════════════ */}
      <section className="px-5 md:px-8 pb-24 md:pb-28">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <h2 className="display-caps text-4xl md:text-5xl max-w-md">
              Experiences that matter.
            </h2>
            <Link
              href="/events"
              className="group inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-stamp hover:gap-3.5 transition-all"
            >
              All events <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="border-t-2 border-b-2 border-ink">
            {EVENTS.map((ev, i) => (
              <Link
                key={ev.title}
                href="/events"
                className="program-row group flex items-start gap-4 md:gap-7 px-2 md:px-4 py-6 hover:bg-secondary/50 transition-colors"
              >
                <span className="display-caps text-[15px] text-muted-foreground/70 tabular-nums mt-1.5 shrink-0 w-7">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span
                      className={
                        ev.status === "Upcoming"
                          ? "stamp-chip text-hall"
                          : "stamp-chip text-muted-foreground"
                      }
                    >
                      {ev.status}
                    </span>
                    <span className="text-[12px] font-semibold text-muted-foreground tabular-nums">
                      {ev.date}
                    </span>
                    <span className="text-[12px] text-muted-foreground/60">·</span>
                    <span className="text-[12px] font-semibold uppercase tracking-wide text-muted-foreground">
                      {ev.category}
                    </span>
                  </div>
                  <h3 className="display-caps text-[19px] md:text-[21px] mb-1.5 group-hover:text-stamp transition-colors">
                    {ev.title}
                  </h3>
                  <p className="text-[13.5px] text-muted-foreground leading-normal line-clamp-2 max-w-3xl">
                    {ev.desc}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 mt-2 text-muted-foreground/40 group-hover:text-stamp transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          MOMENTS — real event photography
          ══════════════════════════ */}
      <section className="px-5 md:px-8 py-24 md:py-28 bg-secondary/60 border-y-[3px] border-ink">
        <div className="container mx-auto max-w-6xl">
          <h2 className="display-caps text-4xl md:text-5xl mb-12 max-w-md">
            Latest highlights.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {MOMENTS.map(({ src, alt, caption, wide }) => (
              <figure
                key={src}
                className={`border-2 border-ink bg-card ${wide ? "md:col-span-2" : ""}`}
              >
                <div className="overflow-hidden">
                  <img
                    src={src}
                    alt={alt}
                    className="w-full aspect-[4/3] object-cover hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <figcaption className="bg-ink text-cream text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-2.5">
                  {caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-stamp hover:gap-3.5 transition-all"
            >
              Full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          FINAL BANNER — join
          ══════════════════════════ */}
      <section className="bg-hall text-white">
        <div className="container mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <h2 className="display-caps text-4xl md:text-5xl leading-[1.05] max-w-lg">
            Your next opportunity starts here.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Ticket href="/partners" tone="stamp" notch="var(--hall)">
              Partner with us
            </Ticket>
            <Ticket href="/membership" tone="outline" notch="var(--hall)">
              Apply for membership
            </Ticket>
          </div>
        </div>
      </section>
    </div>
  );
}
