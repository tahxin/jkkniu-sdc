import { TrendingUp, Users, Globe, Handshake, Target, BarChart, Award } from "lucide-react";
import { PageBanner } from "@/components/world/PageBanner";
import { Ticket } from "@/components/world/Ticket";

const MOU_PARTNERS = [
  { name: "AKIJ Resource", description: "Industrial conglomerate providing infrastructure and manufacturing pipelines." },
  { name: "Rise Above All", description: "Leadership development and motivation platform for student growth." },
  { name: "AKIJ iBOS", description: "Enterprise software solutions and digital transformation expertise." },
  { name: "Excellence Bangladesh", description: "Strategic workforce development and career placement firm." },
  { name: "The Business Standard", description: "National business daily providing industry insights and coverage." },
  { name: "US-Bangla Airlines", description: "Travel partner connecting JKKNIU students to the world." },
];

const BIZCASE_SUPPORTERS = ["SR Dream IT", "US-Bangla", "TBS"];

const BENEFITS = [
  {
    icon: TrendingUp,
    title: "Brand Equity",
    desc: "Position your brand at the center of JKKNIU—a leading public university. Gain visibility among 500+ elite student members and 2,500+ high-achieving alumni.",
  },
  {
    icon: Users,
    title: "Elite Talent Pipeline",
    desc: "Direct access to pre-screened, club-trained talent. JKKNIU-SDC members are trained in corporate communication, leadership, and analytical thinking.",
  },
  {
    icon: Globe,
    title: "Strategic Impact",
    desc: "Collaborate on national-level competitions like BizCase. Demonstrate corporate social responsibility by investing in the next generation of human resources.",
  },
  {
    icon: BarChart,
    title: "Data-Driven Reach",
    desc: "Leverage our event metrics for targeted recruitment. Our job fairs and competitions yield high engagement from students across the region.",
  },
];

export default function Partners() {
  return (
    <div className="flex flex-col dossier-grid">
      <PageBanner
        title="Corporate Alliances."
        subtitle="Bridging the gap between academic potential and corporate excellence."
      />

      {/* ══════════════════════════
          THE PARTNER VALUE PROPOSITION
          ══════════════════════════ */}
      <section className="px-5 md:px-8 py-24 md:py-32 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-[1fr_2px_1fr] gap-20 items-center">
            <div>
              <h2 className="display-caps text-5xl md:text-7xl mb-8 leading-none">
                A Strategic <br /><span className="text-hall">Investment.</span>
              </h2>
              <p className="text-[1.1rem] leading-[1.8] text-muted-foreground mb-10">
                JKKNIU-SDC is not just a student club; it is an incubator for Bangladesh&apos;s future corporate leaders. 
                Our partners gain more than visibility—they gain a seat at the table where the next generation of 
                talent is being shaped.
              </p>
              <Ticket href="/contact" tone="stamp" className="notch-tl px-12">
                Inquire for MoU
              </Ticket>
            </div>
            
            <div className="hidden lg:block bg-paper-line h-full w-[2px]"></div>

            <div className="grid sm:grid-cols-2 gap-10">
              {BENEFITS.map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.title} className="flex flex-col">
                    <div className="bg-secondary/50 w-12 h-12 flex items-center justify-center mb-6 border border-paper-line rotate-45">
                      <Icon className="h-6 w-6 text-hall -rotate-45" />
                    </div>
                    <h3 className="font-bold text-[18px] mb-3">{b.title}</h3>
                    <p className="text-[14px] text-muted-foreground leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          MoU PARTNERS BOARD
          ══════════════════════════ */}
      <section className="px-5 md:px-8 py-24 md:py-32 bg-ink text-white border-y-[3px] border-ink">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <p className="display-caps text-hall text-xl mb-4 tracking-widest">The Registry</p>
              <h2 className="display-caps text-5xl md:text-7xl">Signed Alliances.</h2>
            </div>
            <p className="max-w-xs text-white/50 text-[13px] font-medium leading-relaxed">
              We maintain active MoUs with Bangladesh&apos;s most influential organizations to facilitate knowledge exchange and career placement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {MOU_PARTNERS.map((partner) => (
              <div key={partner.name} className="bg-ink p-10 group hover:bg-hall/10 transition-colors">
                <Handshake className="h-6 w-6 text-hall mb-8 opacity-40 group-hover:opacity-100 transition-opacity" />
                <h3 className="display-caps text-2xl mb-4 group-hover:text-hall transition-colors">{partner.name}</h3>
                <p className="text-white/60 text-[14px] leading-relaxed mb-6">{partner.description}</p>
                <div className="h-1 w-10 bg-hall/30 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-white/10 flex flex-wrap items-center gap-12">
            <p className="display-caps text-[12px] text-event tracking-[0.3em]">BizCase 2026 Sponsors</p>
            <div className="flex items-center gap-10 opacity-60">
              {BIZCASE_SUPPORTERS.map(name => (
                <span key={name} className="font-bold text-lg tracking-tight">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          ENGAGEMENT MODELS
          ══════════════════════════ */}
      <section className="px-5 md:px-8 py-24 md:py-40 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-3 mb-10">
            <div className="h-px w-10 bg-paper-line"></div>
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-muted-foreground">How We Work</span>
            <div className="h-px w-10 bg-paper-line"></div>
          </div>
          <h2 className="display-caps text-5xl md:text-7xl mb-12">Flexible <br />Collaboration.</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="border-2 border-ink p-8">
              <h3 className="font-bold mb-4 flex items-center gap-2"><Target className="h-5 w-5 text-stamp" /> Recruitment</h3>
              <p className="text-[14px] text-muted-foreground">On-campus job fairs and priority access to our top 5% talent pool.</p>
            </div>
            <div className="border-2 border-ink p-8">
              <h3 className="font-bold mb-4 flex items-center gap-2"><Award className="h-5 w-5 text-brass" /> Branding</h3>
              <p className="text-[14px] text-muted-foreground">Named sponsorship for national competitions and visibility on all assets.</p>
            </div>
            <div className="border-2 border-ink p-8">
              <h3 className="font-bold mb-4 flex items-center gap-2"><Users className="h-5 w-5 text-hall" /> Training</h3>
              <p className="text-[14px] text-muted-foreground">Expert sessions and workshops led by your corporate professionals.</p>
            </div>
          </div>

          <div className="mt-24">
            <Ticket href="/contact" tone="stamp" className="notch-tl px-20 py-5 text-lg">
              Start The Conversation
            </Ticket>
          </div>
        </div>
      </section>
    </div>
  );
}