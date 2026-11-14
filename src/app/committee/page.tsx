import Link from "next/link";
import { Mail } from "lucide-react";
import { PageBanner } from "@/components/world/PageBanner";

const CURRENT_COMMITTEE = [
  { id: 1, name: "Aktab Uddin Sarwar", role: "President", email: "contact@jkkniu-sdc.edu", linkedin: "#" },
  { id: 2, name: "Shahjalal Ahmed Nishat", role: "Vice President", email: "contact@jkkniu-sdc.edu", linkedin: "#" },
  { id: 3, name: "Shahadat Hossain Monna", role: "General Secretary (Strategic)", email: "contact@jkkniu-sdc.edu", linkedin: "#" },
  { id: 4, name: "Md. Habibur Rahman", role: "General Secretary (Operation)", email: "contact@jkkniu-sdc.edu", linkedin: "#" },
  { id: 5, name: "Mst. Sifat Khanom", role: "Treasurer", email: "contact@jkkniu-sdc.edu", linkedin: "#" },
  { id: 6, name: "Asadur Rahman Robiul", role: "Joint Secretary", email: "contact@jkkniu-sdc.edu", linkedin: "#" },
  { id: 7, name: "Md. Abrar Hasan", role: "Organizing Secretary", email: "contact@jkkniu-sdc.edu", linkedin: "#" },
  { id: 8, name: "Md. Rabby Hossen", role: "Organizing Secretary", email: "contact@jkkniu-sdc.edu", linkedin: "#" },
];

const PREVIOUS_COMMITTEES = [
  {
    year: "2025–2026",
    members: [
      { name: "Md. Mostakim", role: "President" },
      { name: "Sadia Afrin Salvy", role: "Vice-President" },
      { name: "Samiul Islam", role: "Vice-President" },
      { name: "Mahmud Hasan", role: "Vice-President" },
      { name: "Belal Hasan Shawon", role: "General Secretary (Strategic)" },
      { name: "Mst. Moriyam Akter Tania", role: "General Secretary (Operations)" },
      { name: "Faizul Islam Nayem", role: "Treasurer" },
      { name: "Mahajabin Fariha", role: "Joint Secretary" },
      { name: "Rabea Akter Umi", role: "Joint Secretary" },
      { name: "Rijve Ahmed", role: "Organising Secretary" },
      { name: "Md Habibur Rahman", role: "Organising Secretary" },
    ],
  },
];

export default function CommitteePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner
        title="Executive committee"
        intro="The dedicated student leaders driving the club forward — elected every cycle under the club constitution."
        tone="hall"
      />

      {/* Current committee */}
      <section className="px-5 md:px-8 py-20 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-6 mb-12">
            <h2 className="display-caps text-3xl md:text-4xl">Current committee</h2>
            <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-stamp">
              2026–2027 session
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t-2 border-ink">
            {CURRENT_COMMITTEE.map((member) => (
              <div
                key={member.id}
                className="border-b border-r border-paper-line p-6 flex flex-col [&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
              >
                <span className="h-16 w-16 bg-ink text-cream display-caps flex items-center justify-center text-[20px] mb-5">
                  {member.name.split(" ").slice(-2).map((n) => n[0]).join("")}
                </span>
                <h3 className="font-bold text-[16px] leading-snug mb-1">{member.name}</h3>
                <p className="text-[12.5px] font-bold uppercase tracking-[0.08em] text-hall mb-5">
                  {member.role}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-paper-line pt-4">
                  <div className="flex gap-4">
                    <Link
                      href={member.linkedin}
                      className="text-muted-foreground hover:text-stamp transition-colors"
                    >
                      <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.378-1.122-2.5-2.5-2.5S12 12.122 12 13.5V19H9V9h3v1.515C12.861 9.558 14.076 9 15.5 9 17.985 9 20 11.015 20 13.5V19z" clipRule="evenodd" />
                      </svg>
                      <span className="sr-only">LinkedIn — {member.name}</span>
                    </Link>
                    <Link
                      href={`mailto:${member.email}`}
                      className="text-muted-foreground hover:text-stamp transition-colors"
                    >
                      <Mail className="h-4.5 w-4.5" />
                      <span className="sr-only">Email — {member.name}</span>
                    </Link>
                  </div>
                  <Link
                    href={`/profile/${member.id}`}
                    className="text-[12px] font-bold uppercase tracking-[0.08em] text-muted-foreground hover:text-stamp transition-colors"
                  >
                    Profile →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous committees archive */}
      <section className="px-5 md:px-8 py-20 md:py-24 bg-secondary/60 border-t-[3px] border-ink">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="display-caps text-3xl md:text-4xl">Previous committees</h2>
            <p className="text-[14px] text-muted-foreground mt-2">
              The historical record, kept open under the constitution.
            </p>
          </div>

          <div className="space-y-12">
            {PREVIOUS_COMMITTEES.map((committee) => (
              <div key={committee.year} className="border-t-2 border-ink pt-6">
                <h3 className="display-caps text-2xl text-stamp tabular-nums mb-8">
                  {committee.year}
                </h3>
                <div className="grid sm:grid-cols-2 gap-x-14">
                  {committee.members.map((member) => (
                    <div
                      key={member.name + member.role}
                      className="program-row py-3.5 flex items-baseline justify-between gap-4"
                    >
                      <p className="font-semibold text-[14.5px]">{member.name}</p>
                      <p className="text-[12px] text-muted-foreground text-right">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
