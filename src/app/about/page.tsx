import { PageBanner } from "@/components/world/PageBanner";
import { Ticket } from "@/components/world/Ticket";
import { Target, Eye, ShieldCheck, Award, Users } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col dossier-grid">
      <PageBanner
        title="Our Institution."
        subtitle="The history, mission, and the people behind JKKNIU's premier skill development platform."
      />

      {/* ══════════════════════════
          THE HISTORY / GENESIS
          ══════════════════════════ */}
      <section className="px-5 md:px-8 py-24 md:py-32 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-start">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="stamp-chip text-hall">Foundation</span>
                <span className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest">March 13, 2018</span>
              </div>
              <h2 className="display-caps text-5xl md:text-8xl mb-10 leading-[0.85]">
                Bridging The <br />Campus & <br /><span className="text-hall">Corporate.</span>
              </h2>
              <div className="space-y-6 text-[1.1rem] leading-[1.8] text-muted-foreground max-w-2xl">
                <p>
                  Established in 2018 at Jatiya Kabi Kazi Nazrul Islam University, 
                  the Skill Development Club (SDC) was founded with a singular purpose: 
                  to eliminate the friction between academic theory and real-world corporate expectations.
                </p>
                <p>
                  We recognized that while the university provides the fundamental knowledge, 
                  the fast-paced global economy demands specialized soft skills, analytical thinking, 
                  and a deep understanding of corporate culture. SDC was built to provide that bridge.
                </p>
                <p>
                  Over the years, we have evolved from a small student group into a national-scale 
                  institution, hosting some of the country&apos;s most prestigious business case 
                  competitions and career fairs.
                </p>
              </div>
            </div>

            <div className="border-[3px] border-ink p-10 bg-cream sticky top-24">
              <h3 className="display-caps text-2xl mb-8 border-b-2 border-ink pb-4">Key Milestones</h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <span className="font-display text-3xl text-stamp opacity-30">01</span>
                  <div>
                    <p className="font-bold text-[15px] mb-1">Founding Year</p>
                    <p className="text-[13px] text-muted-foreground">March 13, 2018 at JKKNIU campus.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="font-display text-3xl text-hall opacity-30">02</span>
                  <div>
                    <p className="font-bold text-[15px] mb-1">BizCase 2020</p>
                    <p className="text-[13px] text-muted-foreground">370+ teams from 65+ universities nationwide.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="font-display text-3xl text-brass opacity-30">03</span>
                  <div>
                    <p className="font-bold text-[15px] mb-1">MoU Network</p>
                    <p className="text-[13px] text-muted-foreground">Strategic alliances with AKIJ, TBS, and US-Bangla.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          MISSION & VISION
          ══════════════════════════ */}
      <section className="px-5 md:px-8 py-24 md:py-40 bg-ink text-white">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-20">
          <div className="border-l-4 border-hall pl-10">
            <Target className="h-10 w-10 text-hall mb-8" />
            <h2 className="display-caps text-4xl md:text-6xl mb-6">The Mission.</h2>
            <p className="text-white/60 text-[1.1rem] leading-[1.8]">
              To transform every student at JKKNIU into a highly skilled, expert, and adept human resource 
              ready to contribute their excellence to the global economy. We provide the tools, 
              network, and platform required to achieve professional mastery.
            </p>
          </div>
          <div className="border-l-4 border-stamp pl-10">
            <Eye className="h-10 w-10 text-stamp mb-8" />
            <h2 className="display-caps text-4xl md:text-6xl mb-6">The Vision.</h2>
            <p className="text-white/60 text-[1.1rem] leading-[1.8]">
              To become the leading institution in Bangladesh for student skill development, 
              setting the gold standard for how university clubs can drive national economic 
              growth by producing world-class professionals.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          CORE VALUES
          ══════════════════════════ */}
      <section className="px-5 md:px-8 py-24 md:py-40 bg-white">
        <div className="container mx-auto max-w-6xl text-center mb-20">
          <h2 className="display-caps text-5xl md:text-7xl mb-6">The SDC Standard.</h2>
          <p className="text-muted-foreground uppercase tracking-[0.2em] font-bold text-[13px]">Our Operating Principles</p>
        </div>

        <div className="container mx-auto max-w-6xl grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-paper-line border-2 border-ink">
          {[
            { icon: ShieldCheck, title: "Integrity", desc: "Highest standards of ethics in all our competitions and dealings." },
            { icon: Award, title: "Excellence", desc: "Never settling for average; pushing the boundaries of student achievement." },
            { icon: Users, title: "Inclusivity", desc: "Open to every student at JKKNIU who has the hunger to learn." },
            { icon: Target, title: "Outcome-Driven", desc: "We measure success by the career placements and growth of our members." },
          ].map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="bg-white p-10 group hover:bg-cream transition-colors">
                <Icon className="h-8 w-8 text-hall mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-[18px] mb-3">{v.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="container mx-auto max-w-6xl mt-24 text-center">
          <h3 className="display-caps text-3xl md:text-4xl mb-10">Ready to contribute to our story?</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Ticket href="/membership" tone="stamp" className="px-16 notch-tl">Join SDC</Ticket>
            <Ticket href="/partners" tone="outline" className="px-16">Partner with us</Ticket>
          </div>
        </div>
      </section>
    </div>
  );
}