import { Download } from "lucide-react";
import { PageBanner } from "@/components/world/PageBanner";
import { Ticket } from "@/components/world/Ticket";

const FOUNDING_LEADERS = [
  { name: "Ibnul Haider Nakib", role: "Founding President" },
  { name: "Sohel Sadman Islam", role: "President (Job Fair 2023)" },
  { name: "Md. Abdul Awaul", role: "President (BizCase 2025)" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner
        title="About the club"
        intro="Our history, our mission, and the principles that guide a community of student leaders — on campus since March 13, 2018."
        tone="ink"
      />

      {/* Main content */}
      <section className="px-5 md:px-8 py-20 md:py-24">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-14">
          <div className="md:col-span-2 space-y-14">
            {/* History */}
            <div>
              <h2 className="display-caps text-3xl md:text-4xl mb-6">Our history</h2>
              <div className="max-w-[68ch] space-y-5 text-[1.02rem] leading-[1.8] text-foreground/85">
                <p>
                  Established on March 13, 2018, the Jatiya Kabi Kazi Nazrul
                  Islam University Skill Development Club (JKKNIU-SDC) was
                  founded with a singular vision: to bridge the gap between
                  academic theory and real-world corporate expectations.
                </p>
                <p>
                  What started as a small group of passionate students has
                  grown into a nationwide skill development movement. The club
                  organizes workshops, inter-university competitions, seminars,
                  and national-level events to transform students into expert,
                  adept human resources capable of contributing their
                  excellence anywhere in the world.
                </p>
              </div>
            </div>

            {/* Mission / Vision */}
            <div className="grid sm:grid-cols-2 gap-10">
              <div className="border-t-[3px] border-ink pt-7">
                <h3 className="display-caps text-2xl text-hall mb-4">Our mission</h3>
                <p className="text-[14.5px] text-muted-foreground leading-[1.75]">
                  To make students aware of how to become a valuable resource
                  and to provide them with specialized programs for skill
                  development. The ultimate objective is to produce adept and
                  expert human resources.
                </p>
              </div>
              <div className="border-t-[3px] border-ink pt-7">
                <h3 className="display-caps text-2xl text-hall mb-4">Our vision</h3>
                <p className="text-[14.5px] text-muted-foreground leading-[1.75]">
                  To ignite a widespread skill development movement that begins
                  at JKKNIU and expands across the entire country —
                  transforming the younger generation into expert human
                  resources dedicated to contributing to the nation&apos;s
                  development.
                </p>
              </div>
            </div>

            {/* Constitution */}
            <div className="border-t-2 border-ink pt-10">
              <h2 className="display-caps text-3xl md:text-4xl mb-4">Club constitution</h2>
              <p className="max-w-[65ch] text-[15px] text-muted-foreground leading-[1.75] mb-8">
                The club operates under a strict constitution that governs our
                operations, elections, and member responsibilities. We believe
                in complete transparency and accountability.
              </p>
              <Ticket href="/assets/constitution.pdf" tone="stamp" notch="var(--cream)" external>
                <Download className="h-4 w-4" />
                Download constitution PDF
              </Ticket>
            </div>
          </div>

          {/* Sidebar — leadership & alumni */}
          <aside className="space-y-8">
            <div className="bg-card border-2 border-ink p-7">
              <h3 className="display-caps text-xl mb-6">Historical leadership</h3>
              <ul className="space-y-5">
                {FOUNDING_LEADERS.map(({ name, role }) => (
                  <li key={name} className="flex items-center gap-4">
                    <span className="h-12 w-12 shrink-0 bg-hall text-cream display-caps flex items-center justify-center text-[14px]">
                      {name.split(" ").slice(-2).map((n) => n[0]).join("")}
                    </span>
                    <div>
                      <p className="font-bold text-[14.5px]">{name}</p>
                      <p className="text-[12.5px] text-muted-foreground">{role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border-2 border-ink p-7">
              <h3 className="display-caps text-xl mb-6">Alumni &amp; success stories</h3>
              <ul className="space-y-5">
                <li className="flex items-center gap-4">
                  <span className="h-12 w-12 shrink-0 bg-secondary border border-paper-line text-foreground/70 display-caps flex items-center justify-center text-[14px]">
                    FR
                  </span>
                  <div>
                    <p className="font-bold text-[14.5px]">Farjana Akter Rakhi</p>
                    <p className="text-[12.5px] text-muted-foreground">Successful corporate career</p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
