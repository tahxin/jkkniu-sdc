import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Tag, Mail } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

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

// Gradient palette cycling for thumbnail variety
const thumbGradients = [
  "from-[#31A1DB]/20 via-[#31A1DB]/10 to-sky-50",
  "from-sky-200/40 via-[#31A1DB]/10 to-white",
  "from-[#31A1DB]/30 via-sky-100/30 to-sky-50",
  "from-indigo-100/60 via-sky-100/30 to-white",
  "from-[#31A1DB]/20 via-indigo-50/30 to-sky-50",
];

const thumbEmoji = ["💡", "🏆", "🎉", "🛠️", "🎓"];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* ── Hero ── */}
      <section className="bg-gradient-to-b from-[#EAF5FC] to-white pt-24 pb-16 px-5">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-3">
            JKKNIU-SDC
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Blog &amp; News
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Stories, event recaps, tutorials, and announcements from the
            Software Development Club of Jatiya Kabi Kazi Nazrul Islam
            University.
          </p>
        </div>
      </section>

      {/* ── Featured Post ── */}
      <section className="px-5 py-16 md:py-20">
        <div className="container mx-auto max-w-4xl">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-6">
            Featured Post
          </p>

          <article className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            {/* Thumbnail */}
            <div className="h-56 sm:h-72 bg-gradient-to-br from-[#31A1DB]/30 via-sky-100/40 to-[#EAF5FC] relative flex items-center justify-center">
              <span className="text-6xl sm:text-8xl select-none opacity-20">
                🚀
              </span>
              {/* Category badge */}
              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                <Tag size={11} />
                {featuredPost.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-primary" />
                  {featuredPost.date}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-3 leading-snug">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                {featuredPost.excerpt}
              </p>

              {/* Author + CTA */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <User size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {featuredPost.author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {featuredPost.authorRole}
                    </p>
                  </div>
                </div>

                <Button
                  className="rounded-full h-11 px-6 self-start sm:self-auto"
                  render={
                    <Link href={`/blog/${featuredPost.slug}`}>
                      Read Article
                    </Link>
                  }
                />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── Post Grid ── */}
      <section className="px-5 pb-16 md:pb-24">
        <div className="container mx-auto max-w-4xl">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-6">
            Latest Posts
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {posts.map((post, idx) => {
              // Last card spans 2 cols on sm when total count is odd
              const isLastOdd =
                idx === posts.length - 1 && posts.length % 2 !== 0;
              return (
                <article
                  key={post.slug}
                  className={`bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col${
                    isLastOdd ? " sm:col-span-2 md:col-span-1" : ""
                  }`}
                >
                  {/* Thumbnail */}
                  <div
                    className={`h-44 bg-gradient-to-br ${
                      thumbGradients[idx % thumbGradients.length]
                    } relative flex items-center justify-center shrink-0`}
                  >
                    <span className="text-4xl select-none opacity-20">
                      {thumbEmoji[idx]}
                    </span>
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full border border-primary/20">
                      <Tag size={10} />
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                      <Calendar size={12} className="text-primary" />
                      {post.date}
                    </div>

                    <h3 className="text-base font-bold text-gray-900 leading-snug mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Card footer */}
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <User size={12} className="text-primary" />
                        {post.author}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                      >
                        Read more
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Newsletter Signup ── */}
      <section className="px-5 py-16 md:py-24 bg-gradient-to-b from-[#EAF5FC] to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 mb-5">
            <Mail size={22} className="text-primary" />
          </div>
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-3">
            Newsletter
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Get the latest SDC news, event announcements, and workshop invites
            delivered straight to your inbox.
          </p>

          {/* Email input row */}
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 h-11 px-4 rounded-full border border-border bg-white text-sm text-gray-900 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
            />
            <button
              type="submit"
              className="h-11 px-6 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 active:scale-95 transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </main>
  );
}
