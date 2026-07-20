import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Mail } from "lucide-react";

const CURRENT_COMMITTEE = [
  { id: 1, name: "Aktab Uddin Sarwar", role: "President", email: "contact@jkkniu-sdc.edu", linkedin: "#", image: "" },
  { id: 2, name: "Shahjalal Ahmed Nishat", role: "Vice President", email: "contact@jkkniu-sdc.edu", linkedin: "#", image: "" },
  { id: 3, name: "Shahadat Hossain Monna", role: "General Secretary (Strategic)", email: "contact@jkkniu-sdc.edu", linkedin: "#", image: "" },
  { id: 4, name: "Md. Habibur Rahman", role: "General Secretary (Operation)", email: "contact@jkkniu-sdc.edu", linkedin: "#", image: "" },
  { id: 5, name: "Mst. Sifat Khanom", role: "Treasurer", email: "contact@jkkniu-sdc.edu", linkedin: "#", image: "" },
  { id: 6, name: "Asadur Rahman Robiul", role: "Joint Secretary", email: "contact@jkkniu-sdc.edu", linkedin: "#", image: "" },
  { id: 7, name: "Md. Abrar Hasan", role: "Organizing Secretary", email: "contact@jkkniu-sdc.edu", linkedin: "#", image: "" },
  { id: 8, name: "Md. Rabby Hossen", role: "Organizing Secretary", email: "contact@jkkniu-sdc.edu", linkedin: "#", image: "" },
];

const PREVIOUS_COMMITTEES = [
  {
    year: "2025–2026",
    members: [
      { id: 9, name: "Md. Mostakim", role: "President" },
      { id: 10, name: "Sadia Afrin Salvy", role: "Vice-President" },
      { id: 11, name: "Samiul Islam", role: "Vice-President" },
      { id: 12, name: "Mahmud Hasan", role: "Vice-President" },
      { id: 13, name: "Belal Hasan Shawon", role: "General Secretary (Strategic)" },
      { id: 14, name: "Mst. Moriyam Akter Tania", role: "General Secretary (Operations)" },
      { id: 15, name: "Faizul Islam Nayem", role: "Treasurer" },
      { id: 16, name: "Mahajabin Fariha", role: "Joint Secretary" },
      { id: 17, name: "Rabea Akter Umi", role: "Joint Secretary" },
      { id: 18, name: "Rijve Ahmed", role: "Organising Secretary" },
      { id: 19, name: "Md Habibur Rahman", role: "Organising Secretary" },
    ],
  },
];

export default function CommitteePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-secondary/30 py-20 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Executive Committee</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Meet the dedicated student leaders driving the University Club forward.
            </p>
          </div>
        </div>
      </section>

      {/* Current Committee */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">2026–2027 Session</h2>
            <h3 className="text-3xl font-bold">Current Committee</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CURRENT_COMMITTEE.map((member) => (
              <Card key={member.id} className="overflow-hidden border-border/50 group transition-all hover:border-primary/30 hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="p-6 flex flex-col items-center text-center">
                    <Avatar className="h-32 w-32 mb-6 border-4 border-background shadow-md">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                    <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                    <div className="flex gap-4">
                      <Link href={member.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                      <Link href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </Link>
                    </div>
                  </div>
                  <div className="bg-secondary/50 p-4 text-center border-t border-border/50">
                    <Link href={`/profile/${member.id}`} className="text-sm font-semibold hover:text-primary transition-colors">
                      View Full Profile &rarr;
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Committees Archive */}
      <section className="py-24 bg-secondary/20 border-t border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Historical Archive</h2>
              <h3 className="text-3xl font-bold">Previous Committees</h3>
            </div>

            <div className="space-y-12">
              {PREVIOUS_COMMITTEES.map((committee) => (
                <div key={committee.year} className="bg-background rounded-2xl p-8 border border-border/50 shadow-sm">
                  <h4 className="text-2xl font-bold mb-6 text-primary border-b pb-4">{committee.year}</h4>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {committee.members.map((member) => (
                      <div key={member.id} className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-secondary text-secondary-foreground font-semibold">
                            {member.name.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h5 className="font-semibold">{member.name}</h5>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
