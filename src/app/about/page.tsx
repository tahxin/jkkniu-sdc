import { Button } from "@/components/ui/button";
import { Download, Target, Eye, Shield } from "lucide-react";
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
                    Founded in 2010, the University Club was established with a singular vision: to bridge the gap between academic theory and real-world application. What started as a small group of passionate students has grown into the university's premier student organization.
                  </p>
                  <p>
                    Over the years, we have hosted hundreds of events, ranging from national summits and inter-university competitions to intimate workshops and career fairs. Our alumni network spans the globe, with former members now leading major corporations and pioneering innovative startups.
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
                    To empower students by providing a platform for skill development, leadership opportunities, and industry connections, fostering an environment where innovation thrives.
                  </p>
                </div>
                <div>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the leading student organization globally recognized for producing industry-ready professionals and visionary leaders who make a positive impact on society.
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

            {/* Sidebar / Advisory Panel */}
            <div className="space-y-8">
              <div className="bg-secondary/20 rounded-2xl p-6 border border-border/50">
                <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Faculty Advisor
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground shrink-0">
                    [Photo]
                  </div>
                  <div>
                    <h4 className="font-semibold">Dr. Sarah Jenkins</h4>
                    <p className="text-sm text-muted-foreground">Professor, Computer Science</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "The University Club represents the very best of our student body—driven, innovative, and deeply committed to excellence."
                </p>
              </div>

              <div className="bg-secondary/20 rounded-2xl p-6 border border-border/50">
                <h3 className="font-bold text-lg mb-6">Advisory Panel</h3>
                <div className="space-y-6">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground shrink-0">
                        [Photo]
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">John Doe {item}</h4>
                        <p className="text-xs text-muted-foreground">Industry Expert</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
