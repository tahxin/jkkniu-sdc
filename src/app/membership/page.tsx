import Link from "next/link";
import { BookOpen, Briefcase, Award, Users, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Data ────────────────────────────────────────────────────────────────────

const benefits = [
  {
    icon: Users,
    title: "Network with 500+ Members",
    description:
      "Connect with a thriving community of students, alumni, and tech enthusiasts across disciplines.",
  },
  {
    icon: BookOpen,
    title: "Access Exclusive Workshops",
    description:
      "Attend hands-on workshops, seminars, and boot camps led by industry experts and senior members.",
  },
  {
    icon: Briefcase,
    title: "Industry Connections",
    description:
      "Meet recruiters, attend company visits, and gain real-world exposure that bridges campus and career.",
  },
  {
    icon: Award,
    title: "Leadership Opportunities",
    description:
      "Take on executive roles, lead projects, and build the soft skills that define tomorrow's tech leaders.",
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* ── Hero ── */}
      <section className="bg-gradient-to-b from-[#EAF5FC] to-white pt-24 pb-16 px-5">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-4">
            Membership
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-5">
            Join JKKNIU-SDC
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Become part of a passionate community of developers, designers, and
            innovators shaping the future of technology at JKKNIU. Your journey
            starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#apply"
              className="inline-flex items-center justify-center h-12 px-7 rounded-2xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Apply Now
            </a>
            <Button
              variant="outline"
              render={<Link href="#tiers" />}
              className="h-12 px-7 rounded-2xl font-semibold text-sm"
            >
              View Tiers
            </Button>
          </div>
        </div>
      </section>

      {/* ── Why Join ── */}
      <section className="px-5 py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-3">
              Benefits
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Why Join Us?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Membership unlocks a wide range of opportunities to grow
              personally, professionally, and technically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white border border-border rounded-2xl p-6 flex gap-5 items-start"
              >
                <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Membership Tiers ── */}
      <section id="tiers" className="px-5 py-16 md:py-24 bg-[#EAF5FC]/40">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-3">
              Tiers
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Membership Tiers
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Start as a General Member and grow into an Executive role through
              dedication and contribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* General Member */}
            <div className="bg-white border-2 border-border rounded-2xl p-6 flex flex-col">
              <div className="mb-6">
                <p className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground mb-2">
                  General
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  General Member
                </h3>
                <p className="text-3xl font-bold text-gray-900 mt-3">
                  Free
                  <span className="text-base font-normal text-muted-foreground ml-1">
                    / semester
                  </span>
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Open to all enrolled JKKNIU students.
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {generalBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#apply"
                className="inline-flex items-center justify-center h-11 px-6 rounded-2xl border-2 border-primary text-primary font-semibold text-sm hover:bg-primary/5 transition-colors"
              >
                Apply as General Member
              </a>
            </div>

            {/* Executive Member */}
            <div className="bg-white border-2 border-primary rounded-2xl p-6 flex flex-col relative overflow-hidden">
              {/* Badge */}
              <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                Most Sought
              </span>

              <div className="mb-6">
                <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-2">
                  Executive
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  Executive Member
                </h3>
                <p className="text-3xl font-bold text-primary mt-3">
                  By Selection
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  For committed members ready to lead.
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {executiveBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#apply"
                className="inline-flex items-center justify-center h-11 px-6 rounded-2xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Apply as Executive Member
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Application Form ── */}
      <section id="apply" className="px-5 py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-3">
              Apply
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Apply for Membership
            </h2>
            <p className="mt-4 text-muted-foreground">
              Fill in the form below and our team will get back to you within 7
              working days.
            </p>
          </div>

          <div className="bg-white border border-border rounded-2xl p-6 sm:p-8">
            <form className="space-y-5" action="#" method="POST">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="fullName"
                  className="text-sm font-medium text-gray-700"
                >
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="e.g. Shahjalal Ahmed Nishat"
                  className="h-11 px-4 rounded-xl border border-border bg-white text-sm text-gray-900 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                />
              </div>

              {/* Student ID */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="studentId"
                  className="text-sm font-medium text-gray-700"
                >
                  Student ID <span className="text-primary">*</span>
                </label>
                <input
                  id="studentId"
                  name="studentId"
                  type="text"
                  required
                  placeholder="e.g. 2021-CSE-001"
                  className="h-11 px-4 rounded-xl border border-border bg-white text-sm text-gray-900 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                />
              </div>

              {/* Department */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="department"
                  className="text-sm font-medium text-gray-700"
                >
                  Department <span className="text-primary">*</span>
                </label>
                <select
                  id="department"
                  name="department"
                  required
                  className="h-11 px-4 rounded-xl border border-border bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition appearance-none"
                >
                  <option value="" disabled>
                    Select your department
                  </option>
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

              {/* Year / Semester */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="yearSemester"
                  className="text-sm font-medium text-gray-700"
                >
                  Year / Semester <span className="text-primary">*</span>
                </label>
                <select
                  id="yearSemester"
                  name="yearSemester"
                  required
                  className="h-11 px-4 rounded-xl border border-border bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition appearance-none"
                >
                  <option value="" disabled>
                    Select your year / semester
                  </option>
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

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="h-11 px-4 rounded-xl border border-border bg-white text-sm text-gray-900 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700"
                >
                  Phone Number <span className="text-primary">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+880 1XXX-XXXXXX"
                  className="h-11 px-4 rounded-xl border border-border bg-white text-sm text-gray-900 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                />
              </div>

              {/* Why join */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="motivation"
                  className="text-sm font-medium text-gray-700"
                >
                  Why do you want to join JKKNIU-SDC?{" "}
                  <span className="text-primary">*</span>
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  required
                  rows={5}
                  placeholder="Tell us about your motivation, skills, and what you hope to contribute…"
                  className="px-4 py-3 rounded-xl border border-border bg-white text-sm text-gray-900 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
                />
              </div>

              {/* Membership type */}
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-gray-700">
                  Membership Type <span className="text-primary">*</span>
                </p>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="membershipType"
                    value="general"
                    defaultChecked
                    className="accent-primary w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">General Member</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="membershipType"
                    value="executive"
                    className="accent-primary w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">
                    Executive Member{" "}
                    <span className="text-muted-foreground">(by selection)</span>
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full h-12 rounded-2xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors mt-2"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-5 py-16 md:py-24 bg-[#EAF5FC]/40">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white border border-border rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Footer Strip ── */}
      <section className="px-5 py-16 bg-primary">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to be part of something great?
          </h2>
          <p className="text-white/80 mb-8 text-sm sm:text-base">
            Join hundreds of students already building skills, friendships, and
            careers at JKKNIU-SDC.
          </p>
          <a
            href="#apply"
            className="inline-flex items-center justify-center h-12 px-8 rounded-2xl bg-white text-primary font-semibold text-sm hover:bg-white/90 transition-colors"
          >
            Apply Now — It&apos;s Free
          </a>
        </div>
      </section>
    </main>
  );
}
