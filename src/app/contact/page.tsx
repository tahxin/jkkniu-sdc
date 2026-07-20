import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      label: "Location",
      value:
        "Jatiya Kabi Kazi Nazrul Islam University, Trishal, Mymensingh-2220, Bangladesh",
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      label: "Email",
      value: "contact@jkkniu-sdc.org",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      label: "Phone",
      value: "+880 1XXX-XXXXXX",
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      label: "Office Hours",
      value: "Saturday – Thursday, 10:00 AM – 4:00 PM",
    },
  ];

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#EAF5FC] to-white pt-24 pb-16 px-5">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-3">
            Contact Us
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
            Have a question, idea, or just want to say hello? We would love to
            hear from you. Reach out to the JKKNIU-SDC team and we will get back
            to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Two-column: Form + Info */}
      <section className="px-5 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* LEFT — Contact Form */}
            <div className="bg-white border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold tracking-tight text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form className="flex flex-col gap-5" noValidate>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    className="h-11 rounded-xl border border-border bg-gray-50 px-4 text-sm text-gray-900 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="h-11 rounded-xl border border-border bg-gray-50 px-4 text-sm text-gray-900 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="h-11 rounded-xl border border-border bg-gray-50 px-4 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/40 transition appearance-none cursor-pointer"
                  >
                    <option value="">Select a subject...</option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="membership">Membership</option>
                    <option value="media">Media / Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Write your message here..."
                    className="rounded-xl border border-border bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full h-12 rounded-2xl bg-primary text-white text-sm font-semibold tracking-wide hover:bg-primary/90 active:scale-[0.98] transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* RIGHT — Contact Info */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-gray-900 mb-2">
                  Contact Information
                </h2>
                <p className="text-sm text-muted-foreground">
                  You can also find us through any of the channels below.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex gap-3 items-start bg-white border border-border rounded-2xl p-4 shadow-sm"
                  >
                    <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-[0.15em] uppercase text-primary mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm text-gray-800 leading-relaxed">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-3">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-primary">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-primary">
                      <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM8 19H5V9h3v10zM6.5 7.75A1.75 1.75 0 1 1 6.5 4.25a1.75 1.75 0 0 1 0 3.5zM20 19h-3v-5.5c0-1.378-1.122-2.5-2.5-2.5S12 12.122 12 13.5V19H9V9h3v1.515C12.861 9.558 14.076 9 15.5 9 17.985 9 20 11.015 20 13.5V19z" />
                    </svg>
                  </a>

                  {/* Twitter / X */}
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter / X"
                    className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-primary">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Us / Map Placeholder */}
      <section className="px-5 pb-16 md:pb-24">
        <div className="container mx-auto max-w-4xl">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-3">
            Our Location
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-8">
            Find Us
          </h2>
          <div className="bg-secondary rounded-2xl h-64 flex flex-col items-center justify-center gap-3 text-muted-foreground border border-border">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-medium">JKKNIU Campus, Trishal</p>
            <p className="text-xs text-muted-foreground">
              Mymensingh-2220, Bangladesh
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
