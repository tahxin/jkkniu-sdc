import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";
import { Ticket } from "@/components/world/Ticket";
import { CounterBoard } from "@/components/world/CounterBoard";

const BOOTHS = [
  { name: "AKIJ Resource", category: "Industrial Partner" },
  { name: "Rise Above All", category: "Knowledge Partner" },
  { name: "AKIJ iBOS", category: "Technology Partner" },
  { name: "Excellence Bangladesh", category: "Strategic Partner" },
  { name: "The Business Standard", category: "Media Partner" },
  { name: "US-Bangla Airlines", category: "Travel Partner" },
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
];

const MOMENTS = [
  { src: "/images/cv-writing.jpg", alt: "CV Writing Competition", caption: "Professional Excellence" },
  { src: "/images/alumni-meetup.jpg", alt: "Alumni Meetup", caption: "Networking & Growth" },
  { src: "/images/mou-signing.jpg", alt: "MoU Signing", caption: "Corporate Alliance" },
];

export default function Home() {
  return (
    <div className="flex flex-col dossier-grid">
      {/* ══════════════════════════
          HERO — The Institutional Stage
          ══════════════════════════ */}
      <section className="relative pt-24 border-b-[3px] border-ink bg-hall text-white overflow-hidden">
        {/* Layered Typography Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none overflow-hidden">
          <div className="display-caps text-[25vw] leading-none -translate-x-10 translate-y-20">JKKNIU</div>
          <div className="display-caps text-[25vw] leading-none translate-x-40 -translate-y-10">SDC</div>
        </div>

        <div className="container mx-auto px-5 md:px-8 grid lg:grid-cols-[1fr_360px] gap-0 relative z-10">
          <div className="py-20 md:py-32 flex flex-col justify-center border-ink lg:border-r-[3px]">
            <div className="flex items-center gap-4 mb-8">
              <span className="stamp-chip border-white text-white">Est. 2018</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/70">Mymensingh, Bangladesh</span>
            </div>
            
            <h1 className="display-caps text-[clamp(4rem,10vw,8.5rem)] leading-[0.85] mb-8 tracking-tighter">
              The Bridge To <br />
              <span className="text-brass">Excellence.</span>
            </h1>
            
            <p className="max-w-xl text-[1.1rem] md:text-[1.2rem] leading-[1.6] text-white/90 mb-12 font-medium">
              Official Student Talent Pipeline of Jatiya Kabi Kazi Nazrul Islam University. 
              Transforming potential into professional mastery through elite training and corporate alliances.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Ticket href="/partners" tone="stamp" className="notch-tl">
                Partner Inquiries
              </Ticket>
              <Ticket href="/membership" tone="outline" className="border-white/40 text-white hover:bg-white/10">
                Join the Pipeline
              </Ticket>
            </div>
          </div>

          <div className="bg-ink p-8 md:p-12 flex flex-col justify-center border-ink">
            <CounterBoard className="!bg-transparent !p-0 !gap-12" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          TRUST INDICATORS
          ══════════════════════════ */}
      <section className="bg-cream border-b-[3px] border-ink">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x-2 divide-paper-line border-ink">
          {BOOTHS.map((partner, index) => (
            <div key={partner.name} className="p-6 md:p-8 hover:bg-white transition-all group cursor-default">
              <p className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase mb-3">0{index+1} Alliance</p>
              <p className="font-bold text-[14px] leading-tight mb-1 group-hover:text-hall transition-colors">{partner.name}</p>
              <p className="text-[11px] text-muted-foreground/70 uppercase font-semibold">{partner.category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════
          MARQUEE
          ══════════════════════════ */}
      <div className="bg-brass border-b-[3px] border-ink py-4 overflow-hidden select-none">
        <div className="marquee-track">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="flex items-center">
              {MARQUEE_ITEMS.map((item) => (
                <div key={item} className="flex items-center px-8">
                  <span className="display-caps text-[18px] text-ink whitespace-nowrap">{item}</span>
                  <span className="mx-8 text-stamp">◆</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════
          THE ARCHITECTURE OF GROWTH
          ══════════════════════════ */}
      <section className="py-28 md:py-40 bg-white">
        <div className="container mx-auto px-5 md:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="sticky top-24">
              <h2 className="display-caps text-5xl md:text-7xl mb-8">The Hall <br />Program.</h2>
              <p className="text-[1.1rem] leading-[1.8] text-muted-foreground mb-10 max-w-md">
                Our curriculum is built on six pillars of professional development, 
                designed to turn students into the most sought-after human resources in Bangladesh.
              </p>
              <Link href="/about" className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-widest text-stamp group hover:gap-5 transition-all">
                The full dossier <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-px bg-paper-line border-2 border-ink">
              {PROGRAM.map((p, index) => (
                <div key={p.title} className="bg-white p-8 md:p-10 group hover:bg-cream transition-colors">
                  <span className="display-caps text-hall text-[15px] mb-4 block">Section 0{index+1}</span>
                  <h3 className="font-bold text-[20px] mb-4 group-hover:translate-x-2 transition-transform">{p.title}</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          EXHIBITION — Events
          ══════════════════════════ */}
      <section className="py-28 md:py-40 border-t-[3px] border-ink bg-cream">
        <div className="container mx-auto px-5 md:px-8 max-w-6xl text-center mb-20">
          <h2 className="display-caps text-5xl md:text-7xl mb-6">Proven Outcomes.</h2>
          <p className="text-muted-foreground uppercase tracking-[0.2em] font-bold text-[13px]">The Registry of Impact</p>
        </div>

        <div className="container mx-auto px-5 md:px-8 max-w-6xl grid md:grid-cols-3 gap-8">
          {EVENTS.map((ev) => (
            <Link key={ev.title} href="/events" className="bg-white border-2 border-ink p-8 flex flex-col group hover:-translate-y-2 transition-all hover:shadow-[10px_10px_0_0_#101010]">
              <div className="flex justify-between items-start mb-10">
                <span className={`stamp-chip ${ev.status === 'Upcoming' ? 'text-hall' : 'text-muted-foreground'}`}>{ev.status}</span>
                <span className="text-[11px] font-bold text-muted-foreground uppercase">{ev.date}</span>
              </div>
              <h3 className="display-caps text-2xl mb-4 group-hover:text-hall transition-colors">{ev.title}</h3>
              <p className="text-[14px] text-muted-foreground leading-relaxed mb-10 flex-1">{ev.desc}</p>
              <div className="pt-6 border-t border-paper-line flex justify-between items-center">
                <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{ev.category}</span>
                <ArrowRight className="h-4 w-4 text-stamp" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════════════════
          MOMENTS
          ══════════════════════════ */}
      <section className="py-28 md:py-40 bg-white border-y-[3px] border-ink">
        <div className="container mx-auto px-5 md:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="display-caps text-5xl md:text-7xl">Visual <br />Evidence.</h2>
            <Link href="/gallery" className="Ticket bg-ink text-cream px-10 py-4 uppercase font-bold text-[13px] tracking-widest hover:bg-hall transition-colors notch-br">
              Browse Gallery
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border-2 border-ink bg-ink">
            {MOMENTS.map((m) => (
              <div key={m.caption} className="relative group overflow-hidden border-ink md:[&:not(:last-child)]:border-r-2">
                <img src={m.src} alt={m.alt} className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="display-caps text-white text-3xl mb-2">{m.caption}</span>
                  <p className="text-white/60 text-[11px] font-bold uppercase tracking-widest">{m.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          FOOTER CTAs
          ══════════════════════════ */}
      <section className="bg-hall text-white py-32 md:py-48 overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 translate-x-20 -translate-y-20">
          <Globe className="w-[800px] h-[800px] stroke-[1]" />
        </div>
        
        <div className="container mx-auto px-5 md:px-8 max-w-4xl text-center relative z-10">
          <h2 className="display-caps text-6xl md:text-9xl mb-12 leading-[0.8] tracking-tighter">
            Build The <br />Future <span className="text-brass">Together.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Ticket href="/partners" tone="stamp" className="px-16 text-lg notch-tl">
              Partner with us
            </Ticket>
            <Ticket href="/membership" tone="outline" className="border-white/40 text-white hover:bg-white/10 px-16 text-lg">
              Membership Entry
            </Ticket>
          </div>
        </div>
      </section>
    </div>
  );
}