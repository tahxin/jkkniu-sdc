import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";
import { PageBanner } from "@/components/world/PageBanner";
import { Ticket } from "@/components/world/Ticket";

const benefits = [
  {
    title: "Network with 500+ members",
    description:
      "Connect with a thriving community of students, alumni, and professionals across disciplines.",
  },
  {
    title: "Access exclusive workshops",
    description:
      "Attend hands-on workshops, seminars, and boot camps led by industry experts and senior members.",
  },
  {
    title: "Industry connections",
    description:
      "Meet recruiters, attend company visits, and gain real-world exposure that bridges campus and career.",
  },
  {
    title: "Leadership opportunities",
    description:
      "Take on executive roles, lead projects, and build the soft skills that define tomorrow's leaders.",
  },
];

const generalBenefits = [
  "Access to all club events & seminars",
  "Club community Discord & forum access",
  "Monthly newsletter & resources",
  "Participation in hackathons & contests",
  "Official JKKNIU-SDC membership certificate",
];

const executiveBenefits = [
  "Everything in General Membership",
  "Voting rights & committee participation",
  "Exclusive leadership training sessions",
  "Priority workshop & bootcamp seats",
  "Direct mentorship from senior executives",
  "Featured profile on the club website",
  "Co-lead club projects & initiatives",
];

const faqs = [
  {
    question: "Who can apply for membership?",
    answer:
      "Any currently enrolled student of Jatiya Kabi Kazi Nazrul Islam University (JKKNIU) is eligible to apply for General Membership, regardless of department or year.",
  },
  {
    question: "Is there a membership fee?",
    answer:
      "General Membership is completely free. Executive Membership is by selection based on dedication, skill, and contribution to the club — there is no monetary fee for either tier.",
  },
  {
    question: "How are Executive Members selected?",
    answer:
      "Executive Members are selected by the current committee through a review process that evaluates your application, activity in the club, and demonstrated leadership or technical skills.",
  },
  {
    question: "When does the membership cycle run?",
    answer:
      "Membership applications are typically open at the start of each academic semester. Once you apply, you will receive a confirmation email with next steps within 7 working days.",
  },
];

const inputClass =
  "h-11 w-full rounded-md border border-input bg-cream px-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-stamp/40 focus:border-stamp transition";

export default function MembershipPage() {
  return (
    <main className="min-h-screen">
      <PageBanner
        title="Join JKKNIU-SDC"
        intro="Become part of a community of students shaping themselves into the professionals Bangladesh needs. General membership is free and open to every enrolled JKKNIU student."
        tone="hall"
        actions={
          <>
            <Ticket href="#apply" tone="cream" notch="var(--hall)">
              Apply now
            </Ticket>
            <Ticket href="#tiers" tone="outline" notch="var(--hall)">
              View tiers
            </Ticket>
          </>
        }
      />

      {/* Why join */}
      <section className="px-5 md:px-8 py-20 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <h2 className="display-caps text-3xl md:text-4xl mb-10 max-w-lg">
            What membership unlocks.
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-14">
            {benefits.map(({ title, description }, i) => (
              <div key={title} className="program-row py-6">
                <p className="display-caps text-[15px] text-stamp mb-2 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-bold text-[17px] mb-1.5">{title}</h3>
                <p className="text-[14px] text-muted-foreground leading-[1.65]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section id="tiers" className="px-5 md:px-8 py-20 md:py-24 bg-secondary/60 border-y-[3px] border-ink scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <h2 className="display-caps text-3xl md:text-4xl mb-10">Membership tiers</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* General */}
            <div className="bg-card border-2 border-ink p-8 flex flex-col">
              <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-3">
                General
              </p>
              <h3 className="display-caps text-3xl mb-2">General member</h3>
              <p className="display-caps text-4xl text-hall mt-3">
                Free
                <span className="font-sans font-semibold text-[13px] tracking-[0.08em] uppercase text-muted-foreground ml-2">
                  per semester
                </span>
              </p>
              <p className="text-[13.5px] text-muted-foreground mt-3 mb-8">
                Open to all enrolled JKKNIU students.
              </p>
              <ul className="space-y-3.5 mb-10 flex-1">
                {generalBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[14px]">
                    <Check className="shrink-0 mt-0.5 h-4 w-4 text-hall" />
                    {b}
                  </li>
                ))}
              </ul>
              <Ticket href="#apply" tone="ink" notch="var(--card)" className="self-start">
                Apply as general member
              </Ticket>
            </div>

            {/* Executive */}
            <div className="bg-ink text-cream p-8 flex flex-col relative">
              <span className="absolute top-5 right-5 stamp-chip text-brass">
                Most sought
              </span>
              <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-cream/50 mb-3">
                Executive
              </p>
              <h3 className="display-caps text-3xl mb-2">Executive member</h3>
              <p className="display-caps text-4xl text-brass mt-3">By selection</p>
              <p className="text-[13.5px] text-cream/60 mt-3 mb-8">
                For committed members ready to lead.
              </p>
              <ul className="space-y-3.5 mb-10 flex-1">
                {executiveBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[14px]">
                    <Check className="shrink-0 mt-0.5 h-4 w-4 text-brass" />
                    {b}
                  </li>
                ))}
              </ul>
              <Ticket href="#apply" tone="stamp" notch="var(--ink)" className="self-start">
                Apply as executive member
              </Ticket>
            </div>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="px-5 md:px-8 py-20 md:py-24 scroll-mt-24">
        <div className="container mx-auto max-w-2xl">
          <h2 className="display-caps text-3xl md:text-4xl mb-3">Apply for membership</h2>
          <p className="text-[14.5px] text-muted-foreground mb-10">
            Fill in the form below and our team will get back to you within 7
            working days.
          </p>

          <div className="bg-card border-2 border-ink p-7 sm:p-10">
            <form className="space-y-5" action="#" method="POST">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fullName" className="text-[13px] font-bold uppercase tracking-[0.06em]">
                  Full name <span className="text-stamp">*</span>
                </label>
                <input id="fullName" name="fullName" type="text" required placeholder="e.g. Shahjalal Ahmed Nishat" className={inputClass} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="studentId" className="text-[13px] font-bold uppercase tracking-[0.06em]">
                  Student ID <span className="text-stamp">*</span>
                </label>
                <input id="studentId" name="studentId" type="text" required placeholder="e.g. 2021-CSE-001" className={inputClass} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="department" className="text-[13px] font-bold uppercase tracking-[0.06em]">
                  Department <span className="text-stamp">*</span>
                </label>
                <select id="department" name="department" required className={`${inputClass} appearance-none cursor-pointer`}>
                  <option value="" disabled>Select your department</option>
                  <option>Computer Science &amp; Engineering</option>
                  <option>Electrical &amp; Electronic Engineering</option>
                  <option>Mathematics</option>
                  <option>Physics</option>
                  <option>Chemistry</option>
                  <option>English</option>
                  <option>Economics</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="yearSemester" className="text-[13px] font-bold uppercase tracking-[0.06em]">
                  Year / Semester <span className="text-stamp">*</span>
                </label>
                <select id="yearSemester" name="yearSemester" required className={`${inputClass} appearance-none cursor-pointer`}>
                  <option value="" disabled>Select your year / semester</option>
                  <option>1st Year — 1st Semester</option>
                  <option>1st Year — 2nd Semester</option>
                  <option>2nd Year — 1st Semester</option>
                  <option>2nd Year — 2nd Semester</option>
                  <option>3rd Year — 1st Semester</option>
                  <option>3rd Year — 2nd Semester</option>
                  <option>4th Year — 1st Semester</option>
                  <option>4th Year — 2nd Semester</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[13px] font-bold uppercase tracking-[0.06em]">
                  Email address <span className="text-stamp">*</span>
                </label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-[13px] font-bold uppercase tracking-[0.06em]">
                  Phone number <span className="text-stamp">*</span>
                </label>
                <input id="phone" name="phone" type="tel" required placeholder="+880 1XXX-XXXXXX" className={inputClass} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="motivation" className="text-[13px] font-bold uppercase tracking-[0.06em]">
                  Why do you want to join JKKNIU-SDC? <span className="text-stamp">*</span>
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  required
                  rows={5}
                  placeholder="Tell us about your motivation, skills, and what you hope to contribute…"
                  className="w-full rounded-md border border-input bg-cream px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-stamp/40 focus:border-stamp transition resize-none"
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <p className="text-[13px] font-bold uppercase tracking-[0.06em]">
                  Membership type <span className="text-stamp">*</span>
                </p>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="membershipType" value="general" defaultChecked className="accent-stamp w-4 h-4" />
                  <span className="text-[14px]">General Member</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="membershipType" value="executive" className="accent-stamp w-4 h-4" />
                  <span className="text-[14px]">Executive Member</span>
                </label>
              </div>

              <button
                type="submit"
                className="stub w-full inline-flex touch-target items-center justify-center bg-stamp text-white text-[14px] font-bold uppercase tracking-[0.08em] px-8 py-3.5 hover:brightness-110 transition-[filter] mt-2"
                style={{ ["--notch" as string]: "var(--card)" }}
              >
                Submit application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 md:px-8 pb-20 md:pb-24">
        <div className="container mx-auto max-w-3xl">
          <h2 className="display-caps text-3xl md:text-4xl mb-10">Questions, answered</h2>
          <div className="border-t-2 border-ink">
            {faqs.map((faq, i) => (
              <details key={faq.question} className="program-row group py-5" open={i === 0}>
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-bold text-[16px]">{faq.question}</span>
                  <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-3 text-[14px] text-muted-foreground leading-[1.7] max-w-[65ch]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
