import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  return (
    <div className="flex flex-col">
      <section className="px-5 md:px-8 py-24 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <h1 className="display-caps text-4xl md:text-5xl mb-12">
            Blog.
          </h1>
          <div className="space-y-8">
            {[/* Insert blog posts array here */].map(({ date, title, excerpt }) => (
              <article key={title} className="border-t-2 border-b-2 border-ink py-8">
                <time className="text-[12px] font-semibold text-muted-foreground tabular-nums block mb-2">
                  {date}
                </time>
                <h2 className="display-caps text-[19px] md:text-[21px] mb-1.5">
                  {title}
                </h2>
                <p className="text-[13.5px] text-muted-foreground leading-normal">
                  {excerpt}
                </p>
                <Link
                  href="#"
                  className="group inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-stamp mt-4 hover:gap-3.5 transition-all"
                >
                  Read more <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}