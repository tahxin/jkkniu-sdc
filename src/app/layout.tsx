import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { auth } from "@/auth";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "JKKNIU-SDC | Student Development Club",
  description:
    "The official website of JKKNIU-SDC — empowering students at Jatiya Kabi Kazi Nazrul Islam University through innovation, leadership, and collaboration.",
  keywords: ["JKKNIU", "SDC", "student club", "university", "Bangladesh"],
  openGraph: {
    title: "JKKNIU-SDC | Student Development Club",
    description: "Empowering students through innovation, leadership, and community.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#C8001E",  // Android status bar + iOS PWA
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
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <Navbar isLoggedIn={isLoggedIn} />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
