import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const EXPLORE = [
  { label: "About", href: "/about" },
  { label: "Committee", href: "/committee" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
];

const CONNECT = [
  { label: "Join the Club", href: "/membership" },
  { label: "Partner With Us", href: "/partners" },
  { label: "Alumni Network", href: "/alumni" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/sdc.jkkniu/",
    path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
  {
    label: "Twitter",
    href: "#",
    path: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-[#E5E5E5]">
      <div className="container mx-auto max-w-5xl px-5 md:px-8 pt-16 pb-10">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <span className="h-8 w-8 rounded-lg flex items-center justify-center text-white font-black text-[10px] tracking-widest" style={{ backgroundColor: "#C8001E" }}>SDC</span>
              <span className="font-bold text-[15px] tracking-tight">JKKNIU-SDC</span>
            </Link>
            <p className="text-[13px] text-[#737373] leading-[1.7] max-w-xs mb-6">
              Empowering students at Jatiya Kabi Kazi Nazrul Islam University through innovation, leadership, and industry collaboration since 2018.
            </p>
            <div className="flex gap-2">
              {SOCIALS.map(({ label, href, path }) => (
                <Link
                  key={label}
                  href={href}
                  className="h-9 w-9 rounded-lg border border-[#E8E8E8] flex items-center justify-center text-[#6B6B6B] hover:text-[#C8001E] hover:border-[#C8001E]/30 hover:bg-red-50 transition-all touch-target"
                >
                  <svg className="h-[15px] w-[15px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d={path} clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">{label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-2">
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#A3A3A3] mb-4">Explore</p>
            <ul className="space-y-2.5">
              {EXPLORE.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-[13px] text-[#737373] hover:text-foreground transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-2">
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#A3A3A3] mb-4">Connect</p>
            <ul className="space-y-2.5">
              {CONNECT.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-[13px] text-[#737373] hover:text-foreground transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#A3A3A3] mb-4">Contact</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" style={{ color: '#C8001E' }} />
                <span className="text-[13px] text-[#737373] leading-[1.6]">
                  Jatiya Kabi Kazi Nazrul Islam University Campus,<br />Trishal, Mymensingh
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0" style={{ color: '#C8001E' }} />
                <span className="text-[13px] text-[#737373]">jkkniusdc@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#E5E5E5] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#A3A3A3]">© {year} JKKNIU-SDC. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-[12px] text-[#A3A3A3] hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms"   className="text-[12px] text-[#A3A3A3] hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
