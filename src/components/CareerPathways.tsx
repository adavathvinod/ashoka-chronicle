import ScrollReveal from "./ScrollReveal";
import { Briefcase, GraduationCap, Globe, Building, Rocket, Users } from "lucide-react";

const pathways = [
  { icon: Briefcase, title: "Job-Ready at Graduation", desc: "Step into the workforce with confidence through our placement partnerships." },
  { icon: GraduationCap, title: "MBA Entrance Support", desc: "Ace your entrance exams with our coaching and academic support." },
  { icon: Globe, title: "Study Abroad", desc: "Partnerships with international universities for semester exchanges." },
  { icon: Building, title: "Public Sector Pathway", desc: "Support for civil services, banking, and government career paths." },
  { icon: Rocket, title: "Entrepreneurship & Startup", desc: "Resources, mentoring, and seed capital for business ideas." },
  { icon: Users, title: "Family Business Management", desc: "Learn to innovate, lead, and expand your family-owned business." },
];

const CareerPathways = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Your Future</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground max-w-4xl mx-auto">
              Craft Your Future, Choose Your Own <span className="italic">Business Breakthrough</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pathways.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="group p-8 border border-border rounded-sm hover:border-primary/30 hover:bg-card transition-all duration-500">
                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <item.icon size={24} />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerPathways;
