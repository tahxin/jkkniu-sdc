import { Button } from "@/components/ui/button";
import { Download, Target, Eye, Shield, Users } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-secondary/30 py-20 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About the Club</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover our history, our mission, and the principles that guide our community of student leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              {/* History */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Our History</h2>
                <div className="prose prose-lg dark:prose-invert">
                  <p>
                    Established on March 13, 2018, the Jatiya Kabi Kazi Nazrul Islam University Skill Development Club (JKKNIU-SDC) was founded with a singular vision: to bridge the gap between academic theory and real-world corporate expectations.
                  </p>
                  <p>
                    What started as a small group of passionate students has grown into a nationwide skill development movement. The club organizes workshops, inter-university competitions, seminars, and national-level events to transform students into expert, adept human resources capable of contributing their excellence anywhere in the world.
                  </p>
                </div>
              </div>

              {/* Core Values */}
              <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t">
                <div>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To make students aware of how to become a valuable resource and to provide them with specialized programs for skill development. The ultimate objective is to produce adept and expert human resources.
                  </p>
                </div>
                <div>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To ignite a widespread skill development movement that begins at JKKNIU and expands across the entire country. The organization envisions transforming the younger generation into expert human resources dedicated to contributing to the nation's development.
                  </p>
                </div>
              </div>

              {/* Constitution */}
              <div className="pt-8 border-t">
                <h2 className="text-3xl font-bold mb-6">Club Constitution</h2>
                <p className="text-muted-foreground mb-6">
                  The University Club operates under a strict constitution that governs our operations, elections, and member responsibilities. We believe in complete transparency and accountability.
                </p>
                <Button className="gap-2" render={<Link href="/assets/constitution.pdf" target="_blank" />}>
                  <Download className="h-4 w-4" />
                  Download Constitution PDF
                </Button>
              </div>
            </div>

            {/* Sidebar / Leadership */}
            <div className="space-y-8">
              <div className="bg-secondary/20 rounded-2xl p-6 border border-border/50">
                <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Historical Leadership
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground shrink-0 overflow-hidden">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Ibnul Haider Nakib</h4>
                    <p className="text-sm text-muted-foreground">Founding President</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground shrink-0 overflow-hidden">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sohel Sadman Islam</h4>
                    <p className="text-sm text-muted-foreground">President (Job Fair 2023)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground shrink-0 overflow-hidden">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Md. Abdul Awaul</h4>
                    <p className="text-sm text-muted-foreground">President (Bizcase 2025)</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/20 rounded-2xl p-6 border border-border/50">
                <h3 className="font-bold text-lg mb-6">Alumni & Success Stories</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground shrink-0 overflow-hidden">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Farjana Akter Rakhi</h4>
                      <p className="text-xs text-muted-foreground">Successful Corporate Career</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
