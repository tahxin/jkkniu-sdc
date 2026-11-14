import type { Metadata, Viewport } from "next";
import { Anton, Archivo } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { auth } from "@/auth";
import { Analytics } from "@vercel/analytics/next"

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700"],
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: "400",
});

export const metadata: Metadata = {
  title: "JKKNIU-SDC | Skill Development Club",
  description:
    "The official website of JKKNIU-SDC — the Skill Development Club of Jatiya Kabi Kazi Nazrul Islam University, bridging campus and corporate Bangladesh since 2018.",
  keywords: ["JKKNIU", "SDC", "skill development", "student club", "university", "Bangladesh"],
  openGraph: {
    title: "JKKNIU-SDC | Skill Development Club",
    description:
      "The Skill Development Club of Jatiya Kabi Kazi Nazrul Islam University — workshops, competitions, and job fairs that turn students into expert human resources.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#101010",  // Android status bar + iOS PWA
  viewportFit: "cover",   // iOS notch support
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const isLoggedIn = !!session?.user;

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${archivo.variable} ${anton.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <Navbar isLoggedIn={isLoggedIn} />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
