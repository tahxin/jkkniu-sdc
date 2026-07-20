import Link from "next/link";
import { Button } from "@/components/ui/button";

const galleryItems = [
  { id: 1,  label: "Tech Summit 2026",   year: 2026, gradient: "from-[#31A1DB] to-[#1a6fa3]",  rowSpan: false },
  { id: 2,  label: "Hackathon 2026",     year: 2026, gradient: "from-sky-400 to-sky-600",       rowSpan: false },
  { id: 3,  label: "Orientation 2026",   year: 2026, gradient: "from-indigo-400 to-indigo-600", rowSpan: true  },
  { id: 4,  label: "Workshop 2025",      year: 2025, gradient: "from-cyan-400 to-cyan-600",     rowSpan: false },
  { id: 5,  label: "Hackathon 2025",     year: 2025, gradient: "from-blue-400 to-blue-600",     rowSpan: false },
  { id: 6,  label: "Annual Fest 2025",   year: 2025, gradient: "from-sky-500 to-indigo-500",    rowSpan: true  },
  { id: 7,  label: "Seminar 2025",       year: 2025, gradient: "from-[#31A1DB] to-indigo-500",  rowSpan: false },
  { id: 8,  label: "Robotics Expo 2024", year: 2024, gradient: "from-indigo-500 to-blue-700",   rowSpan: false },
  { id: 9,  label: "Code Camp 2024",     year: 2024, gradient: "from-sky-300 to-blue-500",      rowSpan: true  },
  { id: 10, label: "CTF Challenge 2024", year: 2024, gradient: "from-blue-500 to-cyan-600",     rowSpan: false },
  { id: 11, label: "Inauguration 2023",  year: 2023, gradient: "from-indigo-300 to-indigo-600", rowSpan: false },
  { id: 12, label: "Founding Day 2023",  year: 2023, gradient: "from-sky-400 to-indigo-400",    rowSpan: true  },
];

const years = [2026, 2025, 2024, 2023];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#EAF5FC] to-white pt-24 pb-14 px-5">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-3">
            JKKNIU-SDC
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Gallery
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Moments from our events and activities
          </p>
        </div>
      </section>

      {/* Year Filter Tabs */}
      <section className="px-5 pb-8">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              className="h-11 px-5 rounded-full bg-primary text-white text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-pressed="true"
            >
              All
            </button>
            {years.map((year) => (
              <button
                key={year}
                className="h-11 px-5 rounded-full border border-border bg-white text-gray-700 text-sm font-semibold hover:bg-[#EAF5FC] hover:border-primary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-pressed="false"
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="px-5 pb-16 md:pb-24">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-auto">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className={`group relative rounded-xl overflow-hidden cursor-pointer${item.rowSpan ? " row-span-2" : ""}`}
              >
                {/* Colored Placeholder */}
                <div
                  className={`bg-gradient-to-br ${item.gradient} w-full${
                    item.rowSpan
                      ? " min-h-[200px] h-full aspect-auto"
                      : " aspect-square"
                  } flex items-center justify-center relative`}
                >
                  {/* Dot pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, white 1px, transparent 1px)",
                        backgroundSize: "16px 16px",
                      }}
                    />
                  </div>

                  {/* SDC watermark */}
                  <span className="text-white/30 font-bold text-2xl sm:text-3xl select-none pointer-events-none">
                    SDC
                  </span>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-3 shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#31A1DB"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <p className="text-xs text-muted-foreground mt-1.5 px-0.5 truncate">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              className="h-11 px-8 rounded-full border-primary text-primary hover:bg-[#EAF5FC] font-semibold"
              render={<Link href="/gallery" />}
            >
              Load More
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
