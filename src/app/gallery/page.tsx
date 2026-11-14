import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageBanner } from "@/components/world/PageBanner";
import { Ticket } from "@/components/world/Ticket";

/**
 * Real event photography on file — the five images in /public/images.
 * No placeholders: only moments the club has actually documented.
 */
const WALL = [
  { src: "/images/cv-writing.jpg", alt: "CV Writing Competition", caption: "CV Writing Competition", note: "Competition", wide: true },
  { src: "/images/alumni-meetup.jpg", alt: "Alumni Meetup", caption: "Alumni Meetup", note: "Networking" },
  { src: "/images/mou-signing.jpg", alt: "MoU Signing with a corporate partner", caption: "MoU Signing", note: "Partnership" },
  { src: "/images/new-year-2026.jpg", alt: "Happy New Year 2026", caption: "New Year 2026", note: "Community" },
  { src: "/images/recap-2025.jpg", alt: "2025 Recap", caption: "2025 Recap", note: "The year in frames" },
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner
        title="The hall wall"
        intro="Every event the club runs leaves a record. Here are the moments from our competitions, meetups, and signings — the wall we hang them on."
        tone="hall"
      />

      {/* ── The wall — real event photography ── */}
      <section className="px-5 md:px-8 py-20 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {WALL.map(({ src, alt, caption, note, wide }, i) => (
              <figure
                key={src}
                className={`border-2 border-ink bg-card ${wide ? "md:col-span-2" : ""}`}
              >
                <div className="overflow-hidden">
                  <img
                    src={src}
                    alt={alt}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="w-full aspect-[4/3] object-cover hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <figcaption className="bg-ink text-cream px-4 py-2.5 flex items-center justify-between gap-3">
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase">
                    {caption}
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brass shrink-0 tabular-nums">
                    Exhibit {String(i + 1).padStart(2, "0")}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-14 border-t-2 border-ink pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="text-[14px] text-muted-foreground leading-[1.7] max-w-[60ch]">
              New photography is posted on our Facebook page after every event —
              from hackathon rounds to job fair floors.
            </p>
            <Ticket
              href="https://www.facebook.com/sdc.jkkniu/"
              external
              tone="stamp"
              notch="var(--cream)"
              className="shrink-0"
            >
              See more on Facebook <ArrowRight className="h-4 w-4" />
            </Ticket>
          </div>
        </div>
      </section>

      {/* ── Feature your moment ── */}
      <section className="px-5 md:px-8 pb-24">
        <div className="container mx-auto max-w-6xl border-t border-paper-line pt-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="display-caps text-2xl md:text-3xl max-w-lg">
              Member? Share your shots from the floor.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-stamp hover:gap-3.5 transition-all"
            >
              Contact the editorial team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
