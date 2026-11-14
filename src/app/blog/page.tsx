import { PageBanner } from "@/components/world/PageBanner";

const POSTS = [
  {
    title: "Navigating the Corporate Transition: Lessons from JKKNIU-SDC",
    date: "November 12, 2026",
    category: "Career",
    readTime: "4 min read",
    excerpt: "How our alumni successfully transition from campus problem-solving to corporate leadership roles across Bangladesh.",
  },
  {
    title: "BizCase 2026: What to Expect from Our Flagship Competition",
    date: "October 28, 2026",
    category: "Competitions",
    readTime: "3 min read",
    excerpt: "A comprehensive guide to the 1 Lakh BDT prize pool case competition, judging criteria, and registration timelines.",
  },
  {
    title: "The Power of MoUs: Building Sustainable Industry Partnerships",
    date: "September 15, 2026",
    category: "Alliances",
    readTime: "5 min read",
    excerpt: "Behind the scenes of our strategic alliances with AKIJ, The Business Standard, and US-Bangla Airlines.",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col dossier-grid">
      <PageBanner
        title="Dispatches & Insights."
        intro="Articles, announcements, and thought leadership from the JKKNIU-SDC community."
        tone="hall"
      />

      <section className="px-5 md:px-8 py-24 md:py-32 bg-white">
        <div className="container mx-auto max-w-4xl space-y-12">
          {POSTS.map((post) => (
            <article key={post.title} className="border-2 border-ink p-8 md:p-10 group hover:shadow-[8px_8px_0_0_#101010] transition-all bg-card">
              <div className="flex flex-wrap items-center gap-4 mb-4 text-[12px] font-bold tracking-widest text-muted-foreground uppercase">
                <span className="text-stamp">{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="display-caps text-3xl md:text-4xl mb-4 group-hover:text-hall transition-colors">{post.title}</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-ink group-hover:text-stamp transition-colors">
                Read dispatch →
              </span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}