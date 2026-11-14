import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { PageBanner } from "@/components/world/PageBanner";
import { Ticket } from "@/components/world/Ticket";
import { cn } from "@/lib/utils";

type EventStatus = "Upcoming" | "Past";

interface ClubEvent {
  id: string;
  title: string;
  category: string;
  status: EventStatus;
  date: string;
  location: string;
  description: string;
  attendees: string;
  /** Thumbnail block tone for events without a photo */
  tone?: "hall" | "ink";
  image?: string;
}

const events: ClubEvent[] = [
  {
    id: "bizcase-2025",
    title: "BizCase 2025",
    category: "Competition",
    status: "Upcoming",
    date: "TBA",
    location: "JKKNIU",
    description:
      "Step into the boardroom of tomorrow. BizCase is the ultimate proving ground for aspiring strategists and problem-solvers. Tackle complex, real-world corporate dilemmas, test your analytical prowess under pressure, and pitch your solutions to industry veterans.",
    attendees: "Expected 400+ teams",
    tone: "hall",
  },
  {
    id: "soft-skill-fest",
    title: "Soft Skill Fest",
    category: "Workshop",
    status: "Upcoming",
    date: "TBA",
    location: "JKKNIU Campus",
    description:
      "Technical knowledge gets you the interview; soft skills get you the job. An immersive experience dedicated to the unwritten rules of success — high-impact communication, emotional intelligence, and leadership modules.",
    attendees: "200+ expected",
    tone: "ink",
  },
  {
    id: "national-event-rise-above-all",
    title: "National Event & Rise Above All",
    category: "Summit",
    status: "Upcoming",
    date: "TBA",
    location: "JKKNIU Campus",
    description:
      "Our national events unite the brightest minds from across the country in a celebration of youth leadership and innovation. Compete on a grand scale, connect with visionaries, and rise above the rest.",
    attendees: "1000+ expected",
    tone: "hall",
  },
  {
    id: "futurenation-future-makers",
    title: "Futurenation & Future Makers",
    category: "Workshop",
    status: "Upcoming",
    date: "TBA",
    location: "JKKNIU Campus",
    description:
      "The future isn't something you wait for; it's something you build. A community of forward-thinkers dedicated to modern career tools and continuous learning, with the real-world exposure to navigate tomorrow.",
    attendees: "300+ expected",
    tone: "ink",
  },
  {
    id: "cv-writing-4",
    title: "CV Writing Competition 4.0",
    category: "Competition",
    status: "Upcoming",
    date: "Deadline: July 24, 2025",
    location: "Online",
    description:
      "Registration is open now! Enhance your professional profile and stand out to top recruiters in our premier CV writing challenge.",
    attendees: "Open for all students",
    image: "/images/cv-writing.jpg",
  },
  {
    id: "farewell-alumni-meetup",
    title: "Farewell & Alumni Meet Up",
    category: "Networking",
    status: "Upcoming",
    date: "December 5",
    location: "JKKNIU Campus",
    description:
      "An evening of nostalgia and networking as we bid farewell to our graduating members and welcome our esteemed alumni back to the campus.",
    attendees: "Members & alumni",
    image: "/images/alumni-meetup.jpg",
  },
  {
    id: "career-job-fairs",
    title: "Career & Job Fairs",
    category: "Career",
    status: "Past",
    date: "July 30, 2023",
    location: "JKKNIU Campus",
    description:
      "Our flagship career initiatives — corporate partners, exclusive hiring opportunities, and speaker panels — engineered to launch careers. Held in association with Excellence Bangladesh.",
    attendees: "500+ attendees",
    tone: "ink",
  },
  {
    id: "bizcase-2020",
    title: "BizCase 2020",
    category: "Competition",
    status: "Past",
    date: "2020",
    location: "JKKNIU / Online",
    description:
      "A massive success drawing over 370 teams from more than 65 universities, challenging the next generation of business leaders to solve real-world corporate problems.",
    attendees: "370+ teams",
    tone: "hall",
  },
];

const filterTabs = ["All", "Summit", "Workshop", "Competition", "Career"] as const;

function Thumb({ event }: { event: ClubEvent }) {
  return (
    <div className="h-24 w-24 md:h-28 md:w-28 shrink-0 border-2 border-ink overflow-hidden">
      {event.image ? (
        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
      ) : (
        <div
          className={cn(
            "w-full h-full flex items-center justify-center",
            event.tone === "ink" ? "bg-ink text-brass" : "bg-hall text-cream"
          )}
        >
          <span className="display-caps text-3xl">{event.title.charAt(0)}</span>
        </div>
      )}
    </div>
  );
}

function EventRow({ event }: { event: ClubEvent }) {
  return (
    <article className="program-row group flex items-start gap-5 md:gap-7 px-2 md:px-4 py-7 hover:bg-secondary/50 transition-colors">
      <Thumb event={event} />
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2.5 mb-2">
          <span
            className={cn(
              "stamp-chip",
              event.status === "Upcoming" ? "text-hall" : "text-muted-foreground"
            )}
          >
            {event.status}
          </span>
          <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-stamp">
            {event.category}
          </span>
        </div>
        <h3 className="display-caps text-[20px] md:text-[23px] mb-2 group-hover:text-stamp transition-colors">
          {event.title}
        </h3>
        <p className="text-[13.5px] text-muted-foreground leading-normal line-clamp-2 max-w-3xl mb-3">
          {event.description}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-1.5 text-[12.5px] text-muted-foreground">
          <li className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {event.date}
          </li>
          <li className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {event.location}
          </li>
          <li className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5" />
            {event.attendees}
          </li>
        </ul>
      </div>
      <Link
        href={`/events/${event.id}`}
        className="shrink-0 self-center inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-stamp opacity-0 group-hover:opacity-100 max-md:hidden transition-opacity"
      >
        Details <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

export default function EventsPage() {
  const upcoming = events.filter((e) => e.status === "Upcoming");
  const past = events.filter((e) => e.status === "Past");

  return (
    <main className="min-h-screen">
      <PageBanner
        title="Events & programs"
        intro="From national summits to intensive workshops — year-round programs that challenge, connect, and elevate our community."
        tone="hall"
      />

      {/* Program stats */}
      <div className="border-b-[3px] border-ink bg-cream">
        <div className="container mx-auto max-w-6xl px-5 md:px-8 grid grid-cols-3">
          {[
            { n: String(upcoming.length), label: "Upcoming events" },
            { n: "1,000+", label: "Total attendees" },
            { n: "30+", label: "Events hosted" },
          ].map(({ n, label }, i) => (
            <div
              key={label}
              className={cn("py-6 md:py-8", i > 0 && "border-l-2 border-paper-line pl-6 md:pl-10")}
            >
              <p className="display-caps text-3xl md:text-4xl text-stamp tabular-nums">{n}</p>
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-muted-foreground mt-1">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Filter tabs (static) */}
      <nav
        aria-label="Event category filter"
        className="sticky top-16 z-10 bg-cream/95 backdrop-blur-sm border-b-2 border-ink px-5 md:px-8"
      >
        <div className="container mx-auto max-w-6xl flex items-center gap-1 overflow-x-auto">
          {filterTabs.map((tab, index) => (
            <button
              key={tab}
              type="button"
              className={cn(
                "shrink-0 min-h-[44px] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.1em] border-b-[3px] -mb-0.5 transition-colors",
                index === 0
                  ? "border-stamp text-stamp"
                  : "border-transparent text-muted-foreground hover:text-ink"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Upcoming */}
      <section className="px-5 md:px-8 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="display-caps text-3xl md:text-4xl mb-8">Upcoming events</h2>
          <div className="border-t-2 border-b-2 border-ink">
            {upcoming.map((event) => (
              <EventRow key={event.id} event={event} />
            ))}
          </div>
          <p className="text-[13px] text-muted-foreground mt-6">
            Register early — seats fill fast.
          </p>
        </div>
      </section>

      {/* Past */}
      <section className="px-5 md:px-8 pb-16 md:pb-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="display-caps text-3xl md:text-4xl mb-8 text-muted-foreground">
            Past events
          </h2>
          <div className="border-t-2 border-b-2 border-ink">
            {past.map((event) => (
              <EventRow key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-hall text-cream border-t-[3px] border-ink">
        <div className="container mx-auto max-w-6xl px-5 md:px-8 py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <h2 className="display-caps text-4xl md:text-5xl max-w-lg mb-4">
              Want to host an event?
            </h2>
            <p className="text-cream/70 max-w-xl text-[15px] leading-[1.7]">
              We partner with organizations, companies, and universities to
              co-host impactful programs. Reach out and let&apos;s build
              something great together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Ticket href="/contact" tone="cream" notch="var(--hall)">
              Get in touch
            </Ticket>
            <Ticket href="/about" tone="outline" notch="var(--hall)">
              Learn about us
            </Ticket>
          </div>
        </div>
      </section>
    </main>
  );
}
