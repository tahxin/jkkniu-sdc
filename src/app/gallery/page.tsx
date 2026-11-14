import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Gallery() {
  return (
    <div className="flex flex-col">
      <section className="px-5 md:px-8 py-24 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <h1 className="display-caps text-4xl md:text-5xl mb-12">
            Gallery.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              { src: "/images/cv-writing.jpg", alt: "CV Writing Competition", caption: "CV Writing Competition" },
              { src: "/images/alumni-meetup.jpg", alt: "Alumni Meetup", caption: "Alumni Meetup" },
              { src: "/images/mou-signing.jpg", alt: "MoU Signing", caption: "MoU Signing" },
              { src: "/images/new-year-2026.jpg", alt: "New Year 2026", caption: "New Year 2026" },
              { src: "/images/recap-2025.jpg", alt: "2025 Recap", caption: "2025 Recap" },
            ].map(({ src, alt, caption }) => (
              <figure key={src} className="border-2 border-ink bg-card">
                <div className="overflow-hidden">
                  <img
                    src={src}
                    alt={alt}
                    className="w-full aspect-[4/3] object-cover hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <figcaption className="bg-ink text-cream text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-2.5">
                  {caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}