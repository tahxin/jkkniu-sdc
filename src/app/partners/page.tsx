import { TrendingUp, Users, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PARTNERS = {
  platinum: [
    { name: "TechVentures BD", initial: "T", color: "#31A1DB" },
    { name: "InnovateBD",      initial: "I", color: "#1C6FA0" },
  ],
  gold: [
    { name: "StartupHub",  initial: "S", color: "#F59E0B" },
    { name: "CodeLab",     initial: "C", color: "#10B981" },
    { name: "NexGen",      initial: "N", color: "#8B5CF6" },
  ],
  silver: [
    { name: "DigiSoft",   initial: "D", color: "#6B7280" },
    { name: "FutureTech", initial: "F", color: "#EC4899" },
    { name: "ByteForge",  initial: "B", color: "#14B8A6" },
    { name: "CloudPeak",  initial: "C", color: "#F97316" },
  ],
};

const BENEFITS = [
  {
    icon: TrendingUp,
    title: "Brand Exposure",
    desc: "Reach 500+ active students and 2,500+ alumni across Bangladesh's growing tech community.",
  },
  {
    icon: Users,
    title: "Talent Pipeline",
    desc: "Connect directly with top engineering and business students for internships and full-time roles.",
  },
  {
    icon: Globe,
    title: "Community Impact",
    desc: "Contribute to Bangladesh's next generation of innovators and demonstrate your CSR commitment.",
  },
];

function LogoCard({ name, initial, color }: { name: string; initial: string; color: string }) {
  return (
    <div className="bg-white border border-border rounded-2xl p-8 flex flex-col items-center justify-center h-32 gap-3 hover:border-primary/30 hover:shadow-md transition-all">
      <div
        className="h-12 w-12 rounded-xl flex items-center justify-center text-white font-bold text-xl"
        style={{ backgroundColor: color }}
      >
        {initial}
      </div>
      <span className="text-sm font-semibold text-foreground text-center">{name}</span>
    </div>
  );
}

function TierBadge({ label, color }: { label: string; color: string }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      <span
        className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-white"
        style={{ backgroundColor: color }}
      >
        {label}
      </span>
    </div>
  );
}

export default function PartnersPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section
        className="pt-24 pb-16 px-5 text-center"
        style={{ background: "linear-gradient(180deg, #EAF5FC 0%, #FFFFFF 100%)" }}
      >
        <div className="container mx-auto max-w-3xl">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-primary mb-4">
            Industry Collaboration
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            Partners &amp; Sponsors
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
            We collaborate with leading companies and organisations to bring real-world opportunities to our students. Together, we build a stronger tech ecosystem in Bangladesh.
          </p>
          <Button
            className="h-12 px-8 rounded-2xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            render={<Link href="#become-partner" />}
          >
            Become a Partner
          </Button>
        </div>
      </section>

      {/* Platinum Tier */}
      <section className="px-5 py-16 bg-white">
        <div className="container mx-auto max-w-4xl">
          <TierBadge label="Platinum" color="#31A1DB" />
          <h2 className="text-2xl font-bold mb-8">Platinum Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PARTNERS.platinum.map((p) => (
              <LogoCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Gold Tier */}
      <section className="px-5 py-16 bg-secondary/30 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <TierBadge label="Gold" color="#D97706" />
          <h2 className="text-2xl font-bold mb-8">Gold Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {PARTNERS.gold.map((p) => (
              <LogoCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Silver Tier */}
      <section className="px-5 py-16 bg-white border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <TierBadge label="Silver" color="#6B7280" />
          <h2 className="text-2xl font-bold mb-8">Silver Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PARTNERS.silver.map((p) => (
              <LogoCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="px-5 py-16 md:py-24 bg-secondary/30 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-primary mb-3">Benefits</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Why Partner With Us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner Form */}
      <section id="become-partner" className="px-5 py-16 md:py-24 bg-white border-t border-border">
        <div className="container mx-auto max-w-2xl">
          <div
            className="rounded-3xl overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1C6FA0 0%, #31A1DB 100%)" }}
          >
            <div className="p-8 sm:p-12">
              <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-white/70 mb-3">
                Partnership Enquiry
              </span>
              <h2 className="text-3xl font-bold text-white mb-2">Become a Partner</h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Fill out the form below and our partnership team will get back to you within 2 business days.
              </p>

              <form method="POST" className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-white/90">Your Name</label>
                    <input
                      type="text"
                      placeholder="Full name"
                      className="h-12 rounded-xl px-4 bg-white/15 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-white/90">Company</label>
                    <input
                      type="text"
                      placeholder="Company name"
                      className="h-12 rounded-xl px-4 bg-white/15 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 transition"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-white/90">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="h-12 rounded-xl px-4 bg-white/15 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 transition"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-white/90">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your partnership goals..."
                    className="rounded-xl px-4 py-3 bg-white/15 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 h-12 w-full rounded-2xl bg-white text-primary font-semibold text-base hover:bg-white/90 active:scale-[0.98] transition-all"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
