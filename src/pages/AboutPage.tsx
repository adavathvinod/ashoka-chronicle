import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import studentsCollab from "@/assets/students-collab.jpg";
import campusLife from "@/assets/campus-life.jpg";
import graduation from "@/assets/graduation.jpg";

const milestones = [
  { year: "2018", title: "Foundation", desc: "ACBM was established with a vision to redefine business education in India." },
  { year: "2020", title: "Global Immersion Program", desc: "Launched GIP enabling students to gain international academic exposure." },
  { year: "2022", title: "Startup Incubation Centre", desc: "Opened a dedicated centre to nurture student entrepreneurs with mentoring and seed funding." },
  { year: "2024", title: "Industry Partnerships", desc: "Forged partnerships with 100+ recruiters and Fortune 500 companies for placements." },
  { year: "2025", title: "10-Dimensional BBA", desc: "Introduced the revolutionary 10-Dimensional BBA curriculum powered by ASB." },
];

const leadership = [
  { name: "Dr. Ashoka Reddy", role: "Founder & Chairman", img: studentsCollab },
  { name: "Prof. Kavitha Sharma", role: "Academic Director", img: campusLife },
  { name: "Mr. Ravi Teja", role: "Director of Placements", img: graduation },
];

const AboutPage = () => {
  return (
    <div className="bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img src={studentsCollab} alt="About ACBM" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="relative z-10 text-center">
          <ScrollReveal>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Our Story</p>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-cream leading-tight">
              About <span className="italic">ACBM</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <div className="p-10 bg-primary rounded-sm">
                <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Our Vision</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                  Empowering Tomorrow's <span className="italic">Leaders</span>
                </h2>
                <p className="font-body text-lg text-primary-foreground/80 leading-relaxed">
                  Empowering students with business excellence and ethical leadership. We envision a world where every graduate becomes a catalyst for positive change in the global business landscape.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="p-10 bg-card border border-border rounded-sm">
                <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Our Mission</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Innovation & <span className="italic">Growth</span>
                </h2>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  Foster innovation, entrepreneurship, and holistic student development. Through our 10-dimensional BBA program, we combine academic rigour with real-world exposure to create industry-ready professionals.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Our Journey</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                Milestones of <span className="italic">Excellence</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-border" />
            {milestones.map((m, i) => (
              <ScrollReveal key={m.year} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`relative flex items-center mb-12 ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
                  <div className={`w-5/12 p-6 bg-background border border-border rounded-sm ${i % 2 === 0 ? "text-right mr-auto" : "text-left ml-auto"}`}>
                    <span className="font-heading text-2xl font-bold text-primary">{m.year}</span>
                    <h3 className="font-heading text-xl font-semibold text-foreground mt-1">{m.title}</h3>
                    <p className="font-body text-sm text-muted-foreground mt-2">{m.desc}</p>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Leadership</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                Meet Our <span className="italic">Visionaries</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((person, i) => (
              <ScrollReveal key={person.name} delay={i * 0.15}>
                <div className="group relative overflow-hidden rounded-sm">
                  <img src={person.img} alt={person.name} className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/90 to-transparent">
                    <h3 className="font-heading text-xl font-bold text-cream">{person.name}</h3>
                    <p className="font-body text-sm text-gold">{person.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
