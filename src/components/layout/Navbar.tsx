"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "About",      href: "/about" },
  { name: "Committee",  href: "/committee" },
  { name: "Events",     href: "/events" },
  { name: "Partners",   href: "/partners" },
  { name: "Membership", href: "/membership" },
  { name: "Gallery",    href: "/gallery" },
  { name: "Blog",       href: "/blog" },
  { name: "Contact",    href: "/contact" },
];

/**
 * The wayfinding rail: a cream signage bar with a hard ink rule,
 * diamond markers on each link, and a stamped JOIN NOW ticket.
 */
export function Navbar({ isLoggedIn = false }: { isLoggedIn?: boolean }) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-cream/95 backdrop-blur-sm border-b-[3px] border-ink">
      <nav className="container mx-auto max-w-6xl flex h-16 items-center justify-between px-5 md:px-8">

        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 hover:opacity-80 transition-opacity">
          <div className="flex items-center justify-center h-10 w-10 bg-white p-1 rounded-sm border-2 border-ink">
            <img src="/jkkniu-sdc transparent logo.png" alt="JKKNIU-SDC Logo" className="w-full h-full object-contain" />
          </div>
          <span className="display-caps text-[18px] tracking-tight">
            JKKNIU<span className="text-hall">-SDC</span>
          </span>
        </Link>

        {/* Desktop links — wayfinding with diamond markers */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.name}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "marker-diamond px-3 py-2 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors touch-target",
                    active ? "text-hall" : "text-ink/70 hover:text-hall"
                  )}
                >
                  {l.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-6 shrink-0">
          <Link
            href={isLoggedIn ? "/profile" : "/login"}
            className="text-[11px] font-bold uppercase tracking-[0.15em] text-ink/70 hover:text-hall transition-colors"
          >
            {isLoggedIn ? "Profile" : "Sign in"}
          </Link>
          <Link
            href="/partners"
            className="inline-flex items-center justify-center bg-stamp text-white text-[11px] font-bold uppercase tracking-[0.15em] px-6 py-2.5 hover:bg-hall transition-colors shadow-[4px_4px_0_0_#101010] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            Partner Inquire
          </Link>
        </div>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                className="flex lg:hidden h-11 w-11 items-center justify-center border-2 border-ink rounded-md text-ink"
              />
            }
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </SheetTrigger>

          <SheetContent side="right" className="w-full sm:w-80 p-0 border-l-0 bg-ink text-cream">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="flex flex-col h-full">

              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-cream/15">
                <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center h-9 w-9 bg-white p-1 rounded-md">
                    <img src="/jkkniu-sdc transparent logo.png" alt="JKKNIU-SDC Logo" className="w-full h-full object-contain" />
                  </div>
                  <span className="display-caps text-[17px]">
                    JKKNIU<span className="text-stamp">-SDC</span>
                  </span>
                </Link>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="h-11 w-11 flex items-center justify-center text-cream"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto py-3 px-3">
                {NAV_LINKS.map((l) => {
                  const active = pathname.startsWith(l.href);
                  return (
                    <Link
                      key={l.name}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between px-3 py-3.5 rounded-md display-caps text-[19px] touch-target transition-colors",
                        active ? "text-brass" : "text-cream/80 hover:text-cream hover:bg-cream/5"
                      )}
                    >
                      {l.name}
                    </Link>
                  );
                })}
              </div>

              {/* CTA footer */}
              <div className="p-4 border-t border-cream/15 safe-bottom">
                <Link
                  href="/membership"
                  onClick={() => setOpen(false)}
                  className="stub inline-flex w-full items-center justify-center bg-stamp text-white text-[14px] font-bold uppercase tracking-[0.08em] px-5 py-3.5"
                  style={{ ["--notch" as string]: "var(--ink)" }}
                >
                  Join now
                </Link>
                <Link
                  href={isLoggedIn ? "/profile" : "/login"}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center text-[12px] font-bold uppercase tracking-[0.14em] text-cream/60 hover:text-cream py-3 mt-1 touch-target transition-colors"
                >
                  {isLoggedIn ? "Manage profile" : "Sign in to your account"}
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
