import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <section className="px-5 md:px-8 py-24 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <h1 className="display-caps text-4xl md:text-5xl mb-12">
            Contact Us.
          </h1>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                Reach out to the JKKNIU Skill Development Club for partnerships,
                membership inquiries, or general questions. We&apos;ll respond within
                3 business days.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-[15px] mb-1">Email</h3>
                  <Link
                    href="mailto:contact@jkkniu-sdc.org"
                    className="text-[15px] text-stamp hover:underline"
                  >
                    contact@jkkniu-sdc.org
                  </Link>
                </div>
                <div>
                  <h3 className="font-bold text-[15px] mb-1">Address</h3>
                  <p className="text-[15px] text-muted-foreground">
                    Jatiya Kabi Kazi Nazrul Islam University,
                    <br />Mymensingh 2205,
                    <br />Bangladesh
                  </p>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[13px] font-bold uppercase tracking-[0.1em] mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border-2 border-ink bg-transparent px-4 py-3 text-[15px]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[13px] font-bold uppercase tracking-[0.1em] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-2 border-ink bg-transparent px-4 py-3 text-[15px]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-[13px] font-bold uppercase tracking-[0.1em] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full border-2 border-ink bg-transparent px-4 py-3 text-[15px]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-stamp hover:gap-3.5 transition-all"
              >
                Send Message <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}