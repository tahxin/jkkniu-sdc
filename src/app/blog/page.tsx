import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageBanner } from "@/components/world/PageBanner";
import { Ticket } from "@/components/world/Ticket";

// ─── Data (factual, unchanged) ────────────────────────────────────────────────

const featuredPost = {
  category: "Event Recap",
  date: "July 15, 2026",
  title: "Recap: Tech Summit 2025 — Our Biggest Event Yet",
  excerpt:
    "More than 400 students, industry professionals, and faculty gathered for JKKNIU-SDC's annual Tech Summit. From keynote speeches to live hackathon rounds, here's everything that happened over those two unforgettable days.",
  author: "Aktab Uddin Sarwar",
  authorRole: "President, JKKNIU-SDC",
  slug: "recap-tech-summit-2025",
};

const posts = [
  {
    category: "Career",
    date: "July 10, 2026",
    title: "How to Build Your Career Network as a University Student",
    excerpt:
      "Practical tips on LinkedIn, alumni outreach, and making the most of campus events to land your dream internship.",
    author: "Shahjalal Ahmed Nishat",
    slug: "build-career-network-university-student",
  },
  {
    category: "Competition",
    date: "June 28, 2026",
    title: "Hackathon Season 3: Winners and Highlights",
    excerpt:
      "Team Quantum claimed the top prize with an AI-powered crop disease detector. Relive the 36-hour sprint!",
    author: "SDC Editorial",
    slug: "hackathon-season-3-winners",
  },
  {
    category: "Club News",
    date: "June 10, 2026",
    title: "SDC Welcomes 2026-2027 Strategic Committee",
    excerpt:
      "Meet the newly elected committee members who will lead JKKNIU-SDC through an exciting new academic year.",
    author: "Aktab Uddin Sarwar",
    slug: "sdc-welcomes-2026-2027-committee",
  },
  {
    category: "Workshop",
    date: "May 22, 2026",
    title: "Workshop Recap: Web Development Bootcamp",
    excerpt:
      "Over three weekends, 60 participants went from zero to deploying their first full-stack Next.js applications.",
    author: "SDC Tech Wing",
    slug: "web-development-bootcamp-recap",
  },
  {
    category: "Alumni",
    date: "May 5, 2026",
    title: "Interview with Our Alumni: Life After JKKNIU-SDC",
    excerpt:
      "Three SDC alumni share how club projects, soft-skill workshops, and networking shaped their tech careers.",
    author: "SDC Editorial",
    slug: "alumni-interview-life-after-sdc",
  },
];

const inputClass =
  "h-12 w-full rounded-md border border-input bg-cream px-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-stamp/40 focus:border-stamp transition";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner
        title="Blog & news"
        intro="Stories, event recaps, tutorials, and announcements from the Skill Development Club of Jatiya Kabi Kazi Nazrul Islam University."
        tone="ink"
      />

      {/* ── Featured — the front page of the board ── */}
      <section className="px-5 md:px-8 py-20 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-stamp marker-diamond mb-5">
            Featured post
          </p>

          <article className="bg-card border-2 border-ink">
            <div className="p-7 sm:p-12">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="stamp-chip text-stamp">
                  {featuredPost.category}
                </span>
                <span className="text-[12px] font-semibold text-muted-foreground tabular-nums">
                  {featuredPost.date}
                </span>
              </div>

              <Link href={`/blog/${featuredPost.slug}`} className="group block">
                <h2 className="display-caps text-[clamp(2rem,5vw,3.5rem)] max-w-3xl group-hover:text-stamp transition-colors">
                  {featuredPost.title}
                </h2>
              </Link>

              <p className="mt-6 text-[15px] text-muted-foreground leading-[1.75] max-w-[65ch]">
                {featuredPost.excerpt}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <span
                    className="display-caps inline-flex items-center justify-center h-11 w-11 shrink-0 bg-hall text-cream text-[13px]"
                    aria-hidden="true"
                  >
                    {featuredPost.author
                      .split(" ")
                      .slice(0, 2)
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="text-[14px] font-bold leading-tight">
                      {featuredPost.author}
                    </p>
                    <p className="text-[12px] text-muted-foreground leading-tight mt-0.5">
                      {featuredPost.authorRole}
                    </p>
                  </div>
                </div>

                <Ticket href={`/blog/${featuredPost.slug}`} tone="stamp" notch="var(--card)">
                  Read article <ArrowUpRight className="h-4 w-4" />
                </Ticket>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── Latest posts — numbered press rows ── */}
      <section className="px-5 md:px-8 pb-24">
        <div className="container mx-auto max-w-6xl">
          <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-stamp marker-diamond mb-5">
            Latest posts
          </p>

          <div className="border-t-2 border-b-2 border-ink">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="program-row group flex items-start gap-4 md:gap-7 px-2 md:px-4 py-6 hover:bg-secondary/50 transition-colors"
              >
                <span className="display-caps text-[15px] text-muted-foreground/70 tabular-nums mt-1.5 shrink-0 w-7">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="stamp-chip text-hall">{post.category}</span>
                    <span className="text-[12px] font-semibold text-muted-foreground tabular-nums">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="display-caps text-[19px] md:text-[21px] mb-1.5 group-hover:text-stamp transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[13.5px] text-muted-foreground leading-normal line-clamp-2 max-w-3xl">
                    {post.excerpt}
                  </p>
                </div>
                <div className="hidden md:flex flex-col items-end gap-1 shrink-0 mt-1">
                  <span className="text-[12px] font-semibold text-muted-foreground">
                    {post.author}
                  </span>
                  <ArrowRight className="h-5 w-5 text-muted-foreground/40 group-hover:text-stamp transition-colors" />
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 mt-2 text-muted-foreground/40 group-hover:text-stamp transition-colors md:hidden" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="bg-hall text-cream border-y-[3px] border-ink">
        <div className="container mx-auto max-w-2xl px-5 md:px-8 py-20 md:py-24 text-center">
          <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-brass mb-4">
            Newsletter
          </p>
          <h2 className="display-caps text-[clamp(2.2rem,5.5vw,3.5rem)]">
            Stay updated
          </h2>
          <p className="mt-5 text-[15px] text-cream/70 leading-[1.75] max-w-md mx-auto">
            Get the latest SDC news, event announcements, and workshop invites
            delivered straight to your inbox.
          </p>

          <form className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 h-12 px-4 rounded-md border border-cream/30 bg-cream text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-brass/60 transition"
            />
            <button
              type="submit"
              className="h-12 px-7 bg-brass text-ink text-[14px] font-bold uppercase tracking-[0.08em] hover:brightness-110 transition-[filter] whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          <p className="text-[12px] text-cream/50 mt-5">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
