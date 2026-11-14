import { PageBanner } from "@/components/world/PageBanner";

const GALLERY_IMAGES = [
  { src: "/images/cv-writing.jpg", title: "CV Writing Competition", category: "Competition" },
  { src: "/images/alumni-meetup.jpg", title: "Alumni Meetup & Networking", category: "Community" },
  { src: "/images/mou-signing.jpg", title: "Corporate MoU Signing Ceremony", category: "Alliance" },
  { src: "/images/new-year-2026.jpg", title: "New Year Celebration 2026", category: "Culture" },
  { src: "/images/recap-2025.jpg", title: "Annual Year Recap 2025", category: "Milestone" },
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col dossier-grid">
      <PageBanner
        title="Visual Registry."
        intro="Documented moments from our competitions, workshops, alumni meets, and corporate alliances."
        tone="hall"
      />

      <section className="px-5 md:px-8 py-24 md:py-32 bg-white">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-10">
          {GALLERY_IMAGES.map((img, i) => (
            <div key={img.title} className={`border-2 border-ink bg-card group ${i === 0 ? 'md:col-span-2' : ''}`}>
              <div className="overflow-hidden aspect-[16/9] relative">
                <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-4 left-4 stamp-chip bg-ink text-white border-none">{img.category}</span>
              </div>
              <div className="p-6 bg-white border-t-2 border-ink flex justify-between items-center">
                <h3 className="display-caps text-2xl">{img.title}</h3>
                <span className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest">Archive 0{i+1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}