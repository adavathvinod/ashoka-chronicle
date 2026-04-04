import ScrollReveal from "./ScrollReveal";
import studentsCollab from "@/assets/students-collab.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="absolute -top-8 -left-8 font-heading text-[8rem] md:text-[12rem] font-bold text-primary/5 leading-none select-none">
                ACBM
              </div>
              <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">About Us</p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
                Where Future<br />
                <span className="italic text-primary">Business Leaders</span><br />
                Begin
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                At Ashoka College of Business Management (ACBM), Powered by ASB, our 10 Dimensional BBA program combines academic excellence with real-world exposure. We empower students through global insights, innovative learning, and industry-driven experiences.
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                Our campus fosters leadership, innovation, and entrepreneurship. The Global Immersion Program (GIP) enables students to travel abroad for academic masterclasses, business workshops, and cultural exchanges—gaining firsthand international exposure.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative group overflow-hidden rounded-sm">
              <img
                src={studentsCollab}
                alt="Students collaborating"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-charcoal/80 to-transparent">
                <p className="font-heading text-2xl text-cream italic">
                  "The world becomes your classroom."
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
