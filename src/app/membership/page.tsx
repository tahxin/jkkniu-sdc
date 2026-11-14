import { PageBanner } from "@/components/world/PageBanner";
import { Ticket } from "@/components/world/Ticket";
import { Check, Info } from "lucide-react";

const TIERS = [
  {
    title: "General Member",
    desc: "Entry point for all JKKNIU students.",
    price: "Free",
    features: ["Access to workshops", "Event participation", "Networking access", "Club updates"],
    tone: "ink",
  },
  {
    title: "Core Executive",
    desc: "Leadership role for career growth.",
    price: "By Selection",
    features: ["Project management", "Corporate liaison", "Leadership training", "Priority recruitment"],
    tone: "hall",
  },
  {
    title: "Alumni Affiliate",
    desc: "Stay connected beyond graduation.",
    price: "Life-long",
    features: ["Mentorship opportunities", "Alumni meetups", "Exclusive access", "Networking portal"],
    tone: "ink",
  },
];

export default function Membership() {
  return (
    <div className="flex flex-col dossier-grid">
      <PageBanner
        title="Membership Entry."
        intro="Unlock access to professional development, competitive events, and our corporate network."
        tone="hall"
      />

      <section className="px-5 md:px-8 py-24 md:py-32 bg-white">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-3 gap-8">
          {TIERS.map((t) => (
            <div key={t.title} className={`border-2 border-ink p-10 flex flex-col ${t.tone === 'hall' ? 'bg-hall text-white' : 'bg-white'}`}>
              <h3 className={`display-caps text-3xl mb-2 ${t.tone === 'hall' ? 'text-white' : 'text-ink'}`}>{t.title}</h3>
              <p className={`text-[14px] mb-8 ${t.tone === 'hall' ? 'text-white/80' : 'text-muted-foreground'}`}>{t.desc}</p>
              <p className={`display-caps text-4xl mb-10 ${t.tone === 'hall' ? 'text-brass' : 'text-stamp'}`}>{t.price}</p>
              
              <ul className="space-y-4 mb-12 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[14px]">
                    <Check className={`h-4 w-4 ${t.tone === 'hall' ? 'text-white' : 'text-hall'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              
              <Ticket href="/login" tone={t.tone === 'hall' ? 'cream' : 'ink'} className="w-full">
                Apply Now
              </Ticket>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 md:px-8 py-20 md:py-24 border-t-2 border-ink bg-secondary/30">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-3 mb-10">
            <Info className="h-5 w-5 text-hall" />
            <h2 className="display-caps text-3xl">FAQ</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "Is membership free?", a: "General membership is free and open to all JKKNIU students." },
              { q: "When do you recruit?", a: "Recruitment takes place every academic semester. Watch our marquee for dates." },
              { q: "Are alumni welcome?", a: "Yes, our alumni network is a cornerstone of the club's impact." },
            ].map((faq) => (
              <div key={faq.q} className="p-6 border-2 border-ink bg-white">
                <h4 className="font-bold text-[16px] mb-2">{faq.q}</h4>
                <p className="text-[14px] text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}