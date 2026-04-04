import ScrollReveal from "./ScrollReveal";
import { Brain, Globe, Briefcase, Users, BookOpen, Lightbulb, GraduationCap, Trophy, Rocket, Heart } from "lucide-react";

const advantages = [
  { icon: Brain, title: "Mindset Mastery", desc: "Resilience. Focus. Confidence." },
  { icon: Globe, title: "Global Immersion", desc: "International exposure & exchanges." },
  { icon: Briefcase, title: "Industry Connect", desc: "Direct corporate partnerships." },
  { icon: Users, title: "Leadership Labs", desc: "Real-world management training." },
  { icon: BookOpen, title: "Case Pedagogy", desc: "Harvard-style case study learning." },
  { icon: Lightbulb, title: "Innovation Hub", desc: "Startup incubation & mentoring." },
  { icon: GraduationCap, title: "Academic Rigor", desc: "Cutting-edge curriculum design." },
  { icon: Trophy, title: "Competitions", desc: "National & international contests." },
  { icon: Rocket, title: "Career Launch", desc: "100% placement assistance." },
  { icon: Heart, title: "Holistic Growth", desc: "Mind, body & spirit development." },
];

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 font-heading text-[10rem] md:text-[16rem] font-bold text-primary/3 leading-none select-none -translate-y-1/4 translate-x-1/4">
        10
      </div>
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Why Choose Us</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Ashoka's <span className="italic">10-Dimensional</span><br />BBA Advantages
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {advantages.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.05}>
              <div className="group p-6 bg-card rounded-sm border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500 text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <item.icon size={22} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
