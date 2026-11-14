import { MapPin, Mail, Phone, Clock, ArrowUpRight } from "lucide-react";
import { PageBanner } from "@/components/world/PageBanner";

const inputClass =
  "h-12 w-full rounded-md border border-input bg-cream px-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-stamp/40 focus:border-stamp transition";

const CHANNELS = [
  {
    icon: MapPin,
    label: "Location",
    value:
      "Jatiya Kabi Kazi Nazrul Islam University, Trishal, Mymensingh-2220, Bangladesh",
  },
  {
    icon: Mail,
    label: "Email",
    value: "jkkniusdc@gmail.com",
    href: "mailto:jkkniusdc@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "01792485527",
    href: "tel:01792485527",
  },
  {
    icon: Clock,
    label: "Office hours",
    value: "Saturday – Thursday, 10:00 AM – 4:00 PM",
  },
];

const SOCIALS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/sdc.jkkniu/",
    path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    path: "M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM8 19H5V9h3v10zM6.5 7.75A1.75 1.75 0 1 1 6.5 4.25a1.75 1.75 0 0 1 0 3.5zM20 19h-3v-5.5c0-1.378-1.122-2.5-2.5-2.5S12 12.122 12 13.5V19H9V9h3v1.515C12.861 9.558 14.076 9 15.5 9 17.985 9 20 11.015 20 13.5V19z",
  },
  {
    name: "Twitter / X",
    href: "https://twitter.com",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner
        title="Get in touch"
        intro="Have a question, idea, or just want to say hello? Reach out to the JKKNIU-SDC team and we will get back to you as soon as possible."
        tone="hall"
      />

      {/* ── Form + channels ── */}
      <section className="px-5 md:px-8 py-20 md:py-24">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14">
          {/* LEFT — message form */}
          <div className="bg-card border-2 border-ink p-7 sm:p-10 h-fit">
            <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-stamp marker-diamond mb-4">
              Send us a message
            </p>
            <form className="flex flex-col gap-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[13px] font-bold uppercase tracking-[0.06em]">
                    Full name
                  </label>
                  <input id="name" type="text" placeholder="Your full name" className={inputClass} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[13px] font-bold uppercase tracking-[0.06em]">
                    Email address
                  </label>
                  <input id="email" type="email" placeholder="you@example.com" className={inputClass} />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-[13px] font-bold uppercase tracking-[0.06em]">
                  Subject
                </label>
                <select id="subject" className={`${inputClass} appearance-none cursor-pointer`}>
                  <option value="">Select a subject…</option>
                  <option value="general">General inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="membership">Membership</option>
                  <option value="media">Media / press</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-[13px] font-bold uppercase tracking-[0.06em]">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message here…"
                  className="w-full rounded-md border border-input bg-cream px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-stamp/40 focus:border-stamp transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="stub self-start inline-flex touch-target items-center bg-stamp text-white text-[14px] font-bold uppercase tracking-[0.08em] px-8 py-3.5 hover:brightness-110 transition-[filter]"
                style={{ ["--notch" as string]: "var(--card)" }}
              >
                Send message
              </button>
            </form>
          </div>

          {/* RIGHT — channels of record */}
          <div>
            <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-hall mb-4">
              Contact information
            </p>
            <p className="text-[14px] text-muted-foreground leading-[1.7] mb-8 max-w-[45ch]">
              You can also find us through any of the channels below.
            </p>

            <div className="border-t-2 border-ink">
              {CHANNELS.map(({ icon: Icon, label, value, href }, i) => (
                <div key={label} className="program-row flex items-start gap-4 px-1 py-5">
                  <span className="display-caps text-[15px] text-stamp tabular-nums mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-1.5 flex items-center gap-2">
                      <Icon className="h-4 w-4 text-hall" /> {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-[14.5px] font-semibold hover:text-stamp transition-colors break-words"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-[14.5px] leading-[1.6]">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mt-10 mb-4">
              Follow us
            </p>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="touch-target inline-flex items-center justify-center border-2 border-ink bg-card hover:bg-ink hover:text-cream transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Find us ── */}
      <section className="px-5 md:px-8 pb-24 md:pb-28">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-hall text-cream border-2 border-ink px-7 py-14 sm:px-12 flex flex-col items-center text-center gap-4">
            <MapPin className="h-8 w-8 text-brass" aria-hidden="true" />
            <p className="display-caps text-[clamp(1.8rem,4vw,2.8rem)]">
              JKKNIU Campus, Trishal
            </p>
            <p className="text-[14px] text-cream/70">
              Mymensingh-2220, Bangladesh
            </p>
            <a
              href="https://www.google.com/maps/search/Jatiya+Kabi+Kazi+Nazrul+Islam+University"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-3 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-brass hover:gap-3.5 transition-all"
            >
              Open in maps <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
