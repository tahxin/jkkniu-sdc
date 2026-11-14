import { TrendingUp, Users, Globe } from "lucide-react";
import { PageBanner } from "@/components/world/PageBanner";
import { Ticket } from "@/components/world/Ticket";

/** Real MoU partners, as named on the club's record. */
const MOU_PARTNERS = [
  "AKIJ Resource",
  "Rise Above All",
  "AKIJ iBOS",
  "Excellence Bangladesh",
  "The Business Standard",
  "US-Bangla Airlines",
];

/** Supporters of BizCase 2026, the flagship competition. */
const BIZCASE_SUPPORTERS = ["SR Dream IT", "US-Bangla", "TBS"];

const BENEFITS = [
  {
    icon: TrendingUp,
    title: "Brand exposure",
    desc: "Reach 500+ active students and 2,500+ alumni across Bangladesh's growing professional community.",
  },
  {
    icon: Users,
    title: "Talent pipeline",
    desc: "Connect directly with top students for internships and full-time roles — the pipeline our job fairs and competitions are built to open.",
  },
  {
    icon: Globe,
    title: "Community impact",
    desc: "Contribute to Bangladesh's next generation of skilled professionals and demonstrate your CSR commitment on campus.",
  },
];

const inputClass =
  "h-12 w-full rounded-md border border-input bg-cream px-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-stamp/40 focus:border-stamp transition";

export default function PartnersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner
        title="Partners & sponsors"
        intro="We collaborate with leading companies and organisations to bring real-world opportunities to our students. Together, we build a stronger professional ecosystem in Bangladesh."
        tone="ink"
        actions={
          <Ticket href="#become-partner" tone="stamp" notch="var(--ink)">
            Become a partner
          </Ticket>
        }
      />

      {/* Partners of record */}
      <section className="px-5 md:px-8 py-20 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <h2 className="display-caps text-3xl md:text-4xl mb-3">Partners of record</h2>
          <p className="text-[14.5px] text-muted-foreground max-w-[65ch] mb-10">
            Organisations we have proudly collaborated with — MoUs signed to
            pave the way for youth skill development, research, and innovation.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t-2 border-ink">
            {MOU_PARTNERS.map((name, i) => (
              <div
                key={name}
                className="border-b border-r border-paper-line px-6 py-7 [&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
              >
                <p className="text-[10px] font-bold tracking-[0.24em] uppercase text-muted-foreground mb-2 tabular-nums">
                  MoU {String(i + 1).padStart(2, "0")}
                </p>
                <p className="display-caps text-[21px]">{name}</p>
              </div>
            ))}
          </div>

          {/* BizCase supporters */}
          <div className="mt-10 border-t-2 border-ink pt-8">
            <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-hall mb-4">
              BizCase 2026 — supported by
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-3">
              {BIZCASE_SUPPORTERS.map((name) => (
                <p key={name} className="display-caps text-[20px] text-foreground/80">
                  {name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="px-5 md:px-8 py-20 md:py-24 bg-secondary/60 border-y-[3px] border-ink">
        <div className="container mx-auto max-w-6xl">
          <h2 className="display-caps text-3xl md:text-4xl mb-10">Why partner with us?</h2>
          <div className="grid md:grid-cols-3 gap-x-14">
            {BENEFITS.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="program-row py-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="display-caps text-[15px] text-stamp tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="h-5 w-5 text-hall" />
                </div>
                <h3 className="font-bold text-[17px] mb-2">{title}</h3>
                <p className="text-[14px] text-muted-foreground leading-[1.65]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section id="become-partner" className="px-5 md:px-8 py-20 md:py-24 scroll-mt-24">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card border-2 border-ink p-7 sm:p-12">
            <h2 className="display-caps text-3xl md:text-4xl mb-3">Become a partner</h2>
            <p className="text-[14.5px] text-muted-foreground leading-[1.7] mb-10 max-w-[60ch]">
              Fill out the form below and our partnership team will get back to
              you within 2 business days.
            </p>

            <form method="POST" className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="p-name" className="text-[13px] font-bold uppercase tracking-[0.06em]">
                    Your name
                  </label>
                  <input id="p-name" name="name" type="text" placeholder="Full name" className={inputClass} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="p-company" className="text-[13px] font-bold uppercase tracking-[0.06em]">
                    Company
                  </label>
                  <input id="p-company" name="company" type="text" placeholder="Company name" className={inputClass} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="p-email" className="text-[13px] font-bold uppercase tracking-[0.06em]">
                  Email address
                </label>
                <input id="p-email" name="email" type="email" placeholder="you@company.com" className={inputClass} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="p-message" className="text-[13px] font-bold uppercase tracking-[0.06em]">
                  Message
                </label>
                <textarea
                  id="p-message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your partnership goals…"
                  className="w-full rounded-md border border-input bg-cream px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-stamp/40 focus:border-stamp transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="stub self-start inline-flex touch-target items-center bg-stamp text-white text-[14px] font-bold uppercase tracking-[0.08em] px-8 py-3.5 hover:brightness-110 transition-[filter]"
                style={{ ["--notch" as string]: "var(--card)" }}
              >
                Submit enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
